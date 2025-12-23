import './App.css'
import { UserProfile } from './components/user-profile'
import { ProductList } from './components/product-list'

function App() {
  return (
    <div className="app-container">
      <h1>Ejemplos de Higher-Order Components (HOCs)</h1>

      <section>
        <h2>1. HOC con Loading (withLoading)</h2>
        <p>Componente que muestra un estado de carga mientras obtiene datos</p>
        <UserProfile userId={1} />
      </section>

      <section>
        <h2>2. HOC con Autenticación (withAuth)</h2>
        <p>Componente protegido que requiere autenticación</p>
        <ProductList />
      </section>
    </div>
  )
}

export default App