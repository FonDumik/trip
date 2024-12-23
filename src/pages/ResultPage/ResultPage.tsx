import { FC, useEffect } from "react";
import { Layout } from "@/components/Layout/Layout";
import { Loader, Overlay } from "@gravity-ui/uikit";
import { useGetData } from "@/hooks/useGetData";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { BottomButton } from "@/components/BottomButton/BottomButton";
import { Typography } from "@/components/Typography";

export const ResultPage: FC = () => {
    const { getTripInformation, loading } = useGetData();

    const loadResults = async () => {
        await getTripInformation();
    };

    useEffect(() => {
        loadResults();
    }, []);

    const makePdfHandler = () => {};

    return (
        <Layout>
            <Flexbox gap={16} align="center" style={{ padding: "0 20px" }}>
                <Typography kind="title3">Результат</Typography>

                <Flexbox gap={16} align="center" style={{ padding: "0 20px" }}>
                    <Typography kind="body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet fuga sunt veniam sapiente rem ex illum ipsa! Quo
                        labore magnam numquam quos minima quidem ipsam.
                        Voluptate saepe id a soluta?
                    </Typography>
                </Flexbox>
            </Flexbox>

            <BottomButton
                onClick={makePdfHandler}
                title="Сохранить в PDF"
                size="xl"
            />

            <Overlay visible={loading}>
                <Loader />
            </Overlay>
        </Layout>
    );
};
