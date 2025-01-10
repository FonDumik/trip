// import { useSelector } from "@/store/hooks";
// import { FormState } from "@/store/selectors";

import { useState } from "react";
import { useGetEvents } from "./useGetEvents";

export const useGetData = () => {
    // const { region, startDate, endDate } = useSelector(FormState);
    // const { add } = useToaster();
    const [loading, setLoading] = useState(false);
    const { getEvents } = useGetEvents();

    const getTripInformation = async () => {
        try {
            await getEvents();
        } catch (error) {
            setLoading(false);
            console.error(error);
        } finally {
            // setLoading(false);
        }
    };

    return { getTripInformation, loading };
};
