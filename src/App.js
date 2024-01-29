import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "./context/theme.js";
const App = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
