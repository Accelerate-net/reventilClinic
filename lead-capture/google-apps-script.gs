/**
 * Reventil Lung Clinic — lead capture backend (Google Apps Script).
 *
 * Every form submission on the website is appended as a row to a Google Sheet,
 * and (optionally) emailed to the clinic.
 *
 * Setup (5 minutes):
 *  1. Create a Google Sheet, e.g. "Reventil Leads".
 *  2. Extensions → Apps Script, paste this file, set NOTIFY_EMAIL below.
 *  3. Deploy → New deployment → type "Web app"
 *       Execute as: Me        Who has access: Anyone
 *  4. Copy the web app URL (ends in /exec) and add it to the GitHub repo as
 *       Settings → Secrets and variables → Actions → Variables
 *       NEXT_PUBLIC_LEAD_ENDPOINT = <that URL>
 *     (for local testing put the same line in .env.local)
 *  5. Re-run the "Deploy to GitHub Pages" workflow.
 */

const SHEET_NAME = "Leads";
const NOTIFY_EMAIL = ""; // e.g. "clinic@example.com" — leave empty to skip emails

const COLUMNS = [
  "submittedAt", "name", "phone", "concern", "preferredDate", "source",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "fbclid", "referrer", "landing", "page",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.concat(["status"]));
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(COLUMNS.map((key) => clean(data[key])).concat(["New"]));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        "New appointment request: " + clean(data.name),
        [
          "Name: " + clean(data.name),
          "Phone: " + clean(data.phone),
          "Concern: " + clean(data.concern),
          "Preferred date: " + clean(data.preferredDate),
          "Form: " + clean(data.source),
          "Campaign: " + clean(data.utm_source) + " / " + clean(data.utm_campaign),
        ].join("\n")
      );
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Trim, cap length, and stop values being interpreted as spreadsheet formulas. */
function clean(value) {
  const text = String(value == null ? "" : value).trim().slice(0, 500);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
