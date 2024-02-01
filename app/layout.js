import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ceo Dog API",
  description: "Page for displaying all dog breeds and pictures of breeds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
