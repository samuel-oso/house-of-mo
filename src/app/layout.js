import "./globals.css";
import {
  Cormorant_Garamond,
  Nunito_Sans,
  Rouge_Script,
} from "next/font/google";
import Sidebar from "@/components/Sidebar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const rougeScript = Rouge_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rouge",
  display: "swap",
});

export const metadata = {
  title: "House of Mo'Xperience | Weddings & Events",
  description: "Your Personal Dream Maker — Weddings & Events Planning",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${nunitoSans.variable} ${rougeScript.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css"
        />
      </head>
      <body className="h-full flex">
        <Sidebar />
        <main className="lg:ml-[23%] flex-1 h-full overflow-y-auto scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
