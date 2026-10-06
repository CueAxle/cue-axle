import React from "react";
import "./globals.css";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const instrumentSansHeading = Instrument_Sans({subsets:['latin'],variable:'--font-heading'});

const geistMono = Geist_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata = {
  title: "CueAxle Dashboard",
  description: "CueAxle Dashboard & Config",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-mono", geistMono.variable, instrumentSansHeading.variable)}>
      <body>{children}</body>
    </html>
  );
}
