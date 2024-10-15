import { apiInstance } from "@/api/apiInstance";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { prepareForSelect } from "./helper";
import { MultiselectOption } from "@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types";
import { useDispatch } from "@/store/hooks";
import { selectRegion } from "@/store/FormReducer/FormReducer.slice";
import Combobox from "react-widgets/Combobox";
import styles from "./styles.module.scss";
import { Button, Text } from "@telegram-apps/telegram-ui";
import { Flexbox } from "@/components/Flexbox/Flexbox";

export const Region = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const debouncedSetQuery = useDebouncedCallback((query) => {
        setLoading(true);
        setQuery(query);
    }, 200);

    const [regions, setRegions] = useState<MultiselectOption[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>(undefined);

    useEffect(() => {
        if (!query) return;
        apiInstance.form.getRegionsAsync(query).then((response) => {
            setRegions(prepareForSelect(response));
            setLoading(false);
        });
    }, [query]);

    const resetRegionHandler = () => {
        setSelectedRegion(undefined);
        setQuery("");
        dispatch(
            selectRegion({
                value: "",
            })
        );
    };

    const selectRegionHandler = (option: { value: string }) => {
        setSelectedRegion(option.value);
        dispatch(
            selectRegion({
                value: option.value,
            })
        );
        setQuery("");
        setRegions([]);
    };

    return selectedRegion ? (
        <Flexbox justify="center" gap={16} align="center" wrap="wrap">
            <Text>Вы выбрали направление: {selectedRegion}</Text>
            <Button onClick={resetRegionHandler} size="s" stretched height={20}>
                Выбрать другое
            </Button>
        </Flexbox>
    ) : (
        <Combobox
            data={regions}
            value={selectedRegion}
            dataKey="label"
            textField="value"
            onSelect={(value) => selectRegionHandler(value)}
            onChange={debouncedSetQuery}
            placeholder="Город или регион"
            busy={loading}
            focusFirstItem
            className={styles.combobox}
            renderListItem={(item) => (
                <Text size={12}>{item.value as string}</Text>
            )}
        />
    );
};
