import React, { useState, useContext } from "react";

const DarkModeContext = React.createContext();

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "useDarkMode must be used within a DarkModeContextProvider"
    );
  }
  return context;
}

export default function DarkModeContextProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function ToggleDarkMode() {
    setDarkMode((prevTheme) => !prevTheme);
  }

  const value = { darkMode, ToggleDarkMode };
  return (
    <DarkModeContext.Provider value={value}>
      {props.children}
    </DarkModeContext.Provider>
  );
}
