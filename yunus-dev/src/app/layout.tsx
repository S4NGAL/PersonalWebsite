import type { Metadata } from "next";
import { instrumentSerif, dmSans, geistMono } from "@/lib/fonts";
import "@/styles/tokens.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yunus.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${dmSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans bg-bg-base text-text-secondary min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
