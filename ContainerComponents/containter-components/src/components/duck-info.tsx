import type { Duck } from "../types/duck.types"

export const DuckInfo = ({ duck }: Duck) => {
  return duck ? (
    <>
      <h1>Patos</h1>
      <h2>
        Imagen: 
      </h2>
      <img src={duck.url} alt={duck.url} />
    </>
  ) : (
    <>
      <h1>Cargando</h1>
    </>
  )
}
