import { useIntegration } from "@telegram-apps/react-router-integration";
import {
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
    initNavigator,
    useLaunchParams,
    useMiniApp,
    useThemeParams,
    useViewport,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { type FC, useEffect, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
    defaultTheme,
    Provider as SpectrumProvider,
} from "@adobe/react-spectrum";

import { routes } from "@/navigation/routes.tsx";
import { store } from "@/store/store";

export const App: FC = () => {
    const lp = useLaunchParams();
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    useEffect(() => {
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);

    // Create a new application navigator and attach it to the browser history, so it could modify
    // it and listen to its changes.
    const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
    const [location, reactNavigator] = useIntegration(navigator);

    // Don't forget to attach the navigator to allow it to control the BackButton state as well
    // as browser history.
    useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    return (
        <Provider store={store}>
            <SpectrumProvider theme={defaultTheme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <AppRoot
                        appearance={miniApp.isDark ? "dark" : "light"}
                        platform={
                            ["macos", "ios"].includes(lp.platform)
                                ? "ios"
                                : "base"
                        }
                    >
                        <Router location={location} navigator={reactNavigator}>
                            <Routes>
                                {routes.map((route) => (
                                    <Route key={route.path} {...route} />
                                ))}
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </Router>
                    </AppRoot>
                </LocalizationProvider>
            </SpectrumProvider>
        </Provider>
    );
};
