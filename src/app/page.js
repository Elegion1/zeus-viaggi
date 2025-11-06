import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import sectionsData from "../data/sections.json";
import companyData from "../data/owner.json";

export const metadata = {
  title: `Noleggio Autobus con Conducente a Trapani | ${companyData.companyName}`,
  description: `Dal ${companyData.foundationYear} ${companyData.companyName} offre servizi di noleggio autobus, minivan e auto con conducente in Sicilia. Trasferimenti da e per aeroporti, eventi e tour turistici.`,
  keywords: [
    "noleggio autobus Trapani",
    "ncc Sicilia",
    "noleggio bus Palermo",
    "minibus con conducente",
    "transfer aeroportuali Trapani",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <main className="hero-background text-light position-relative">
        <div className="hero-overlay position-absolute"></div>
        <div className="container position-relative z-1">
          <div className="hero-text position-absolute">
            <h1 className="responsive-text fw-bold mb-3">
              Noleggio autobus con conducente a Trapani e in tutta la Sicilia
            </h1>
            <p className="lead responsive-text-p">
              Professionalità, eleganza e affidabilità dal 2004
            </p>
          </div>
        </div>
      </main>

      <div className="d-flex justify-content-center align-items-center my-5">
        {sectionsData.map((section, index) => (
          <a
            key={index}
            href={`#${section.id}`}
            className={`btn btn-secondary rounded-0 ${
              index !== sectionsData.length - 1 ? "me-2" : ""
            }`}
          >
            {section.title}
          </a>
        ))}
      </div>

      {sectionsData.map((section, index) => (
        <Section
          id={section.id}
          key={section.id}
          title={section.title}
          text={section.text}
          image={section.image}
          reverse={index % 2 !== 0} // alterna layout
        />
      ))}

      {/* Contatti */}
      <section id="contatti" className="contact-section py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">Contatti</h2>
          <div className="row gx-4">
            {/* Info dirette */}
            <div className="col-lg-5 mb-4">
              <div className="contact-info">
                <p>
                  <strong>📍 Sede:</strong> {companyData.address.street},{" "}
                  {companyData.address.streetNumber} {companyData.address.city}{" "}
                  ({companyData.address.province}), {companyData.address.region}
                </p>
                <p>
                  <strong>📞 Telefono:</strong>{" "}
                  <a href={`tel:${companyData.phone}`}>{companyData.phone}</a>
                </p>
                <p>
                  <strong>✉️ Email:</strong>{" "}
                  <a href={`mailto:${companyData.email}`}>
                    {companyData.email}
                  </a>
                </p>
                <p>
                  <strong>P.IVA / C.F.:</strong> {companyData.vatNumber} /{" "}
                  {companyData.codFisc}
                </p>
              </div>
              {/* Se vuoi mettere una piccola mappa statica o embed */}
              <div className="mt-4 map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.6612766655567!2d12.69412977580381!3d37.944399402370955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131bd6137ef159db%3A0x9abb332b4f1874c3!2sZeus%20Viaggi%20-%20Noleggio%20Pullman%20Di%20Fonte%20Vincenzo%20%26%20C.!5e1!3m2!1sit!2sit!4v1762416962647!5m2!1sit!2sit"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Zeus Viaggi"
                ></iframe>
              </div>
            </div>

            {/* Modulo di contatto */}
            <div className="col-lg-7">
              <span className="text-muted">Campi obbligatori *</span>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row gy-4 align-items-center">
            {/* Logo e descrizione */}
            <div className="col-lg-4 text-center text-lg-start">
              <img
                src="/logo.png"
                alt="Logo Zeus Viaggi"
                className="footer-logo mb-3"
              />
              <p className="small">
                Zeus Viaggi è specializzata nel noleggio autobus e minivan con
                conducente a Trapani e in tutta la Sicilia. Viaggiare con noi
                significa comfort, sicurezza e professionalità.
              </p>
            </div>

            {/* Link rapidi */}
            <div className="col-lg-4 text-center">
              <h6 className="fw-bold mb-3">Link utili</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#chi-siamo" className="footer-link">
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a href="#servizi" className="footer-link">
                    Servizi
                  </a>
                </li>
                <li>
                  <a href="#flotta" className="footer-link">
                    Flotta
                  </a>
                </li>
                <li>
                  <a href="#contatti" className="footer-link">
                    Contatti
                  </a>
                </li>
              </ul>
            </div>

            {/* Contatti */}
            <div className="col-lg-4 text-center text-lg-end">
              <h6 className="fw-bold mb-3">Contatti</h6>
              <p className="mb-1">
                📞{" "}
                <a href={`tel:${companyData.phone}`} className="footer-link">
                  {companyData.phone}
                </a>
              </p>
              <p className="mb-1">
                ✉️{" "}
                <a href="mailto:info@zeusviaggi.it" className="footer-link">
                  {companyData.email}
                </a>
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
            <a
              href="https://www.linkedin.com/in/giovanni-sugamiele-webdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Giovanni Sugamiele
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
