import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VARPEC | Web Development Agency",
  description: "We are VARPEC. We create memorable and emotional websites, digital experiences, and native apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
