import { apiInstance } from "@/api/apiInstance";
import { Multiselect } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { prepareForSelect } from "./helper";
import { MultiselectOption } from "@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types";
import { useDispatch } from "@/store/hooks";
import { selectRegion } from "@/store/FormReducer/FormReducer.slice";

export const Region = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState<string>("");
    const debouncedSetQuery = useDebouncedCallback((query) => {
        setQuery(query);
    }, 200);

    const [regions, setRegions] = useState<MultiselectOption[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<MultiselectOption[]>();

    useEffect(() => {
        if (!query) return;
        apiInstance.form.getRegionsAsync(query).then((response) => {
            setRegions(prepareForSelect(response));
        });
    }, [query]);

    const selectCountryHandler = (option: MultiselectOption[]) => {
        if (!option.length) {
            setSelectedRegion([]);
            setQuery("");
            setRegions([]);
            dispatch(
                selectRegion({
                    value: "",
                })
            );
            return;
        }
        setSelectedRegion(option);
        dispatch(
            selectRegion({
                value: option[0].value,
            })
        );
        setQuery("");
        setRegions([]);
    };

    return (
        <Multiselect
            header="Название города или региона"
            options={regions}
            value={selectedRegion}
            onChange={selectCountryHandler}
            onInput={(e) =>
                debouncedSetQuery((e.target as HTMLInputElement).value)
            }
            emptyText="Начните вводить"
        />
    );
};
