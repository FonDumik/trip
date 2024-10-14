import { createSlice } from "@reduxjs/toolkit";

interface IFormState {
    // place
    region: {
        value: string;
    };

    // dates
    beginAt: string;
    endAt: string;

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
    beginAt: "",
    endAt: "",
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
    },
});

export const { selectRegion } = FormReducerSlice.actions;

export default FormReducerSlice.reducer;
