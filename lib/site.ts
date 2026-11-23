/**
 * Single source of truth for clinic details.
 * Anything marked TODO is a placeholder — replace before launch.
 */
export const site = {
  name: "Reventil Lung Clinic",
  shortName: "Reventil",
  tagline: "Lung Clinic",
  url: "https://reventilclinic.com",
  description:
    "Reventil Lung Clinic — specialist care for asthma, allergy, COPD, chronic cough, sleep apnea and other lung conditions by Dr. Sreelakshmi K P, Consultant Pulmonologist.",

  doctor: {
    name: "Dr. Sreelakshmi K P",
    title: "Consultant Pulmonologist",
    initials: "SK",
    // TODO: add degrees / registrations, e.g. ["MBBS", "MD (Respiratory Medicine)"]
    qualifications: [] as string[],
    bio: "Dr. Sreelakshmi K P is a pulmonologist dedicated to helping people breathe easier — from long-standing asthma and allergies to COPD, sleep-related breathing problems and persistent cough. She also runs a popular Malayalam YouTube channel that explains lung health in simple, practical terms.",
  },

  // TODO: replace with the clinic's real contact details.
  phoneDisplay: "+91 00000 00000",
  phoneE164: "+910000000000",
  /** WhatsApp number: country code + number, digits only. */
  whatsapp: "910000000000",
  email: "",
  address: "Clinic address to be updated",
  mapsUrl: "",
  hours: [
    { days: "Monday – Saturday", time: "Timings to be updated" },
    { days: "Sunday", time: "By appointment" },
  ],

  youtube: "https://www.youtube.com/@sreelakshmipathappiriyam7417",

  /**
   * Lead capture endpoint (Google Apps Script web app URL — see lead-capture/).
   * When empty, the forms hand the enquiry over to WhatsApp instead.
   */
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "",
  /** Google Tag Manager container. Analytics tags are configured inside GTM. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-M5DKV48D",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Videos", href: "#videos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const concerns = [
  "Asthma / Wheezing",
  "Allergy / Sneezing",
  "Long-standing cough",
  "Breathlessness",
  "COPD / Smoking related",
  "Snoring / Sleep problems",
  "Lung function test (PFT)",
  "Other",
];

export const services = [
  {
    icon: "wind",
    kicker: "Airways",
    title: "Asthma Care",
    text: "Inhaler plans & long-term control",
  },
  {
    icon: "sparkle",
    kicker: "Allergy",
    title: "Allergy & Rhinitis",
    text: "Trigger testing & treatment",
  },
  {
    icon: "lungs",
    kicker: "Chronic care",
    title: "COPD Clinic",
    text: "Management & rehabilitation",
  },
  {
    icon: "activity",
    kicker: "Diagnostics",
    title: "Lung Function Test",
    text: "PFT / spirometry assessment",
  },
  {
    icon: "moon",
    kicker: "Sleep",
    title: "Snoring & Sleep Apnea",
    text: "Evaluation & therapy",
  },
  {
    icon: "stethoscope",
    kicker: "Infections",
    title: "Cough & Lung Infections",
    text: "Pneumonia, flu & chronic cough",
  },
] as const;

export const focusAreas = [
  {
    icon: "wind",
    title: "Asthma & Allergy",
    subtitle: "Speciality Clinic",
    meta: "Children & adults",
  },
  {
    icon: "lungs",
    title: "COPD & Smoking",
    subtitle: "Speciality Clinic",
    meta: "Quit-smoking support",
  },
  {
    icon: "moon",
    title: "Sleep & Snoring",
    subtitle: "Speciality Clinic",
    meta: "Sleep apnea care",
  },
] as const;

export const videos = [
  {
    id: "NoEM8vnWkNE",
    title: "PFT Test എന്താണ്? ശ്വാസകോശത്തിന്റെ ആരോഗ്യം പരിശോധിക്കുന്നതെങ്ങനെ?",
    tag: "Lung function test",
  },
  {
    id: "OwmbtNP3zfQ",
    title: "ആസ്ത്മ ഉണ്ടോ? വ്യായാമം ചെയ്യാമോ? അറിയേണ്ട സത്യങ്ങൾ",
    tag: "Asthma & exercise",
  },
  {
    id: "T1j05sI3rJg",
    title: "മഴക്കാല പനി നിസ്സാരമാക്കരുത്! ഇൻഫ്ലുവൻസയെക്കുറിച്ച് അറിയേണ്ടതെല്ലാം",
    tag: "Flu & vaccination",
  },
];

export const faqs = [
  {
    q: "When should I see a pulmonologist?",
    a: "If you have a cough lasting more than three weeks, wheezing, breathlessness on mild exertion, repeated chest infections, loud snoring with daytime sleepiness, or asthma that is not well controlled, a lung specialist review is a good idea.",
  },
  {
    q: "Do I need a referral to book an appointment?",
    a: "No referral is needed. You can book directly using the form on this page, by phone, or on WhatsApp. Please bring any previous prescriptions, X-rays, scans and test reports.",
  },
  {
    q: "What is a lung function test (PFT)?",
    a: "A PFT, or spirometry, is a simple, painless breathing test that measures how much air your lungs hold and how quickly you can blow it out. It helps diagnose and monitor conditions such as asthma and COPD.",
  },
  {
    q: "Are inhalers safe for long-term use?",
    a: "Yes. Inhalers deliver a very small dose of medicine directly to the lungs, which makes them both effective and safe for long-term use when taken as prescribed. Your doctor will review your technique and dose regularly.",
  },
  {
    q: "How soon will I hear back after I submit the form?",
    a: "Our team will call you back during clinic hours to confirm a convenient time. For anything urgent, please call the clinic directly. In an emergency, go to the nearest hospital.",
  },
];
