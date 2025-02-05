import { type FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./navigation/routes";
import { store } from "./store/store";
export const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
