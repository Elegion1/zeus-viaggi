import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"; // i tuoi stili personali
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <GoogleTagManager gtmId="GTM-M4KKC2H8" />
      <body>{children}</body>
    </html>
  );
}
