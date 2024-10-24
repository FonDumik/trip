import { createRoot } from "react-dom/client";

import "./mockEnv.ts";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import { App } from "./App.tsx";
import "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
