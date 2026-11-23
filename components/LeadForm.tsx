"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { concerns, site } from "@/lib/site";
import {
  leadWhatsappMessage,
  normalisePhone,
  submitLead,
  track,
  whatsappUrl,
  type Lead,
} from "@/lib/leads";
import { Icon } from "./Icon";

type Props = {
  /** "full" = appointment form, "callback" = name + phone only. */
  variant?: "full" | "callback";
  source: string;
};

/** Stop past dates being picked (set on focus so the static HTML stays date-free). */
function setMinToday(e: FocusEvent<HTMLInputElement>) {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  e.currentTarget.min = d.toISOString().slice(0, 10);
}

type Status =
  | { state: "idle" | "sending" }
  | { state: "done"; lead: Lead; delivered: boolean };

export function LeadForm({ variant = "full", source }: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [error, setError] = useState("");
  const full = variant === "full";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = normalisePhone(String(data.get("phone") ?? ""));

    if (name.length < 2) return setError("Please enter your name.");
    if (!phone) return setError("Please enter a valid 10-digit mobile number.");
    setError("");

    const lead: Lead = {
      name,
      phone,
      concern: String(data.get("concern") ?? "") || undefined,
      preferredDate: String(data.get("date") ?? "") || undefined,
      source,
    };

    // Honeypot: bots fill the hidden field; show success but send nothing.
    if (data.get("company")) {
      return setStatus({ state: "done", lead, delivered: true });
    }

    // No endpoint configured: open WhatsApp now, while we still have the tap gesture.
    if (!site.leadEndpoint) {
      window.open(whatsappUrl(leadWhatsappMessage(lead)), "_blank", "noopener");
    }

    setStatus({ state: "sending" });
    const result = await submitLead(lead);
    setStatus({ state: "done", lead, delivered: result === "sent" });
  }

  if (status.state === "done") {
    const { lead, delivered } = status;
    return (
      <div className="flex flex-col items-center px-2 py-6 text-center" role="status">
        <span className="grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon name="check" className="size-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy">
          {delivered ? `Thank you, ${lead.name}!` : "One last step"}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed">
          {delivered
            ? `We have your request and will call you on ${lead.phone} during clinic hours to confirm your appointment.`
            : "Send your details to the clinic on WhatsApp to complete your request. We will reply to confirm your appointment."}
        </p>
        <a
          href={whatsappUrl(leadWhatsappMessage(lead))}
          target="_blank"
          rel="noopener"
          onClick={() => track("click_whatsapp", { location: `${source}_success` })}
          className="btn mt-5 w-full bg-[#1fa855] text-white hover:bg-[#178a45] sm:w-auto"
        >
          <Icon name="chat" className="size-4" />
          {delivered ? "Confirm faster on WhatsApp" : "Send on WhatsApp"}
        </a>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-4 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";
  const id = (field: string) => `${source}-${field}`;
  const label = "mb-1.5 block text-xs font-semibold text-navy";

  return (
    <form onSubmit={onSubmit} noValidate className={`grid gap-4 ${full ? "sm:grid-cols-2" : ""}`}>
      <div>
        <label htmlFor={id("name")} className={label}>
          Full Name *
        </label>
        <input
          id={id("name")}
          name="name"
          autoComplete="name"
          placeholder="Enter your name"
          className="field"
          required
        />
      </div>
      <div>
        <label htmlFor={id("phone")} className={label}>
          Phone Number *
        </label>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className="field"
          required
        />
      </div>

      {full && (
        <>
          <div>
            <label htmlFor={id("concern")} className={label}>
              Health Concern
            </label>
            <div className="relative">
              <select
                id={id("concern")}
                name="concern"
                defaultValue=""
                className="field appearance-none pr-10"
              >
                <option value="">Choose a concern</option>
                {concerns.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <Icon
                name="chevron"
                className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ink"
              />
            </div>
          </div>
          <div>
            <label htmlFor={id("date")} className={label}>
              Preferred Date
            </label>
            <input
              id={id("date")}
              name="date"
              type="date"
              onFocus={setMinToday}
              className="field"
            />
          </div>
        </>
      )}

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] size-px opacity-0"
      />

      <div className={full ? "sm:col-span-2" : ""}>
        {error && (
          <p role="alert" className="mb-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
        <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-70">
          <Icon name={full ? "calendar" : "phone"} className="size-4" />
          {sending ? "Sending…" : full ? "Book Appointment" : "Request a Call Back"}
        </button>
        <p className="mt-3 text-center text-xs text-ink/80">
          We only use your details to contact you about your appointment.
        </p>
      </div>
    </form>
  );
}
