import React, { useEffect, useState } from 'react';

interface UserLoaderProps {
  render: (resource: any) => React.ReactNode;
  getData: () => Promise<any>;
}

export const DataSourceRender = ({ getData = async () => {}, render }: UserLoaderProps) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return render(resource);

}