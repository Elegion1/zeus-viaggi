export default function Hero() {
  return (
    <>
      <main
        fetchPriority="high"
        className="hero-background text-light position-relative"
      >
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
    </>
  );
}
