import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
}

const defaultContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
  primaryColor: "blue",
  setPrimaryColor: () => {},
  secondaryColor: "red",
  setSecondaryColor: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const [primaryColor, setPrimaryColor] = useState<string>("blue");
  const [secondaryColor, setSecondaryColor] = useState<string>("red");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-primary",
      `var(--color-${primaryColor})`
    );
  }, [primaryColor]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-secondary",
      `var(--color-${secondaryColor})`
    );
  }, [secondaryColor]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
