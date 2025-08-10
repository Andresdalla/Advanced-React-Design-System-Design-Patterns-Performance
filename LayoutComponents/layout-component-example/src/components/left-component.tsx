interface LeftComponentProps {
  width: number;
}

export const LeftComponent = ({width}: LeftComponentProps) => {
  return (
    <>
      <h2>Este es el componente izquierdo con un width de {width}</h2>
    </>
  );
}