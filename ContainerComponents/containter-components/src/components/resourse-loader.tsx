import React, { useEffect, useState } from 'react';
import axios from "axios";

interface UserLoaderProps {
  resourceUrl:string;
  resourceName:string;
  children: React.ReactNode;

}

export const ResourseLoader = ({ resourceUrl, resourceName , children }: UserLoaderProps) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${resourceUrl}`);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {/* Aca se hace un prop injection: toma todos los componentes hijos que se le pasa a CurrentUserLoader, los clona y les inyecta la prop resourse */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ resource?: any | null }>(child)) {
          return React.cloneElement(child, { [resourceName]: resource } as any);
        }
        return child;
      })}

    </>
  );

}