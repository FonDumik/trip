import { IRegionResponse } from "@/domain/form/models";

export const prepareForSelect = (data: IRegionResponse[]): any[] => {
    return data.map((item) => {
        return {
            content: `${item.name} - ${item.country_name}`,
            value: item.name,
        };
    });
};
//
