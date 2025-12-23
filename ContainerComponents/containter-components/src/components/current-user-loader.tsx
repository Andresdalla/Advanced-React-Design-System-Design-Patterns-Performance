import React, { useEffect, useState, type PropsWithChildren } from 'react';
import axios from "axios";
import type { User } from "../types/user.types"
export const CurrentUserLoader = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() =>{
    (async() => {
      const response = await axios.get("https://api.escuelajs.co/api/v1/users/1");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
    {/* Aca se hace un prop injection: toma todos los componentes hijos que se le pasa a CurrentUserLoader, los clona y les inyecta la prop user */}
      {React.Children.map(children, (child) => {
        if(React.isValidElement<{ user?: User | null }>(child)){
          return React.cloneElement(child, { user } as any);
        }
      return child;
      })}
      
    </>
  );

}