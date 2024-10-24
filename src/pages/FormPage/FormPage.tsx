import { FC } from "react";
// import styles from "./styles.module.scss";
import { useSelector } from "@/store/hooks";
import { Region } from "@/components/Form/Region/Region";
import { FormState } from "@/store/selectors";
import { DatesRange } from "@/components/Form/DatesRange/DatesRange";
import { Layout } from "@/components/Layout/Layout";
import { Loader, Overlay } from "@gravity-ui/uikit";
import { BottomButton } from "@/components/BottomButton/BottomButton";
import { useGetData } from "@/hooks/useGetData";
import { Flexbox } from "@/components/Flexbox/Flexbox";

export const FormPage: FC = () => {
    // const navigate = useNavigate();
    // const navigateToResultPage = () => navigate("/result");
    const { region, startDate, endDate } = useSelector(FormState);
    const isPlanningButtonDisabled = !region.value || !startDate || !endDate;
    const { getTripInformation, loading } = useGetData();

    const planningButtonHandler = async () => {
        await getTripInformation();
    };

    return (
        <Layout>
            <Flexbox gap={16} align="center">
                <Region />
                {region.value && <DatesRange />}
                <BottomButton
                    onClick={planningButtonHandler}
                    title="Расчитать"
                    size="xl"
                    disabled={isPlanningButtonDisabled}
                    loading={loading}
                />
            </Flexbox>

            <Overlay visible={loading}>
                <Loader />
            </Overlay>
        </Layout>
    );
};
