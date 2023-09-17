import { createContext, useState } from "react";

export const ThemeContext = createContext({ isDark: false });

export function ThemeProvider({ children }) {
  const [isDark, setIdDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDark, setIdDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
