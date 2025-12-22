import companyData from "../../data/owner.json";
import Image from "next/image";
import Link from "next/link";

export default function NoleggioBusTrapani() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero position-relative text-light text-center d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
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
          <h1 className="display-5 fw-bold">Noleggio Bus a Trapani</h1>
          <p className="lead">
            Comfort, sicurezza e professionalità per i tuoi viaggi in Sicilia
          </p>
          <Link href="/contatti" className="btn btn-primary mt-3">
            Richiedi un preventivo
          </Link>
        </div>
      </section>

      {/* DESCRIZIONE PRINCIPALE */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            Servizio di Noleggio Autobus a Trapani
          </h2>
          <p className="lead text-center mb-5">
            {companyData.companyName} offre servizi di{" "}
            <strong>noleggio autobus con conducente a Trapani</strong> e in
            tutta la Sicilia, ideali per gruppi, tour organizzati, matrimoni,
            eventi aziendali e trasferimenti aeroportuali. I nostri mezzi
            moderni e confortevoli garantiscono viaggi sicuri e piacevoli.
          </p>

          <div className="row align-items-center gx-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src="/images/bus.JPG"
                alt="Noleggio autobus con conducente a Trapani"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Perché scegliere noi</h3>
              <ul className="list-unstyled">
                <li>
                  🚌 Ampia flotta di autobus, minibus e auto con conducente
                </li>
                <li>🕓 Servizio attivo 24 ore su 24, 7 giorni su 7</li>
                <li>📍 Partenze da Trapani, Palermo e tutta la Sicilia</li>
                <li>👨‍✈️ Autisti esperti e qualificati</li>
                <li>💶 Prezzi trasparenti e preventivi su misura</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-5 bg-primary text-light">
        <div className="container">
          <h2 className="fw-bold mb-3">Prenota ora il tuo autobus a Trapani</h2>
          <p className="mb-4">
            Siamo a disposizione per gite, tour turistici, cerimonie o
            trasferimenti da e per gli aeroporti siciliani.
          </p>
          <Link href="/contatti" className="btn btn-light btn-lg">
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
