import { FC, useEffect } from "react";
import { Loader, Overlay } from "@gravity-ui/uikit";
import { useGetData } from "@/hooks/useGetData";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { BottomButton } from "@/components/BottomButton/BottomButton";
import { useSelector } from "@/store/hooks";
import { FormState } from "@/store/selectors";
import { Events } from "@/pages/ResultPage/components/Events/Events";
import { Typography } from "@mui/joy";
import { ResultContainer } from "./ResultContainer/ResultContainer";
import { AIPlan } from "@/constants/aiplan";

export const ResultPage: FC = () => {
    const { result } = useSelector(FormState);
    const { getTripInformation, loading } = useGetData();

    const loadResults = async () => {
        await getTripInformation();
    };

    useEffect(() => {
        loadResults();
    }, []);

    const makePdfHandler = () => {};

    return (
        <Flexbox
            style={{ overflowX: "hidden" }}
            justify="space-between"
            align="center"
            gap={16}
        >
            <Typography level="h1" textColor="common.white" textAlign={"left"}>
                Результат
            </Typography>

            <Flexbox gap={16} align="center" width={"100%"}>
                {result.events.length && (
                    <ResultContainer title="События">
                        <Events data={result.events} />
                    </ResultContainer>
                )}

                {/* <ResultContainer title="Экскурсии">
                    <Typography
                        level="body-md"
                        textColor="common.white"
                        textAlign={"left"}
                    >
                        Пример данных
                    </Typography>
                </ResultContainer>

                <ResultContainer title="Достопримечательности">
                    <Typography
                        level="body-md"
                        textColor="common.white"
                        textAlign={"left"}
                    >
                        Список популярных мест
                    </Typography>
                </ResultContainer> */}

                <ResultContainer title="План поездки">
                    {AIPlan.Msk.map((day) => (
                        <Flexbox key={day.day}>
                            <Typography
                                level="h3"
                                textColor="common.white"
                                textAlign={"left"}
                            >
                                День: {day.day}
                            </Typography>

                            <ul>
                                {day.plan.map((plan) => (
                                    <Typography
                                        level="body-md"
                                        textColor="common.white"
                                        textAlign={"left"}
                                        component="li"
                                        key={plan}
                                    >
                                        {plan}
                                    </Typography>
                                ))}
                            </ul>
                        </Flexbox>
                    ))}
                </ResultContainer>

                <BottomButton
                    onClick={makePdfHandler}
                    title="Сохранить в PDF"
                    size="xl"
                />
            </Flexbox>

            <Overlay visible={loading}>
                <Loader />
            </Overlay>
        </Flexbox>
    );
};
