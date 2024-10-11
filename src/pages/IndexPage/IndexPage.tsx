import { Section, List, Placeholder, Button } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
// import tonSvg from "./ton.svg";

export const IndexPage: FC = () => {
    return (
        <List>
            <Placeholder
                action={
                    <Button size="l" stretched>
                        Выбрать
                    </Button>
                }
                description="Description"
                header="Title"
            >
                <img
                    alt="Telegram sticker"
                    className="blt0jZBzpxuR4oDhJc8s"
                    src="https://xelene.me/telegram.gif"
                />
            </Placeholder>
        </List>
    );
};
