import type { User } from "../types/users.types"

export const UserInfo = ({ user }: User) => {
  return user ? (
    <>
      <div className="">
        <h1>Usuario</h1>
        <h2>
          Nombre: {user.name}
        </h2>
        <div>
          <p>Imagen:</p>
          <img src={user.avatar} alt={user.name} />
        </div>
        <p>Email: {user.email}</p>
        <p>Rol: {user.role}</p>
      </div >
    </>
  ) : (
    <>
      <h1>Cargando</h1>
    </>
  )
}