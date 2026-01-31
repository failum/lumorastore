// app/layout.tsx
import type { Metadata, Viewport } from "next"; // Add Viewport import
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import { ServiceWorkerProvider } from "@/components/pwa/ServiceWorkerProvider";
import { FloatingBubbles } from "@/components/FloatingBubble";

export const metadata: Metadata = {
  title: "Lumora tech",
  description: "All your lighting solutions",
  manifest: '/site.webmanifest', 
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Lumora Tech',
  },
};

// FIX: Separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Lumoratech" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        <FloatingBubbles count={100}/>
        <ServiceWorkerProvider>
          <ClerkProvider>
            
            <ToasterProvider />
            <Navbar />
            {/* Add padding-top to prevent content from hiding behind navbar */}
            <main className="min-h-screen pt-16 md:pt-20">
              {children}
            </main>
            <Footer />
            <InstallPrompt />
          </ClerkProvider>
        </ServiceWorkerProvider>
      </body>
    </html>
  );
}