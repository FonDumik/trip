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

    // result
    result: {
        events: {
            id: number;
            title: string;
            slug: string;
            description: string; //html
            images: {
                image: string;
            }[];
            site_url: string;
        }[];
        tickets: any[];
        weather: any[];
        overview: string;
    };
}

const initialState: IFormState = {
    region: {
        value: "",
    },
    startDate: null,
    endDate: null,
    typeOfTravel: null,
    wishes: "",
    result: {
        events: [],
        tickets: [],
        weather: [],
        overview: "",
    },
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
        selectWishes: (state, { payload }) => {
            state.wishes = payload;
        },

        updateResult: (state, { payload }) => {
            state.result[payload.field] = payload.data;
        },
    },
});

export const {
    selectRegion,
    selectDates,
    selectTypeOfTravel,
    selectWishes,
    updateResult,
} = FormReducerSlice.actions;

export default FormReducerSlice.reducer;
