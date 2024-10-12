import { Placeholder, FixedLayout, Button } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
// import tonSvg from "./ton.svg";

export const CountryPage: FC = () => {
    return (
        <FixedLayout vertical="top">
            <Placeholder
                action={
                    <Button size="l" stretched>
                        Здесь будет селектор
                    </Button>
                }
                description="Сначала выберем страну"
                header="Что нужно, чтобы запланировать путешествие?"
            >
                <img
                    src="@/../assets/travelagent.png"
                    alt="travelagent"
                    style={{
                        background: "transparent",
                        boxShadow: "none",
                        width: 200,
                    }}
                />
            </Placeholder>
        </FixedLayout>
    );
};
