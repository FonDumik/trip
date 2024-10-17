import { useDispatch, useSelector } from "@/store/hooks";
import { updateBudget } from "@/store/FormReducer/FormReducer.slice";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import styles from "./styles.module.scss";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { FormState } from "@/store/selectors";
import { Slider, Text } from "@telegram-apps/telegram-ui";

export const Budget = () => {
    const dispatch = useDispatch();
    const { budget: budgetState } = useSelector(FormState);
    const [budget, setBudget] = useState(budgetState);

    const debouncedSetBudget = useDebouncedCallback((value) => {
        dispatch(updateBudget(value));
    }, 200);

    const handleChangeBudget = (value) => {
        setBudget(value);
        debouncedSetBudget(value);
    };

    return (
        <Flexbox width={"80%"}>
            <Text>Бюджет поездки: {budget} тыс. рублей</Text>
            <Slider
                value={budget || undefined}
                onChange={(value) => {
                    handleChangeBudget(value);
                }}
                className={styles.budget}
                max={999}
                min={10}
            />
        </Flexbox>
    );
};
