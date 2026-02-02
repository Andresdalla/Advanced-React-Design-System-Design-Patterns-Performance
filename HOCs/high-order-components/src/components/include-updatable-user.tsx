import type React from "react"
import { useEffect, useState } from "react"
import axios from 'axios';
import type { User } from "../types/users.types";

export const includeUpdatableUserData = (Component: React.ComponentType<any>, userId: string) => {
  return (props: any) => {
    const [initialUser, setInitialUser] = useState<User>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
      // Lo async que viene luego es la forma correcta de usar async en un useEffect: con un  IIFE (Immediately Invoked Function Expression)
      (async () => {
        const response = await axios.get<User>(`https://api.escuelajs.co/api/v1/users/${userId}`)
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, [])

    const onChangeUser = (updates: any) => {
      setUser({ ...user, ...updates });
    }

    const onPostUser = async () => {
      const response = await axios.put(`https://api.escuelajs.co/api/v1/users/${userId}`, { user })
      setInitialUser(response.data);
      setUser(response.data);
    }

    const onResetUser = () => {
      setUser(initialUser);
    }

    return <Component {...props}
      user={user}
      onChangeUser={onChangeUser}
      onPostUser={onPostUser}
      onResetUser={onResetUser} />


  }
}