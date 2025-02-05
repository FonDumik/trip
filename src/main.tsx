import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as GravityProvider } from "@gravity-ui/uikit";

import { CssBaseline } from "@mui/material";
import theme from "./theme";
import "@gravity-ui/uikit/styles/styles.css";
import "@fontsource/inter";
import "./mockEnv.ts";
import "@gravity-ui/uikit/styles/styles.css";
import "./index.scss";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GravityProvider theme="dark">
            <ThemeProvider theme={theme} defaultMode="dark">
                <CssBaseline />
                <App />
            </ThemeProvider>
        </GravityProvider>
    </React.StrictMode>
);
