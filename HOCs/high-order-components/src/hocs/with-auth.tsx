import type { ComponentType } from 'react';

// Props que el HOC añade al componente
interface WithAuthProps {
  isAuthenticated: boolean;
  user: { name: string; role: string } | null;
}


export function withAuth<T extends WithAuthProps>(
  Component: ComponentType<T>
) {
  return function WithAuthComponent(props: Omit<T, keyof WithAuthProps>) {
    //en una app real, esto vendria de un contexto o global state
    const isAuthenticated = true;
    const user = isAuthenticated
      ? { name: "Usuario Demo", role: "admin" }
      : null;

    if (!isAuthenticated) {
      return (
        <div className="auth-error">
          <p>no auth pa</p>
        </div>
      );
    }

    return (
      <Component
        {...(props as T)}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    );
  };
}