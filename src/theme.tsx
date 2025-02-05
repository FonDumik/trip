import { createTheme } from "@mui/material/styles";
import { green, orange, red } from "@mui/material/colors";
import { colors } from "@mui/material";

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
