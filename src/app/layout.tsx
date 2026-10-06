import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });
const body = IBM_Plex_Sans({ variable: "--font-plex-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Citewise · Find out if AI recommends you", template: "%s · Citewise" },
  description:
    "Citewise tracks whether ChatGPT, Perplexity, Gemini and Claude recommend your brand, drafts the pages that close the gaps, and answers the visitors AI sends.",
  openGraph: { type: "website", siteName: "Citewise" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
