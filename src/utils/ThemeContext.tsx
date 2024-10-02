// src/contexts/ThemeContext.tsx
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
  secondaryColor: "red", // Default secondary color
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
  const [primaryColor, setPrimaryColor] = useState<string>(
    localStorage.getItem("primaryColor") || "blue"
  );
  const [secondaryColor, setSecondaryColor] = useState<string>(
    localStorage.getItem("secondaryColor") || "red"
  );

  // Update CSS variables and save preferences whenever theme or colors change
  useEffect(() => {
    const root = window.document.documentElement;

    // Handle dark mode
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Handle primary color
    root.style.setProperty("--color-primary", `var(--color-${primaryColor})`);

    // Handle secondary color
    root.style.setProperty(
      "--color-secondary",
      `var(--color-${secondaryColor})`
    );

    // Save to localStorage
    localStorage.setItem("theme", theme);
    localStorage.setItem("primaryColor", primaryColor);
    localStorage.setItem("secondaryColor", secondaryColor);
  }, [theme, primaryColor, secondaryColor]);

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

export default ThemeProvider;

// Custom Hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
