import { MobileNav } from "@/components/mobile-nav";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "../styles/globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vertex - IT Solutions",
  description: "Transforming Businesses with Custom IT Solutions.",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning>
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
