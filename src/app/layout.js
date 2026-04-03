import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "PWE | Weddings & Events",
  description: "Your Personal Dream Maker — Weddings & Events Planning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
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
