import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext({ isDark: false });

export function ThemeProvider({ children }) {
  const [isDark, setIdDark] = useState(true);
  const value = useMemo(() => ({ isDark, setIdDark }), [isDark]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
