import type { FC, ReactNode } from "react";
import { Flexbox } from "../Flexbox/Flexbox";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Flexbox
            direction="column"
            gap={16}
            width={"100%"}
            style={{
                position: "relative",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Flexbox
                align="center"
                gap={16}
                justify="space-between"
                verticalMargin={50}
            >
                {children}
            </Flexbox>
        </Flexbox>
    );
};
