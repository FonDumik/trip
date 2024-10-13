import { Placeholder, Button, LargeTitle } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Layout } from "@/components/Layout/Layout";

export const IndexPage: FC = () => {
    const navigate = useNavigate();
    const navigateToFormPage = () => navigate("/form");

    return (
        <Layout>
            <Flexbox direction="column" gap={16} verticalMargin={20}>
                <LargeTitle weight="1">
                    Итак, вы собрались в путешествие!
                </LargeTitle>
                <Placeholder
                    action={
                        <Button onClick={navigateToFormPage} size="l" stretched>
                            Начать
                        </Button>
                    }
                    description="Сначала узнаем несколько моментов"
                    header="Что нужно, чтобы всё продумать?"
                >
                    <img
                        src="https://utyatheduck.com/assets/img/utya1.gif"
                        alt="travelagent"
                        className={styles.imagePlaceholder}
                        loading="lazy"
                    />
                </Placeholder>
            </Flexbox>
        </Layout>
    );
};
