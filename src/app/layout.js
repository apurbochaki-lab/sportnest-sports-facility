import { Khand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const khandFont = Khand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SportNest",
  description: "Best sports training facilities",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${khandFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
