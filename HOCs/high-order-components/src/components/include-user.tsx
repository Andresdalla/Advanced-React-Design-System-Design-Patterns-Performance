import { useState,useEffect } from "react";
import axios from "axios";
import type { User } from "../types/users.types";

export const includeUser = (Component: React.ComponentType<any>, userId: string) => {
  return (props : any) => {
    const [user,setUser] = useState<User>();
    
    useEffect(()=>{
    (async () =>{
      const response = await axios.get<User>(`https://api.escuelajs.co/api/v1/users/${userId}`);
      console.log("response", response)
      setUser(response.data);
    })();
    }, [])
    
    return <Component {...props} user={user}/>
  }
}
