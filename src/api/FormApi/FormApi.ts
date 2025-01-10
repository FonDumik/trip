import * as queryString from "query-string";
import { IEventsResponse, IRegionResponse } from "@/domain/form/models";
import { API_URL } from "../apiUrl";

const ENV = import.meta.env;

const getDefaultOptions = (auth): RequestInit => {
    const result: any = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ru",
        },
    };

    if (auth) {
        result.Authorization = auth;
    }

    return result;
};

const getQuery = (queryParams: {
    [queryKey: string]: number | string | null;
}) =>
    queryString.default.stringify(
        { ...queryParams },
        { skipEmptyString: true, encode: true, skipNull: true }
    );

export const FormApi = {
    getRegionsAsync: async (searchTerm: string): Promise<IRegionResponse[]> => {
        try {
            const url = API_URL.aviasales.Region;
            const query = getQuery({
                locale: "ru",
                term: searchTerm,
                "types[]": "city",
            });
            const path = query ? `${url}?` + query : url;
            const options = getDefaultOptions(
                `Bearer ${ENV.VITE_OXILOR_API_TOKEN}`
            );
            const response = await fetch(path, {
                ...options,
            });
            return response.json();
        } catch (error) {
            throw new Error("Error");
        }
    },

    getEventsAsync: async (
        location: string,
        actual_since: number,
        actual_until: number
    ): Promise<IEventsResponse> => {
        try {
            const url = API_URL.Events;
            const query = getQuery({
                location,
                actual_since,
                actual_until,
                fields: "id,title,slug,description,images,site_url",
                categories:
                    "entertainment,festival,theater,tour,yarmarki-razvlecheniya-yarmarki,party,other,holiday",
            });
            const path = query ? `${url}?` + query : url;
            const options = getDefaultOptions("");
            const response = await fetch(path, {
                ...options,
            });
            return response.json();
        } catch (error) {
            throw new Error("Error");
        }
    },

    getWeatherAsync: async (): Promise<IRegionResponse[]> => {
        try {
            const url = API_URL.Weather;
            const query = getQuery({
                lat: 33.44,
                lon: -94.04,
                appid: ENV.VITE_OPEN_WEATHER_API_TOKEN,
            });
            const path = query ? `${url}?` + query : url;
            const options = getDefaultOptions(
                `Bearer ${ENV.VITE_OXILOR_API_TOKEN}`
            );
            const response = await fetch(path, {
                ...options,
            });
            return response.json();
        } catch (error) {
            throw new Error("Error");
        }
    },
};
