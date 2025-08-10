interface RightComponentProps {
  width: number;
}

export const RightComponent = ({width}: RightComponentProps) =>{
  return(
    <>
      <h2>Este es el componente derecho con un width de {width}</h2>
    </>
  );
}