import { FC } from "react";
import { useSelector } from "@/store/hooks";
import { Region } from "@/components/Form/Region/Region";
import { FormState } from "@/store/selectors";
import { DatesRange } from "@/components/Form/DatesRange/DatesRange";
import { Layout } from "@/components/Layout/Layout";
import { BottomButton } from "@/components/BottomButton/BottomButton";
import { useGetData } from "@/hooks/useGetData";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { OtherInfo } from "@/components/Form/OtherInfo/OtherInfo";
import { useNavigate } from "react-router-dom";

export const FormPage: FC = () => {
    const navigate = useNavigate();
    const { region, startDate, endDate } = useSelector(FormState);
    const isPlanningButtonDisabled = !region.value || !startDate || !endDate;
    const { loading } = useGetData();

    const planningButtonHandler = () => {
        navigate("/trip/result");
    };

    return (
        <Layout>
            <Flexbox gap={16} align="center" style={{ padding: "0 20px" }}>
                <Region />
                {region.value && <OtherInfo />}
                {region.value && <DatesRange />}
            </Flexbox>

            <BottomButton
                onClick={planningButtonHandler}
                title="Расчитать"
                size="xl"
                disabled={isPlanningButtonDisabled}
                loading={loading}
            />
        </Layout>
    );
};
