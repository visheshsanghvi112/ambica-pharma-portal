
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      
      // Update CSS variables for improved dark mode
      if (systemTheme === 'dark') {
        updateDarkModeColors(root);
      }
      return;
    }

    root.classList.add(theme);
    
    // Update CSS variables for improved dark mode
    if (theme === 'dark') {
      updateDarkModeColors(root);
    }
  }, [theme]);

  // Function to update dark mode colors for better visibility
  const updateDarkModeColors = (root: HTMLElement) => {
    // Improved background and card colors for dark mode
    root.style.setProperty('--card', '222 18% 18%');  // Slightly lighter card background
    root.style.setProperty('--foreground', '210 40% 98%'); // Brighter text
    root.style.setProperty('--secondary', '215 25% 27%');  // Improved secondary color
    root.style.setProperty('--muted', '217 25% 25%');      // Better muted color
    root.style.setProperty('--accent', '215 30% 30%');     // Enhanced accent
    root.style.setProperty('--border', '215 25% 25%');     // Better borders
  };

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
