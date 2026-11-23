"use client";

import { site } from "./site";

export type Lead = {
  name: string;
  phone: string;
  concern?: string;
  preferredDate?: string;
  /** Which form on the page produced the lead. */
  source: string;
};

const ATTR_KEY = "rv_attribution";
const ATTR_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
];

/** Remember where the visitor came from (first touch within the session). */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data: Record<string, string> = {
      landing: window.location.pathname,
      referrer: document.referrer,
    };
    for (const key of ATTR_PARAMS) {
      const value = params.get(key);
      if (value) data[key] = value;
    }
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(data));
  } catch {
    // storage unavailable (private mode) — attribution is best-effort
  }
}

function attribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) ?? "{}");
  } catch {
    return {};
  }
}

/** Indian mobile numbers: 10 digits starting 6–9, optional +91 / 0 prefix. */
export function normalisePhone(input: string): string | null {
  const digits = input.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function leadWhatsappMessage(lead: Lead) {
  const lines = [
    `Hello ${site.name}, I would like to book an appointment.`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
  ];
  if (lead.concern) lines.push(`Concern: ${lead.concern}`);
  if (lead.preferredDate) lines.push(`Preferred date: ${lead.preferredDate}`);
  return lines.join("\n");
}

/** Push a custom event to the GTM data layer (use it as a trigger in GTM). */
export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  (w.dataLayer ??= []).push({ event, ...params });
}

/**
 * Sends the lead to the configured endpoint.
 * Returns "sent" when it was posted, or "whatsapp" when there is no endpoint
 * (or the request failed) and the visitor must complete it over WhatsApp.
 */
export async function submitLead(lead: Lead): Promise<"sent" | "whatsapp"> {
  track("generate_lead", { form: lead.source, concern: lead.concern });
  if (!site.leadEndpoint) return "whatsapp";

  try {
    // text/plain + no-cors keeps this a "simple" request, which is what a
    // Google Apps Script web app accepts from a browser without CORS setup.
    await fetch(site.leadEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...lead,
        ...attribution(),
        page: window.location.href,
        submittedAt: new Date().toISOString(),
      }),
    });
    return "sent";
  } catch {
    return "whatsapp";
  }
}
