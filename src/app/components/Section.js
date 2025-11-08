export default function Section({ id, title, text, image, reverse }) {
  return (
    <section
      id={id}
      className={`section container ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="section-img">
        <img loading="lazy" src={image} alt={title} />
      </div>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
