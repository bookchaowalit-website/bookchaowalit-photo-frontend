import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const photoDisplay = Fraunces({ variable: "--font-photo-display", subsets: ["latin"], weight: ["500", "600", "700"] });
const photoSans = Figtree({ variable: "--font-photo-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = { title: "Photo Gallery | Bookchaowalit", description: "A small contact sheet for visual notes and field frames.", authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }], metadataBase: new URL("https://bookchaowalit.com"), robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${photoDisplay.variable} ${photoSans.variable}`}><body className="antialiased"><span hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: "<!-- THESIS: darkroom contact sheet for verified visual notes. OWN-WORLD: graphite, warm paper, olive chemistry marks, registration lines. STORY: browse the small archive and understand which visual proof is attached. FIRST VIEWPORT: one proof frame owns the contact sheet. FORM: candidate 4, darkroom contact sheet; seed key bc8f84a3. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->" }} />{/* THESIS: Photo is a darkroom contact sheet, where the one verified frame is held at proof scale and missing imagery is named instead of faked.
OWN-WORLD: graphite room, warm paper captions, olive chemistry marks, registration lines, and an authored skyline proof drawing.
STORY: A visitor searches or filters the archive, opens the one available frame, and understands exactly which visual proof is attached.
FIRST VIEWPORT: the contact sheet title and a large single proof frame share the first viewport; the primary action is selecting a frame from the archive rail.
FORM: candidate 4 of the grounded list, a darkroom contact sheet; seed key bc8f84a3.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}<Analytics /><SpeedInsights />{children}</body></html>; }
