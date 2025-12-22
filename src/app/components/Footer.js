import Image from "next/image";
import companyData from "../../data/owner.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Logo e descrizione */}
          <div className="col-lg-4 text-center text-lg-start">
            <Image
              src="/images/logo.png"
              alt="logo-zeus-viaggi"
              className="footer-logo mb-3"
              width={935}
              height={308}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <p className="small">
              Zeus Viaggi è specializzata nel noleggio autobus e minivan con
              conducente a Trapani e in tutta la Sicilia. Viaggiare con noi
              significa comfort, sicurezza e professionalità.
            </p>
          </div>

          {/* Link rapidi */}
          <div className="col-lg-4 text-center">
            <h4 className="fw-bold mb-3">Link utili</h4>
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="#chi-siamo" className="footer-link">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href="#servizi" className="footer-link">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="#flotta" className="footer-link">
                  Flotta
                </Link>
              </li>
              <li>
                <Link href="#contatti" className="footer-link">
                  Contatti
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="footer-link">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div id="contatti" className="col-lg-4 text-center text-lg-end">
            <h4 className="fw-bold mb-3">Contatti</h4>
            <p className="mb-1">
              📞{" "}
              <Link href={`tel:${companyData.phone}`} className="footer-link">
                {companyData.phone}
              </Link>
            </p>
            <p className="mb-1">
              ✉️{" "}
              <Link
                href={`mailto:${companyData.email}`}
                className="footer-link"
              >
                {companyData.email}
              </Link>
            </p>
            <p className="mb-0">
              📍 {companyData.address.city} ({companyData.address.province}),{" "}
              {companyData.address.region}
            </p>
          </div>
        </div>

        <hr className="my-4 text-secondary" />

        {/* Copyright */}
        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} {companyData.companyName} – Tutti i
          diritti riservati.
          <br />
          Sito web realizzato da{" "}
          <Link
            href="https://elegion.it"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Giovanni Sugamiele
          </Link>
        </div>
      </div>
    </footer>
  );
}
