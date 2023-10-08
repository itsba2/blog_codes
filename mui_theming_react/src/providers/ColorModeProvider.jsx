// ColorModeProvider.jsx

import { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

// Create context
const ColorModeContext = createContext();

// Create a hook to use ColorModeContext in our components
export const useColorMode = () => {
  return useContext(ColorModeContext);
};

// Create ColorModeProvider to wrap our app inside
// and distribute ColorModeContext
export const ColorModeProvider = ({ children }) => {
  // We'll be storing color-mode value in the local storage
  // So let's fetch that value
  const [colorMode, toggleColorMode] = useState(
    localStorage.getItem("color-mode")
  );

  // Context value object to be provided
  const value = useMemo(
    () => ({
      // toggleColorMode method toggles `color-mode` value
      // in local storage and colorMode state between `dark` and `light`
      toggleColorMode: () => {
        if (localStorage.getItem("color-mode") === "light") {
          localStorage.setItem("color-mode", "dark");
        } else {
          localStorage.setItem("color-mode", "light");
        }
        toggleColorMode((prev) => (prev === "light" ? "dark" : "light"));
      },
      colorMode,
    }),
    // Make sure colorMode is in the dependency array
    // Otherwise, colorMode context value won't be updating
    // although colorMode state value changes.
    // We see this behavior because useMemo hook caches
    // values until the values in the dependency array changes
    [colorMode]
  );

  // Theme object to be provided
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode, // Set mode property
          ...(colorMode === "dark"
            ? // If colorMode is `dark`
              {
                primary: {
                  main: "#f06292",
                },
              }
            : // If colorMode is `light`
              {
                primary: {
                  main: "#1e88e5",
                },
                background: {
                  paper: "#eeeeee",
                },
              }),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: "9999px",
              },
            },
          },
        },
      }),
    // Remember to add colorMode to dependency array
    [colorMode]
  );

  // Return provider
  return (
    // We wrap our own context provider around MUI's ThemeProvider
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
