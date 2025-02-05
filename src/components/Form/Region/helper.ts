import { IRegionResponse } from "../../../domain/form/models";

export const prepareForSelect = (data: IRegionResponse[]): any[] => {
    return data.map((item) => {
        return {
            label: `${item.name} - ${item.country_name}`,
            value: item.name,
        };
    });
};
