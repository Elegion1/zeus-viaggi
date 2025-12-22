import ResponsiveImage from "./ResponsiveImage";
import Link from "next/link";

export default function Section({ id, title, text, image, reverse }) {
  return (
    <section
      id={id}
      className={`section container ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="section img">
        <ResponsiveImage filename={image} alt={title} />
      </div>
      <div className="section-text">
        <h3 className="fs-2">{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </section>
  );
}
