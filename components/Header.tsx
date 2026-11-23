"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { captureAttribution, track } from "@/lib/leads";
import { Icon, LogoMark } from "./Icon";

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label={site.name}>
      <LogoMark />
      <span className="leading-none">
        <span className="block text-lg font-extrabold tracking-tight text-navy">
          {site.shortName}
        </span>
        <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
          {site.tagline}
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    captureAttribution();
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled || open ? "shadow-[0_6px_24px_-12px_rgb(11_42_91/0.25)]" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-2 text-sm font-medium transition hover:text-brand-600 ${
                i === 0
                  ? "text-brand-600 after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-600"
                  : "text-navy/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneE164}`}
            onClick={() => track("click_call", { location: "header" })}
            className="grid size-11 place-items-center rounded-full border border-brand-100 bg-brand-50 text-brand-600 lg:hidden"
            aria-label="Call the clinic"
          >
            <Icon name="phone" />
          </a>
          <a href="#book" className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex">
            Book Appointment <Icon name="arrow" className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-brand-100 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto bg-white lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-brand-50 py-4 text-lg font-semibold text-navy"
              >
                {item.label}
                <Icon name="arrow" className="size-4 text-brand-400" />
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-6 w-full"
            >
              <Icon name="calendar" className="size-4" /> Book Appointment
            </a>
            <a
              href={`tel:${site.phoneE164}`}
              className="btn btn-outline mt-3 w-full"
            >
              <Icon name="phone" className="size-4" /> Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
