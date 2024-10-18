import { FC } from "react";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Placeholder } from "@telegram-apps/telegram-ui";
import styles from "./styles.module.scss";
import { useSelector } from "@/store/hooks";
import { Region } from "@/components/Form/Region/Region";
import { FormState } from "@/store/selectors";
import { DatesRange } from "@/components/Form/DatesRange/DatesRange";
import { Budget } from "@/components/Form/Budget/Budget";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

export const FormPage: FC = () => {
    const { region, startDate, endDate, budget } = useSelector(FormState);

    return (
        <Flexbox
            direction="column"
            gap={16}
            justify="center"
            align="center"
            style={{
                backgroundColor: "var(--tg-theme-secondary-bg-color)",
            }}
        >
            <Placeholder
                description="Расскажите о вашей поездке"
                header="Нужно кое-что уточнить"
            >
                <img
                    src="https://media.tenor.com/CRd3NHA4idMAAAAi/ultimate-uyta-ultimate-duck.gif"
                    alt="travelagent"
                    className={styles.imagePlaceholder}
                />
            </Placeholder>

            <Region />
            {region.value && <DatesRange />}
            {region.value && startDate && endDate && <Budget />}

            <MainButton
                disabled={region.value && startDate && endDate && budget > 0}
                text="Расчитать"
                onClick={() => console.log("Hello, I am button!")}
            />
        </Flexbox>
    );
};
