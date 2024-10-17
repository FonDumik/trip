import { useDispatch, useSelector } from "@/store/hooks";
import { updateBudget } from "@/store/FormReducer/FormReducer.slice";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import styles from "./styles.module.scss";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { FormState } from "@/store/selectors";

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
            <TextField
                type="number"
                size="medium"
                label="Бюджет поездки"
                value={budget || undefined}
                onChange={(e) => handleChangeBudget(e.target.value as any)}
                className={styles.budget}
            />
        </Flexbox>
    );
};
