import Section from "./components/Section";
import Hero from "./components/Hero";
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

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: companyData.companyName,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      companyData.address.street + " " + companyData.address.streetNumber,
    addressLocality: companyData.address.city,
    addressRegion: companyData.address.region,
    postalCode: companyData.address.zip,
    addressCountry: companyData.address.country,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero />

      <div className="d-flex justify-content-center align-items-center flex-wrap my-5 gap-2">
        {sectionsData.map((section, index) => (
          <a
            key={index}
            href={`#${section.id}`}
            className="btn btn-secondary rounded-0"
          >
            {section.title}
          </a>
        ))}
        <a className="btn btn-secondary rounded-0" href="/contatti">
          Contatti
        </a>
        <a
          className="btn btn-secondary rounded-0"
          href="#richiedi-informazioni"
        >
          Richiedi Informazioni
        </a>
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
          <div className="row gx-4">
            {/* Info dirette */}
            <div className="col-lg-5 mb-4">
              <h3 className="mb-4 text-center">Contatti</h3>
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
                  <strong>P.IVA:</strong> {companyData.vatNumber}
                </p>
              </div>
              {/* Se vuoi mettere una piccola mappa statica o embed */}
              <div className="mt-4 map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.6612766655567!2d12.69412977580381!3d37.944399402370955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131bd6137ef159db%3A0x9abb332b4f1874c3!2sZeus%20Viaggi%20-%20Noleggio%20Pullman%20Di%20Fonte%20Vincenzo%20%26%20C.!5e1!3m2!1sit!2sit!4v1762416962647!5m2!1sit!2sit"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Zeus Viaggi"
                ></iframe>
              </div>
            </div>

            {/* Modulo di contatto */}
            <div id="richiedi-informazioni" className="col-lg-7">
              <h3 className="text-center">Richiedi informazioni</h3>
              <p className="text-muted">Campi obbligatori *</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
