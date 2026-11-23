import fs from "node:fs";
import path from "node:path";

/**
 * Build-time check for optional photos in /public/images.
 * Drop a file in and the matching section switches from the illustration
 * to the real photo on the next build — no code change needed.
 */
function find(base: string): string | null {
  for (const ext of ["webp", "png", "jpg", "jpeg"]) {
    const rel = `/images/${base}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

export const photos = {
  /** Hero portrait — a transparent-background cut-out looks best. */
  doctor: find("doctor"),
  /** Clinic / reception photo (landscape). */
  clinic: find("clinic"),
  /** Consultation or care photo (portrait or square). */
  care: find("care"),
};
