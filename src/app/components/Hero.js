import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main
        fetchPriority="high"
        className="hero-background text-light position-relative"
      >
        <Image
          src="/images/image.JPG"
          alt="Autobus Zeus Viaggi"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
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
