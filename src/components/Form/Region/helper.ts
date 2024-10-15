import { IRegionResponse } from "@/domain/form/models";
import { MultiselectOption } from "@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types";

export const prepareForSelect = (
    data: IRegionResponse[]
): MultiselectOption[] => {
    return data.map((item) => {
        return {
            label: `${item.name} - ${item.country_name}`,
            value: item.name,
        };
    });
};
//
