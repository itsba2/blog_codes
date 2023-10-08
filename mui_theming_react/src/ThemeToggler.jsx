import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useColorMode } from "./providers/ColorModeProvider";

export const ThemeToggler = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
