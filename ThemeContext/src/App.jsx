import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import {
  Button,
  Container,
  CssBaseline,
  Typography,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";

import AutoFocusInput from "./AutoFocusInput";
import ExpensiveComponent from "./ExpensiveComponent";

function App() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  const muiTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Hooks + MUI Mini Project
        </Typography>

        <Button variant="outlined" onClick={toggleTheme}>
          Toggle Theme
        </Button>

        <AutoFocusInput />
        <ExpensiveComponent />
      </Container>
    </MUIThemeProvider>
  );
}

export default App;
