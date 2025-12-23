import type { Poem } from "../types/poem.types"

export const PoemInfo = ({ poem }: Poem) => {
  return poem ? (
    <>
      <h1>Poemas</h1>
      <h2>
        Título: {poem.title}
      </h2>
      <p>autor: {poem.author}</p>
      <p>autor: {poem.lines}</p>
    </>
  ) : (
    <>
      <h1>Cargando</h1>
    </>
  )
}