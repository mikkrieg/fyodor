import React, { useState } from "react";


export const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const [onAbout, setOnAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <AppContext.Provider value=
    {{
      onAbout,
      setOnAbout,
      showContact,
      setShowContact
      }}
    >
      {children}
    </AppContext.Provider>
  );
}