import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  TextField,
} from "@mui/material";

import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "500px" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField label="Email" />
            <TextField type="password" label="Password" />
          </CardContent>
          <CardActions
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Button sx={{ mx: "auto" }} variant="contained">
              Login
            </Button>
            <ThemeToggler />
          </CardActions>
        </Card>
      </Box>
    </React.Fragment>
  );
}

export default App;
