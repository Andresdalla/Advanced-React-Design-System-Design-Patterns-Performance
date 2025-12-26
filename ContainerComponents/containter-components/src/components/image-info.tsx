import type { Image } from "../types/image.types"

type ImageProps = { image?: Image | Image[] | null };

export const ImageInfo = ({ image }: ImageProps) => {
  if (!image) {
    return (
      <>
        <h1>Cargando</h1>
      </>
    );
  }

  const img = Array.isArray(image) ? image[0] : image;
  const downloadUrl = img?.download_url;

  if (!downloadUrl) {
    return (
      <>
        <h1>Cargando</h1>
      </>
    );
  }

  return (
    <>
      <h1>Imagen:</h1>
      <img src={downloadUrl} alt={img?.author ?? "Imagen"} />
    </>
  );
}
