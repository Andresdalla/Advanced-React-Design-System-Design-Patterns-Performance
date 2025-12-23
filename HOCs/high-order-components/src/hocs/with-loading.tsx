import { useEffect, useState } from 'react';
import type {ComponentType} from 'react';

// Props que el HOC añade al componente
interface WithLoadingProps {
  isLoading: boolean;
}


export function withLoading<T extends WithLoadingProps>(
  Component: ComponentType<T>,
  loadingMessage: string = "Cargando..."
) {
  return function WithLoadingComponent(props: Omit<T, keyof WithLoadingProps>) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div className="loading">{loadingMessage}</div>;
    }

    return <Component {...(props as T)} isLoading={isLoading} />;
  };
}