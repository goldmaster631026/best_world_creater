import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const themes = {
    light: {
      bg: "linear-gradient(90deg, rgba(202,198,198,0) 0%, rgba(223,225,224,1) 0%, rgba(70,255,125,0.14066876750700286) 33%, rgba(0,254,255,0.3339460784313726) 79%)",
      dText: "black",
      hover: "#FFF3E0",
    },
    dark: {
      bg: "black",
      dText: "#B2DFDB",
      hover: "#263238",
    },
    blue: {
      bg: "#08105B",
      dText: "#E0F2F1",
      hover: "#1A237E",
    },
    green: {
      bg: "#E8F5E9",
      dText: "black",
      hover: "#C8E6C9",
    },
    blackgreen: {
      bg: "#212121",
      dText: "#A56F26",
      hover: "#333333",
    },
  };

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || themes.dark
  );

  function handleTheme(themeName) {
    setTheme(themes[themeName]);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
