import { useDispatch } from "@/store/hooks";
import { DateRangePicker } from "@adobe/react-spectrum";
import { selectDates } from "@/store/FormReducer/FormReducer.slice";
import { getLocalTimeZone } from "@internationalized/date";
import styles from "./styles.module.scss";

export const DatesRange = () => {
    const dispatch = useDispatch();

    const handlePreviewSelect = (ranges) => {
        const result = {
            start: ranges.start.toDate(getLocalTimeZone()),
            end: ranges.end.toDate(getLocalTimeZone()),
        };

        dispatch(selectDates(result));
    };

    return (
        <DateRangePicker
            label="Даты поездки"
            width={"80%"}
            autoFocus
            defaultOpen
            isQuiet
            marginBottom={20}
            UNSAFE_className={styles.dateRangePicker}
            onChange={handlePreviewSelect}
        />
    );
};
