import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
