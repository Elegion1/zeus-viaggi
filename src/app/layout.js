import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"; // i tuoi stili personali

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
