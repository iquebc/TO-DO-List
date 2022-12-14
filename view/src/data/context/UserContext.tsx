import { createContext, useState } from "react";
import UserModel from "../../model/user";

interface UserContextProps {
  usuario?: UserModel;
  setUser: (user: UserModel) => void;
}

const UserContext = createContext<UserContextProps>({});

export function UserProvider(props) {
  const [user, setUser] = useState<UserModel>(null);

  return (
    <UserContext.Provider value={{ usuario: user, setUser: (e) => setUser(e) }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
