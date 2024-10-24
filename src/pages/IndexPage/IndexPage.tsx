import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Layout } from "@/components/Layout/Layout";
import { Text } from "@gravity-ui/uikit";
import { BottomButton } from "@/components/BottomButton/BottomButton";

export const IndexPage: FC = () => {
    const navigate = useNavigate();
    const navigateToFormPage = () => navigate("/form");

    return (
        <Layout>
            <Flexbox gap={16} verticalMargin={30} width={"80%"}>
                <Text variant="header-2">Вы собрались в путешествие?</Text>
                <Text
                    variant="body-2"
                    wordBreak="break-word"
                    whiteSpace="break-spaces"
                >
                    Я помогу вам всё запланировать
                </Text>
            </Flexbox>

            <img
                src="https://i.ibb.co/GQ976bX/Pngtree-happy-big-white-goose-free-4623089.png"
                alt="travelagent"
                className={styles.imagePlaceholder}
                loading="lazy"
            />

            <BottomButton
                onClick={navigateToFormPage}
                title="Начать"
                size="l"
            />
        </Layout>
    );
};
