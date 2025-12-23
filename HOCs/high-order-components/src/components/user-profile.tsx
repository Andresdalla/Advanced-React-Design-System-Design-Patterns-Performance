import { useEffect, useState } from 'react';
import { withLoading } from '../hocs/with-loading';
import type { User } from '../types/user.types';

interface UserProfileProps {
  userId: number;
  isLoading: boolean; // añadido por el HOC
}


function UserProfileBase({ userId, isLoading }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!isLoading) {

      setUser({
        id: userId,
        name: "Juan Pérez",
        email: "juan@example.com",
        role: "Desarrollador"
      });
    }
  }, [isLoading, userId]);

  if (!user) return null;

  return (
    <div className="user-profile card">
      <h3>Perfil del Usuario</h3>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.role}</p>
    </div>
  );
}

export const UserProfile = withLoading(
  UserProfileBase,
  "Cargando perfil de usuario"
);