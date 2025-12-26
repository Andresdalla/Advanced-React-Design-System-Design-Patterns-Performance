import React, { useEffect, useState } from 'react';

interface UserLoaderProps {
  resourceName: string;
  children: React.ReactNode;
  getData: () => Promise<any>;
}

export const DataSource = ({ getData = async () => {}, resourceName, children }: UserLoaderProps) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

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