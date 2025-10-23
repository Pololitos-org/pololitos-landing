import { Bricolage_Grotesque, Nunito_Sans } from "next/font/google";
import { defaultMetadata } from "./metadata";
import type { Metadata } from "next";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial']
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bricolageGrotesque.variable} ${nunitoSans.variable} font-nunito antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
