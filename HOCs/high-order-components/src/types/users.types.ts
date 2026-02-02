export interface User {
  user?: UserProps;
}

export interface UserProps {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
