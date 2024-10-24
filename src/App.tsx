import { type FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "@/navigation/routes.tsx";
import { store } from "@/store/store";
import { ThemeProvider } from "@gravity-ui/uikit";

export const App: FC = () => {
    return (
        // <ToasterProvider>
        <Provider store={store}>
            <ThemeProvider theme="dark">
                <BrowserRouter>
                    <Routes>
                        {routes.map((route) => (
                            <Route key={route.path} {...route} />
                        ))}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
        // </ToasterProvider>
    );
};
