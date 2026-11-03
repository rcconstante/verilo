import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Verilo — A little more human",
  description:
    "A visual concept for a friendlier AI writing companion. Made for the humans behind the words.",
  icons: { icon: "/brand/verilo-mark.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
