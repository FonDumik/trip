import ReactDOM from "react-dom/client";

import { Root } from "@/components/Root";

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import "./mockEnv.ts";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.scss";
import "react-widgets/scss/styles.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
