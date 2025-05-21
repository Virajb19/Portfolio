import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from 'sonner'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Viraj Bhardwaj",
  description: "my Portfolio website",
  icons: [{ rel: "icon", url: "/coding.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}
        className={`${grotesk.className}antialiased`}
      >
        <Toaster position="top-center" richColors theme="dark"/>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
