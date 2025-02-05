import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: "dark",
        primary: {
            main: green[300],
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
