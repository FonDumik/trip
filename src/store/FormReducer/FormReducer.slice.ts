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
}

const initialState: IFormState = {
    region: {
        value: "",
    },
    startDate: null,
    endDate: null,
    typeOfTravel: null,
    wishes: "",
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
    },
});

export const { selectRegion, selectDates } = FormReducerSlice.actions;

export default FormReducerSlice.reducer;
