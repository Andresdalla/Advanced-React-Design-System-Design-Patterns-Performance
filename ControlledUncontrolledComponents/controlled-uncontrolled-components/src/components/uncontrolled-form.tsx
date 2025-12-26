import React from "react";
export const UncontrolledForm = () => {

  const nameInputRef = React.createRef<HTMLInputElement>();
  const ageInputRef = React.createRef<HTMLInputElement>();

  const submitHandler = (e: any) => {
    console.log("Name:", nameInputRef.current?.value);
    console.log("Age:", ageInputRef.current?.value);
    e.preventDefault();
  }
  return (
    <>
    <h1>Uncontrolled Form:</h1>
      <form onSubmit={submitHandler}>
        <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
        <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
        <button name="submit" value="Submit"/>
      </form>
    </>
  );
}