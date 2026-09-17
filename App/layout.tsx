import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generate | Build websites and apps with AI",
  description: "Describe your idea and let Generate turn it into a polished website or app.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}