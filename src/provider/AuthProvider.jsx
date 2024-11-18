import { createContext } from "react";

export const AuthProviders = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Create Context",
  };

  return (
    <AuthProviders.Provider value={authInfo}>{children}</AuthProviders.Provider>
  );
};

export default AuthProvider;
