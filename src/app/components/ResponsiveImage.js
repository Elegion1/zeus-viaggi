export default function ResponsiveImage({
  srcBase,
  sizes = [400, 800, 1600],
  ext = "webp",
  alt = "",
  className = "",
}) {
  // Se srcBase è un oggetto import Next.js, usa src
  const base = "images/resized";
  const filename = srcBase;
  

  const srcSet = sizes
    .map((size) => `${base}/${size}/${filename}.${ext} ${size}w`)
    .join(", ");

  return (
    <img
      src={`${base}/${sizes[0]}/${filename}.${ext}`} // fallback: dimensione più piccola
      srcSet={srcSet}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1600px"
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
