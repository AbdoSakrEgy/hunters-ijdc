import "./globals.css";

export const metadata = {
  title: "Mayadeen",
  description: "Mayadeen site",
};
import Navbar from "./_components/layout/navbar";
import FooterComp from "./_components/layout/footer/footerComp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased h-full bg-white">
        <Navbar />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
