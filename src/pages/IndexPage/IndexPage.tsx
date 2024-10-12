import { Placeholder, FixedLayout, Button } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
// import tonSvg from "./ton.svg";

export const IndexPage: FC = () => {
    const navigate = useNavigate();
    const navigateToCountryPage = () => navigate("/country");

    return (
        <FixedLayout vertical="top">
            <Placeholder
                action={
                    <Button onClick={navigateToCountryPage} size="l" stretched>
                        Выбрать
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
