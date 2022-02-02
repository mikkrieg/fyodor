import React, { useState } from "react";


export const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const [onAbout, setOnAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [bookIndex, setBookIndex] = useState(null);

  return (
    <AppContext.Provider value=
    {{
      onAbout,
      setOnAbout,
      showContact,
      setShowContact,
      showBookModal,
      setShowBookModal,
      bookIndex,
      setBookIndex
      }}
    >
      {children}
    </AppContext.Provider>
  );
}