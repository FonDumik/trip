// import { useSelector } from "@/store/hooks";
// import { FormState } from "@/store/selectors";

import { useState } from "react";

export const useGetData = () => {
    // const { region, startDate, endDate } = useSelector(FormState);
    const [loading, setLoading] = useState(false);
    // const { add } = useToaster();

    const getTripInformation = async () => {
        setLoading(true);
        // try {

        //     // const response = await fetch(

        //     // throw new Error("Информации нет");
        // } catch (error) {
        //     setLoading(false);
        //     console.error(error);
        // } finally {
        //     // setLoading(false);
        // }
    };

    return { getTripInformation, loading };
};
