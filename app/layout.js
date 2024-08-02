import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const lato = Lato({ subsets: ["latin"] });

export const metadata = {
  title: "Onyinye and Daniel's Wedding",
  description: "Onyinye and Daniel's",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
