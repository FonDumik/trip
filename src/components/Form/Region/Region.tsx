import { apiInstance } from "@/api/apiInstance";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { prepareForSelect } from "./helper";
import { useDispatch } from "@/store/hooks";
import { selectRegion } from "@/store/FormReducer/FormReducer.slice";
import styles from "./styles.module.scss";
import { Select, Text, TextInput } from "@gravity-ui/uikit";
import { Flexbox } from "@/components/Flexbox/Flexbox";

export const Region = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const debouncedSetQuery = useDebouncedCallback((query) => {
        setLoading(true);
        setQuery(query);
    }, 200);

    const [regions, setRegions] = useState<any[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>(undefined);

    useEffect(() => {
        if (!query) return;
        apiInstance.form.getRegionsAsync(query).then((response) => {
            setRegions(prepareForSelect(response));
            setLoading(false);
        });
    }, [query]);

    const selectRegionHandler = (option: string) => {
        if (!option) return;
        setSelectedRegion(option);
        dispatch(
            selectRegion({
                value: option,
            })
        );
        setQuery("");
        setRegions([]);
    };

    return (
        <Flexbox justify="center" gap={16} align="center" wrap="wrap">
            <Text variant="header-2">Куда вы планируете отправиться?</Text>
            <Text variant="body-1">Начните вводить название города</Text>
            <Select
                className={styles.autocomplete}
                placeholder="Например, Париж"
                filterable={true}
                size="l"
                width="max"
                value={[selectedRegion]}
                loading={loading}
                onFilterChange={(value) => debouncedSetQuery(value)}
                renderFilter={(filter) => (
                    <TextInput
                        onChange={filter.inputProps.onChange}
                        placeholder="Поиск..."
                        size="l"
                        autoFocus
                    />
                )}
                options={regions}
                onUpdate={(value) => selectRegionHandler(value[0])}
            />
        </Flexbox>
    );
};
