import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Flexbox } from "../../components/Flexbox/Flexbox";
import { DatesRange } from "../../components/Form/DatesRange/DatesRange";
import { OtherInfo } from "../../components/Form/OtherInfo/OtherInfo";
import { Region } from "../../components/Form/Region/Region";
import { Layout } from "../../components/Layout/Layout";
import { useGetData } from "../../hooks/useGetData";
import { FormState } from "../../store/selectors";
import { Button } from "@mui/material";

export const FormPage: FC = () => {
    const navigate = useNavigate();
    const { region, startDate, endDate } = useSelector(FormState);
    const isPlanningButtonDisabled = !region.value || !startDate || !endDate;
    const { loading } = useGetData();

    const planningButtonHandler = () => {
        navigate("/result");
    };

    return (
        <Layout>
            <Flexbox gap={16} align="center" style={{ padding: "0 20px" }}>
                <Region />
                {region.value && <DatesRange />}
                {region.value && <OtherInfo />}
            </Flexbox>

            {region.value && (
                <Button
                    onClick={planningButtonHandler}
                    size="large"
                    disabled={isPlanningButtonDisabled}
                    loading={loading}
                    variant="outlined"
                    fullWidth
                >
                    Готово
                </Button>
            )}
        </Layout>
    );
};
