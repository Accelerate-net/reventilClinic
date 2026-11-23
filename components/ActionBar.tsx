"use client";

import { site } from "@/lib/site";
import { track, whatsappUrl } from "@/lib/leads";
import { Icon } from "./Icon";

const greeting = `Hello ${site.name}, I would like to book an appointment.`;

/** Mobile: fixed Call / WhatsApp / Book bar. Desktop: floating WhatsApp button. */
export function ActionBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-100 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
        <div className="grid grid-cols-[1fr_1fr_1.4fr] gap-2 p-2">
          <a
            href={`tel:${site.phoneE164}`}
            onClick={() => track("click_call", { location: "action_bar" })}
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700"
          >
            <Icon name="phone" className="size-4" /> Call
          </a>
          <a
            href={whatsappUrl(greeting)}
            target="_blank"
            rel="noopener"
            onClick={() => track("click_whatsapp", { location: "action_bar" })}
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-50 text-sm font-semibold text-emerald-700"
          >
            <Icon name="chat" className="size-4" /> WhatsApp
          </a>
          <a
            href="#book"
            onClick={() => track("click_book", { location: "action_bar" })}
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-600 text-sm font-semibold text-white shadow-cta"
          >
            <Icon name="calendar" className="size-4" /> Book Now
          </a>
        </div>
      </div>

      <a
        href={whatsappUrl(greeting)}
        target="_blank"
        rel="noopener"
        onClick={() => track("click_whatsapp", { location: "floating" })}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-30 hidden size-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-[0_12px_28px_-8px_rgb(31_168_85/0.7)] transition hover:scale-105 lg:grid"
      >
        <Icon name="chat" className="size-6" />
      </a>
    </>
  );
}
