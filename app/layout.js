import "./globals.css";
import FooterComp from "./(pages)/home/footerComp";
import "rsuite/dist/rsuite-no-reset.min.css";
import { CustomProvider } from "rsuite";

export const metadata = {
  title: "Hunters",
  description: "Hunters ijdc app",
};
import Navbar from "./_components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased h-full bg-white">
        <Navbar />
        <CustomProvider>{children}</CustomProvider>

        <FooterComp />
      </body>
    </html>
  );
}
