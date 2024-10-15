import * as queryString from "query-string";
import { IRegionResponse } from "@/domain/form/models";
import { API_URL } from "../apiUrl";

const ENV = import.meta.env;

const defaultOptions: RequestInit = {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Accept-Language": "ru",
        Authorization: "Bearer " + ENV.VITE_OXILOR_API_TOKEN,
    },
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

            const response = await fetch(path, {
                ...defaultOptions,
            });
            return response.json();
        } catch (error) {
            throw new Error("Error");
        }
    },
};
