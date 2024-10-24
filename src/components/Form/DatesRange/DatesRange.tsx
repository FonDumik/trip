import { useDispatch, useSelector } from "@/store/hooks";
import { RangeCalendar, RangeValue } from "@gravity-ui/date-components";
import { dateTimeParse } from "@gravity-ui/date-utils";
import { Text } from "@gravity-ui/uikit";
import { selectDates } from "@/store/FormReducer/FormReducer.slice";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import dayjs from "dayjs";
import { FormState } from "@/store/selectors";

export const DatesRange = () => {
    const dispatch = useDispatch();
    const { startDate, endDate } = useSelector(FormState);

    const handlePreviewSelect = (ranges: RangeValue<any>) => {
        const result = {
            start: dayjs(ranges.start).format("YYYY-MM-DD"),
            end: dayjs(ranges.end).format("YYYY-MM-DD"),
        };

        dispatch(selectDates(result));
    };

    return (
        <Flexbox
            justify="center"
            gap={16}
            align="center"
            wrap="wrap"
            style={{ padding: "20px 0" }}
        >
            <Text variant="header-2">Даты поездки</Text>
            <Text variant="body-1">Выберите даты</Text>

            <RangeCalendar
                minValue={dateTimeParse(new Date().toUTCString())}
                onUpdate={handlePreviewSelect}
                value={{
                    start: dateTimeParse(startDate),
                    end: dateTimeParse(endDate),
                }}
                size="l"
            />
        </Flexbox>
    );
};
