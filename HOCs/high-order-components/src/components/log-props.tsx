//start with lowercase, no se llama como usualmente llamamos a un componente  
export const logProps = (Component: React.ComponentType<any>) => {
  // basicamente, logProps recibe las props y se las inserta al componente
  return (props: any) => {
    console.log(props);
    return <Component {...props} />
  }
}