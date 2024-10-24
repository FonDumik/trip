import { createSlice } from "@reduxjs/toolkit";

interface IFormState {
    // place
    region: {
        value: string;
    };

    // dates
    startDate: string | null;
    endDate: string | null;

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
        selectTypeOfTravel: (state, { payload }) => {
            state.typeOfTravel = payload;
        },
    },
});

export const { selectRegion, selectDates, selectTypeOfTravel } =
    FormReducerSlice.actions;

export default FormReducerSlice.reducer;
