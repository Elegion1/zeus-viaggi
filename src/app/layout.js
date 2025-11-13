import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"; // i tuoi stili personali
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/CookieConsentBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <GoogleTagManager gtmId="GTM-M4KKC2H8" />
      <body>
        <CookieConsentBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
