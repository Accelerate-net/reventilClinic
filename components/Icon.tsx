import type { ReactNode, SVGProps } from "react";

const paths: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3M10 13v3a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="12" r="2" />
    </>
  ),
  lungs: (
    <>
      <path d="M12 3v9M12 12l-2.5 2M12 12l2.5 2" />
      <path d="M9 7C6 8 3.5 12 3.5 17c0 2 1 3 2.5 3 2 0 3.5-1 3.5-3V7zM15 7c3 1 5.5 5 5.5 10 0 2-1 3-2.5 3-2 0-3.5-1-3.5-3V7z" />
    </>
  ),
  wind: (
    <path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7a2.5 2.5 0 1 1-2.5 2.5" />
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />,
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  sparkle: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />
  ),
  heart: (
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 8l9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chat: (
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.2v5.6l5-2.8z" fill="currentColor" stroke="none" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.500 8 6.500" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "size-5",
  ...rest
}: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

/** Brand mark: a heart-shaped pair of lungs in a rounded badge. */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="rv-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b8cf5" />
          <stop offset="1" stopColor="#0f4fbf" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#rv-logo)" />
      <g fill="#fff">
        <rect x="18.8" y="8" width="2.4" height="12" rx="1.2" />
        <path d="M17.200 13.500c-4.200.8-8.200 6.200-8.200 12.700 0 3 1.500 4.800 3.800 4.800 3 0 5-1.800 5-4.800V14.300c0-.5-.3-.9-.6-.8z" />
        <path d="M22.800 13.500c4.200.8 8.200 6.200 8.200 12.700 0 3-1.500 4.800-3.800 4.800-3 0-5-1.800-5-4.800V14.300c0-.5.3-.9.6-.8z" />
      </g>
    </svg>
  );
}

/** Large decorative lungs used where no photo has been supplied. */
export function LungsArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="rv-lung" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#6fb1ff" />
          <stop offset="1" stopColor="#1463e0" />
        </linearGradient>
      </defs>
      <rect x="93" y="18" width="14" height="66" rx="7" fill="#0f4fbf" />
      <g id="rv-lobe">
        <path
          d="M86 58C66 54 38 90 32 132c-4 28 6 44 26 40 18-4 32-14 32-32V64c0-4-1-6-4-6z"
          fill="url(#rv-lung)"
        />
        <path
          d="M97 80c-4 18-20 20-30 34M76 104c-8 2-16 10-20 22M72 110c0 12-4 24-8 34"
          fill="none"
          stroke="#fff"
          strokeOpacity=".75"
          strokeWidth="3.500"
          strokeLinecap="round"
        />
      </g>
      <use href="#rv-lobe" transform="translate(200 0) scale(-1 1)" />
    </svg>
  );
}
