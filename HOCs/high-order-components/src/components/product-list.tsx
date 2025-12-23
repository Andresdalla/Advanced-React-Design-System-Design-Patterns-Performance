import { useEffect, useState } from 'react';
import { withAuth } from '../hocs/with-auth';
import { withLoading } from '../hocs/with-loading';
import type { Product } from '../types/product.types';


interface ProductListProps {
  isLoading: boolean; // agregado por withLoading
  isAuthenticated: boolean; // agregado por withAuth
  user: { name: string; role: string } | null; // agregado por withAuth
}


function ProductListBase({ isLoading, user }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoading) {

      setProducts([
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Mouse", price: 25 },
        { id: 3, name: "Teclado", price: 75 }
      ]);
    }
  }, [isLoading]);

  return (
    <div className="product-list card">
      <h3>Lista de Productos</h3>
      <p><em>Bienvenido, {user?.name}</em></p>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}


export const ProductList = withAuth(
  withLoading(ProductListBase, "Cargando productos...")
);