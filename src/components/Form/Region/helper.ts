import { IRegionResponse } from "@/domain/form/models";
import { MultiselectOption } from "@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types";

export const prepareForSelect = (
    data: IRegionResponse[]
): MultiselectOption[] => {
    return data.map((region) => {
        const result = {
            value: region.name,
            label: region.name,
        };

        region.parentRegions.map((parent) => {
            if (parent.name === result.label || parent.name === "Европа")
                return;
            result.label = `${result.label} - ${parent.name}`;
        });

        return result;
    });
};
