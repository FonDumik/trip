import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Flexbox } from "../../components/Flexbox/Flexbox";
import { Button, Container, Typography } from "@mui/material";

export const IndexPage: FC = () => {
    return (
        <Flexbox padding="50px 16px">
            <Flexbox justify="center" align="center">
                <Flexbox gap={16} width={"80%"}>
                    <Typography variant="h3" align="center">
                        Приветствую, Олег!
                    </Typography>
                    <Typography variant="body1" align="center">
                        Давайте начнем планировать путешествие вашей мечты!
                    </Typography>
                </Flexbox>

                <img
                    src="https://i.ibb.co/GQ976bX/Pngtree-happy-big-white-goose-free-4623089.png"
                    alt="travelagent"
                    className={styles.imagePlaceholder}
                    loading="lazy"
                />
            </Flexbox>

            <Button
                size="large"
                variant="contained"
                fullWidth
                href="/trip/form"
            >
                Начать
            </Button>
        </Flexbox>
    );
};
