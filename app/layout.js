import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const lato = Lato({ subsets: ["latin"] });

export const metadata = {
  title: "Gift and Daniel's Tale",
  // description: "Gift and Daniel's Wedding Website",
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
