import Image from "next/image";

export default function ResponsiveImage({
  filename,
  alt = "",
  className = "",
}) {
  return (
    <Image
      src={`/images/${filename}`}
      alt={alt}
      className={className}
      width={1600}
      height={900}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1600px"
      priority={false}
    />
  );
}
