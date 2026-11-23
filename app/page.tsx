/* eslint-disable @next/next/no-img-element */
import { ActionBar } from "@/components/ActionBar";
import { Header, Logo } from "@/components/Header";
import { Icon, LogoMark, LungsArt } from "@/components/Icon";
import { LeadForm } from "@/components/LeadForm";
import { photos } from "@/lib/assets";
import { faqs, focusAreas, nav, services, site, videos } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Highlights />
        <Doctor />
        <Services />
        <Videos />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

const trust = [
  { icon: "shield", title: "Trusted Care", text: "Evidence-based treatment" },
  { icon: "stethoscope", title: "Lung Specialist", text: "Consultant pulmonologist" },
  { icon: "heart", title: "Modern Diagnostics", text: "Lung function testing" },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100"
    >
      <div className="container-x grid items-center gap-8 pb-12 pt-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-0 lg:pt-6">
        <div className="lg:py-16">
          <p className="eyebrow">Your lungs, our priority</p>
          <h1 className="mt-3 text-[2.3rem] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Expert Lung Care
            <br />
            for an <span className="text-brand-600">Easier Breath</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed">
            Specialist care for asthma, allergy, COPD, persistent cough and
            sleep-related breathing problems — with compassion, clear answers
            and a plan that fits your life.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#book" className="btn btn-primary">
              <Icon name="calendar" className="size-4" /> Book Appointment
              <Icon name="arrow" className="size-4" />
            </a>
            <a href="#videos" className="btn btn-outline">
              <span className="grid size-6 place-items-center rounded-full bg-brand-600 text-white">
                <Icon name="play" className="size-3" />
              </span>
              Watch Our Videos
            </a>
          </div>

          <ul className="mt-9 grid grid-cols-3 gap-3 sm:max-w-lg">
            {trust.map((t) => (
              <li
                key={t.title}
                className="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
              >
                <Icon name={t.icon} className="size-7 shrink-0 text-brand-600" />
                <span className="leading-tight">
                  <span className="block text-[0.8rem] font-bold text-navy">
                    {t.title}
                  </span>
                  <span className="block text-[0.7rem]">{t.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-md lg:max-w-none lg:self-end">
      {/* soft organic blobs behind the portrait */}
      <div className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-[42%_58%_46%_54%/52%_44%_56%_48%] bg-gradient-to-br from-brand-200 to-brand-400/80" />
      <div className="absolute bottom-[6%] right-0 size-[42%] rounded-full bg-brand-300/60 blur-[2px]" />
      <div className="dots absolute right-[2%] top-[44%] h-16 w-14 opacity-70" />

      {photos.doctor ? (
        <img
          src={photos.doctor}
          alt={`${site.doctor.name}, ${site.doctor.title}`}
          className="absolute inset-x-0 bottom-0 mx-auto h-full w-auto object-contain object-bottom"
        />
      ) : (
        <LungsArt className="absolute inset-0 m-auto w-[62%] translate-y-[6%] drop-shadow-[0_18px_30px_rgb(15_79_191/0.35)]" />
      )}

      <div className="card animate-float absolute right-0 top-[10%] flex items-center gap-3 rounded-2xl px-4 py-3">
        <span className="grid size-9 place-items-center rounded-xl bg-brand-600 text-white">
          <Icon name="lungs" className="size-5" />
        </span>
        <span className="text-sm font-bold leading-tight text-navy">
          Breathe Easy,
          <br />
          Live Fully
        </span>
      </div>

      <div className="card absolute bottom-[8%] left-0 flex items-center gap-3 rounded-2xl px-4 py-3">
        <span className="grid size-10 place-items-center rounded-full bg-brand-100 text-sm font-extrabold text-brand-700">
          {site.doctor.initials}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold text-navy">
            {site.doctor.name}
          </span>
          <span className="block text-xs">{site.doctor.title}</span>
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────── Highlights ─────────────────────────── */

const highlights = [
  {
    icon: "stethoscope",
    title: "Our Clinic",
    subtitle: "Calm & Comfortable",
    text: "A welcoming, unhurried space where your symptoms are heard and every question gets a clear answer.",
    cta: "Learn More",
    href: "#doctor",
  },
  {
    icon: "lungs",
    title: "Our Services",
    subtitle: "Complete Lung Care",
    text: "From allergy and asthma to COPD, lung infections and sleep apnea — diagnosis and long-term care in one place.",
    cta: "Explore Services",
    href: "#services",
  },
  {
    icon: "calendar",
    title: "Easy Appointments",
    subtitle: "Book in Minutes",
    text: "Share your name and number, pick a date, and our team calls you back to confirm — quickly and easily.",
    cta: "Book Now",
    href: "#book",
  },
];

function Highlights() {
  return (
    <section id="about" className="container-x py-12 lg:py-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-5">
        <div className="card relative min-h-56 overflow-hidden md:col-span-2 lg:col-span-1">
          {photos.clinic ? (
            <img
              src={photos.clinic}
              alt={`Inside ${site.name}`}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-brand-100 via-white to-brand-200">
              <div className="dots absolute left-4 top-4 h-12 w-16 opacity-50" />
              <div className="flex items-center gap-3 rounded-2xl bg-white/80 px-5 py-4 shadow-card backdrop-blur">
                <LogoMark className="size-12" />
                <span className="leading-none">
                  <span className="block text-2xl font-extrabold text-navy">
                    {site.shortName}
                  </span>
                  <span className="mt-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                    {site.tagline}
                  </span>
                </span>
              </div>
              <div className="absolute inset-x-8 bottom-0 h-10 rounded-t-3xl bg-gradient-to-b from-brand-300/70 to-brand-400/70" />
            </div>
          )}
        </div>

        {highlights.map((h) => (
          <article key={h.title} className="card flex flex-col p-6">
            <span className="icon-badge">
              <Icon name={h.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy">{h.title}</h3>
            <p className="mt-1 text-sm font-semibold text-navy/80">{h.subtitle}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed">{h.text}</p>
            <a href={h.href} className="btn btn-soft mt-5 self-start">
              {h.cta} <Icon name="arrow" className="size-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── Doctor ───────────────────────────── */

function Doctor() {
  const { doctor } = site;
  return (
    <section id="doctor" className="py-12 lg:py-16">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_2.9fr] lg:items-center">
        <div>
          <h2 className="h2">
            Meet Your
            <br className="hidden lg:block" />{" "}
            <span className="text-brand-600">Lung Specialist</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">{doctor.bio}</p>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
          >
            <Icon name="youtube" className="size-5" /> Watch her on YouTube
          </a>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          <article className="card flex w-[72%] shrink-0 snap-center flex-col items-center p-5 text-center sm:w-auto">
            <div className="grid size-28 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-brand-100 to-brand-200 ring-4 ring-brand-50">
              {photos.doctor ? (
                <img
                  src={photos.doctor}
                  alt={doctor.name}
                  className="size-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <span className="text-3xl font-extrabold text-brand-700">
                  {doctor.initials}
                </span>
              )}
            </div>
            <h3 className="mt-4 whitespace-nowrap font-bold text-navy">{doctor.name}</h3>
            <p className="mt-1 text-sm text-brand-600">{doctor.title}</p>
            <p className="mt-3 flex items-center gap-1.5 text-xs">
              <Icon name="shield" className="size-4 text-brand-500" />
              {doctor.qualifications.length
                ? doctor.qualifications.join(", ")
                : "Respiratory Medicine"}
            </p>
            <a href="#book" className="btn btn-soft mt-4 w-full whitespace-nowrap px-3">
              Book a Visit <Icon name="arrow" className="size-4" />
            </a>
          </article>

          {focusAreas.map((f) => (
            <article
              key={f.title}
              className="card flex w-[72%] shrink-0 snap-center flex-col items-center p-5 text-center sm:w-auto"
            >
              <div className="grid size-28 place-items-center rounded-full bg-gradient-to-b from-brand-50 to-brand-100 text-brand-600 ring-4 ring-brand-50">
                <Icon name={f.icon} className="size-12" strokeWidth={1.4} />
              </div>
              <h3 className="mt-4 font-bold text-navy">{f.title}</h3>
              <p className="mt-1 text-sm text-brand-600">{f.subtitle}</p>
              <p className="mt-3 flex items-center gap-1.5 text-xs">
                <Icon name="check" className="size-4 text-brand-500" />
                {f.meta}
              </p>
              <a href="#services" className="btn btn-soft mt-4 w-full whitespace-nowrap px-3">
                View Details <Icon name="arrow" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── Services ──────────────────────────── */

function Services() {
  return (
    <section id="services" className="container-x py-12 lg:py-16">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <div className="card relative min-h-72 overflow-hidden lg:min-h-0">
          {photos.care ? (
            <img
              src={photos.care}
              alt="Consultation at the clinic"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-800">
              <div className="dots absolute bottom-6 left-6 h-16 w-20 opacity-30" />
              <LungsArt className="absolute inset-0 m-auto w-[58%] opacity-95 [filter:brightness(1.6)_saturate(0.6)]" />
            </div>
          )}
          <div className="card absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-2xl px-4 py-3">
            <span className="grid size-9 place-items-center rounded-xl bg-brand-600 text-white">
              <Icon name="heart" className="size-5" />
            </span>
            <span className="text-sm font-bold leading-tight text-navy">
              Better Breathing
              <br />
              <span className="font-medium text-ink">Brighter Tomorrow</span>
            </span>
          </div>
        </div>

        <div className="rounded-3xl bg-brand-100/60 p-5 sm:p-8">
          <h2 className="h2">
            Comprehensive <span className="text-brand-600">Lung Care</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed">
            A full range of respiratory services tailored to your needs — from
            routine check-ups and lung function tests to long-term care for
            chronic conditions.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.title}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgb(20_99_224/0.3)]"
              >
                <span className="icon-badge size-11">
                  <Icon name={s.icon} />
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-brand-500">
                    {s.kicker}
                  </span>
                  <span className="block text-sm font-bold text-navy">
                    {s.title}
                  </span>
                  <span className="mt-0.5 block text-xs">{s.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Videos ───────────────────────────── */

function Videos() {
  return (
    <section id="videos" className="container-x py-12 lg:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Lung health, explained simply</p>
          <h2 className="h2 mt-2">
            Learn from <span className="text-brand-600">Dr. Sreelakshmi</span>
          </h2>
        </div>
        <a
          href={site.youtube}
          target="_blank"
          rel="noopener"
          className="btn btn-soft"
        >
          <Icon name="youtube" /> Visit Channel
        </a>
      </div>

      <div className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {videos.map((v) => (
          <a
            key={v.id}
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noopener"
            className="card group w-[82%] shrink-0 snap-center overflow-hidden md:w-auto"
          >
            <div className="relative aspect-video overflow-hidden bg-brand-100">
              <img
                src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-navy/15">
                <span className="grid size-14 place-items-center rounded-full bg-white/95 text-brand-600 shadow-card transition group-hover:scale-110">
                  <Icon name="play" className="size-6" />
                </span>
              </span>
            </div>
            <div className="p-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-brand-500">
                {v.tag}
              </p>
              <h3 lang="ml" className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-navy">
                {v.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────── FAQ ────────────────────────────── */

function Faq() {
  return (
    <section id="faq" className="container-x py-12 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div>
          <h2 className="h2">
            Common <span className="text-brand-600">Questions</span>
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="card group rounded-2xl px-5 py-1 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                  {f.q}
                  <Icon
                    name="chevron"
                    className="size-5 shrink-0 text-brand-500 transition group-open:rotate-180"
                  />
                </summary>
                <p className="pb-4 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="card p-6 lg:sticky lg:top-24">
          <span className="icon-badge">
            <Icon name="phone" className="size-6" />
          </span>
          <h3 className="mt-4 text-xl font-bold text-navy">
            Not sure what you need?
          </h3>
          <p className="mb-5 mt-2 text-sm leading-relaxed">
            Leave your number and our team will call you back to help you choose
            the right appointment.
          </p>
          <LeadForm variant="callback" source="callback" />
        </aside>
      </div>
    </section>
  );
}

/* ───────────────────────────── Booking ───────────────────────────── */

function Booking() {
  return (
    <section id="book" className="container-x py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-400 p-5 sm:p-8 lg:p-10">
        <div className="absolute -bottom-16 -left-10 size-56 rounded-full bg-white/10" />
        <div className="absolute -right-12 -top-20 size-64 rounded-full bg-white/10" />

        <div className="relative grid gap-7 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="text-white">
            <span className="grid size-14 place-items-center rounded-full bg-white/20 ring-1 ring-white/40">
              <Icon name="calendar" className="size-7" />
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Book Your Appointment
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">
              Take the first step towards easier breathing. Schedule your visit
              today and let us care for your lungs.
            </p>
            <ul className="mt-5 hidden space-y-2 text-sm text-white/95 sm:block">
              {[
                "Call back from our team to confirm your slot",
                "No referral needed",
                "Bring your previous reports and prescriptions",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-[0_24px_50px_-20px_rgb(11_42_91/0.5)] sm:p-7">
            <LeadForm source="appointment" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */

function Footer() {
  return (
    <footer id="contact" className="border-t border-brand-100 bg-white pb-24 lg:pb-0">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Specialist respiratory care by {site.doctor.name},{" "}
            {site.doctor.title}.
          </p>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener"
            aria-label="YouTube channel"
            className="mt-4 inline-grid size-11 place-items-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100"
          >
            <Icon name="youtube" />
          </a>
        </div>

        <div>
          <h3 className="font-bold text-navy">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.slice(1, -1).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-brand-600">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className="hover:text-brand-600">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-navy">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-brand-600" />
              <a href={`tel:${site.phoneE164}`} className="hover:text-brand-600">
                {site.phoneDisplay}
              </a>
            </li>
            {site.email && (
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand-600">
                  {site.email}
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand-600" />
              {site.mapsUrl ? (
                <a href={site.mapsUrl} target="_blank" rel="noopener" className="hover:text-brand-600">
                  {site.address}
                </a>
              ) : (
                <span>{site.address}</span>
              )}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-navy">Clinic Hours</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                <span>
                  <span className="block font-semibold text-navy">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="container-x flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:pr-20">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            Information on this site is for general awareness and is not a
            substitute for medical advice. In an emergency, go to the nearest
            hospital.
          </p>
        </div>
      </div>
    </footer>
  );
}
