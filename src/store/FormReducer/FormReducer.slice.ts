import { createSlice } from "@reduxjs/toolkit";

interface IFormState {
    // place
    region: {
        value: string;
    };

    // dates
    startDate: DateConstructor | null;
    endDate: DateConstructor | null;

    // other
    typeOfTravel: "withChildren" | "romantic" | "alone" | null;
    wishes: string;

    // budget
    budget: number;
}

const initialState: IFormState = {
    region: {
        value: "",
    },
    startDate: null,
    endDate: null,
    typeOfTravel: null,
    wishes: "",
    budget: 0,
};

export const FormReducerSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        selectRegion: (state, { payload }) => {
            state.region = payload;
        },
        selectDates: (state, { payload }) => {
            state.startDate = payload.start;
            state.endDate = payload.end;
        },
        updateBudget: (state, { payload }) => {
            state.budget = payload;
        },
    },
});

export const { selectRegion, selectDates, updateBudget } =
    FormReducerSlice.actions;

export default FormReducerSlice.reducer;
