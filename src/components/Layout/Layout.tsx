import { FixedLayout } from "@telegram-apps/telegram-ui";
import type { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <FixedLayout vertical="top" className={styles.layout} scrolling="true">
            {children}
        </FixedLayout>
    );
};
