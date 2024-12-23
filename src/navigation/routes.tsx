import type { ComponentType, JSX } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { FormPage } from "@/pages/FormPage/FormPage";
import { ResultPage } from "@/pages/ResultPage/ResultPage";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: "/trip/", Component: IndexPage },
    { path: "/trip/form", Component: FormPage },
    { path: "/trip/result", Component: ResultPage },
];
