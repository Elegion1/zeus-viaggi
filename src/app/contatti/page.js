import ContactForm from "../components/ContactForm";
import companyData from "../../data/owner.json";
import Image from "next/image";

export default function Contatti() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero position-relative text-light text-center d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        {/* Immagine di sfondo */}
        <Image
          src="/images/IMG_2803.jpeg"
          alt="Noleggio Bus a Trapani"
          fill
          fetchPriority="high"
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        />

        {/* Overlay scuro */}
        <div
          className="hero-overlay position-absolute w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        {/* Contenuto */}
        <div className="position-relative z-2 container">
          <h1 className="display-5 fw-bold">Contattaci</h1>
          <h2 className="lead">
            Comfort, sicurezza e professionalità per i tuoi viaggi in Sicilia
          </h2>
        </div>
      </section>

      <section id="contatti" className="contact-section py-5 bg-light">
        <h3 className="lead mb-4 text-center">
          Siamo qui per rispondere alle tue domande, fornirti un preventivo e
          progettare insieme il tuo viaggio.
        </h3>
        <div className="container p-5">
          <div className="row gx-4 d-flex justify-content-center align-items-center">
            {/* Modulo di contatto */}
            <div id="richiedi-informazioni" className="col-12">
              <h3 className="text-center">Richiedi informazioni</h3>
              <p className="text-muted">Campi obbligatori *</p>
              <ContactForm />
            </div>

            {/* Info dirette */}
            <div className="col-12 mt-5 p-5">
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
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Zeus Viaggi"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
