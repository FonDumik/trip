import { Link } from "@/components/Link/Link";
import { Placeholder, Image, FixedLayout } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
// import tonSvg from "./ton.svg";

export const IndexPage: FC = () => {
    return (
        <FixedLayout vertical="top">
            <Placeholder
                action={<Link to={"/country"}>Выбрать</Link>}
                description="Сначала выберем страну"
                header="Что нужно, чтобы запланировать путешествие?"
            >
                <Image
                    src="assets/travelagent.png"
                    alt="panda"
                    size={300 as 40}
                    style={{ background: "transparent", boxShadow: "none" }}
                ></Image>
            </Placeholder>
        </FixedLayout>
    );
};
