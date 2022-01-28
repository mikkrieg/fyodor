import React, { useState } from "react";


export const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const [onAbout, setOnAbout] = useState(false);

  return (
    <AppContext.Provider value=
    {{
      onAbout,
      setOnAbout
      }}
    >
      {children}
    </AppContext.Provider>
  );
}