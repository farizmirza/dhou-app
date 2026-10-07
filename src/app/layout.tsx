import type { Metadata, Viewport } from "next";
import { Fredoka, Poppins, Amiri } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dhou - Belajar Bahasa Arab Fusha & 'Ammiyyah",
  description: "Aplikasi pembelajaran bahasa Arab interaktif dengan video kontekstual, gamified quiz, dan AI percakapan.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dhou",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF8904",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fredoka.variable} ${poppins.variable} ${amiri.variable} h-full select-none`}
    >
      <body className="h-full bg-slate-100 font-sans text-neutral-900 antialiased flex justify-center">
        {/* Mobile device viewport shell */}
        <div className="w-full max-w-[420px] min-h-screen bg-white shadow-xl flex flex-col relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
