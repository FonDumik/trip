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
            <Flexbox direction="column" gap={16} verticalMargin={30}>
                <LargeTitle
                    style={{
                        textAlign: "center",
                    }}
                >
                    Значит, вы собрались в путешествие?
                </LargeTitle>
                <Placeholder
                    action={
                        <Button onClick={navigateToFormPage} size="l" stretched>
                            Начать планирование
                        </Button>
                    }
                    header="Что нужно, чтобы распланировать путешествие мечты?"
                    description="Сначала мне нужно узнать несколько моментов"
                >
                    <img
                        src="https://i.ibb.co/GQ976bX/Pngtree-happy-big-white-goose-free-4623089.png"
                        alt="travelagent"
                        className={styles.imagePlaceholder}
                        loading="lazy"
                    />
                </Placeholder>
            </Flexbox>
        </Layout>
    );
};
