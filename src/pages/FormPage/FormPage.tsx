import { FC } from "react";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Button, Placeholder } from "@telegram-apps/telegram-ui";
// import styles from "./styles.module.scss";
import { useSelector } from "@/store/hooks";
import { Region } from "@/components/Form/Region/Region";
import { FormState } from "@/store/selectors";
import { DatesRange } from "@/components/Form/DatesRange/DatesRange";
import { OtherInfo } from "@/components/Form/OtherInfo/OtherInfo";

export const FormPage: FC = () => {
    const { region, startDate, endDate } = useSelector(FormState);
    const isPlanningButtonDisabled = !region.value || !startDate || !endDate;

    const planningButtonHandler = () => {
        console.log("Планируем...");
    };

    return (
        <Flexbox
            direction="column"
            gap={16}
            justify="center"
            align="center"
            style={{
                backgroundColor: "var(--tg-theme-secondary-bg-color)",
                padding: "0 10px",
            }}
        >
            <Placeholder
                header="Расскажите о вашей поездке"
                description="Нужно только указать направление и выбрать даты"
            ></Placeholder>

            <Region />
            {region.value && <DatesRange />}
            {region.value && !!startDate && !!endDate && <OtherInfo />}

            <Button
                disabled={isPlanningButtonDisabled}
                stretched
                onClick={planningButtonHandler}
            >
                Расчитать
            </Button>
        </Flexbox>
    );
};
