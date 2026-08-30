import React from "react";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
