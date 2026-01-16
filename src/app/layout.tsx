import type { Metadata } from "next";
import { Irish_Grover, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import HomeLink from "@/components/HomeLink";

const irishGrover = Irish_Grover({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-irish-grover",
});
const barlow = Barlow_Semi_Condensed({
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-barlow",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Code Playground",
  description: "Sometimes you just need a space to play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${irishGrover.variable} ${barlow.variable}`} lang="en">
      <body>
        {/* <body className={css({ background: "light.surface.page" })}> */}
        <nav style={{ position: "fixed", top: "0", right: "0", zIndex: "1" }}>
          <HomeLink />
        </nav>
        {children}
      </body>
    </html>
  );
}
