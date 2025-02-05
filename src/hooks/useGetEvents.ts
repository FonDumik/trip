import dayjs from "dayjs";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormApi } from "../api/FormApi/FormApi";
import { CitiesWithEvents } from "../constants/cities";
import { updateResult } from "../store/FormReducer/FormReducer.slice";
import { FormState } from "../store/selectors";

export const useGetEvents = () => {
    const dispatch = useDispatch();
    const { region, startDate, endDate } = useSelector(FormState);
    const slug = useMemo(
        () => CitiesWithEvents.find((city) => city.name === region.value)?.slug,
        [region.value]
    );

    const getPreparedDate = (date: string) => dayjs(date).unix();

    const getEvents = async () => {
        if (slug) {
            const response = await FormApi.getEventsAsync(
                slug,
                getPreparedDate(startDate),
                getPreparedDate(endDate)
            );

            dispatch(updateResult({ field: "events", data: response.results }));
        }
    };

    return { getEvents };
};
