import { apiInstance } from "@/api/apiInstance";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { prepareForSelect } from "./helper";
import { MultiselectOption } from "@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types";
import { useDispatch } from "@/store/hooks";
import { selectRegion } from "@/store/FormReducer/FormReducer.slice";
import styles from "./styles.module.scss";
import { Button, Text } from "@telegram-apps/telegram-ui";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Autocomplete, TextField } from "@mui/material";

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
        setRegions([]);
        dispatch(
            selectRegion({
                value: "",
            })
        );
    };

    const selectRegionHandler = (option: string) => {
        setSelectedRegion(option);
        dispatch(
            selectRegion({
                value: option,
            })
        );
        setQuery("");
        setRegions([]);
    };

    return selectedRegion ? (
        <Flexbox
            justify="center"
            gap={16}
            align="center"
            wrap="wrap"
            style={{ padding: "0 20px" }}
        >
            <Text>Вы выбрали направление: {selectedRegion}</Text>
            <Button onClick={resetRegionHandler} size="s" stretched>
                Изменить
            </Button>
        </Flexbox>
    ) : (
        <Autocomplete
            disablePortal
            options={regions}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Город или регион"
                    //   placeholder="Favorites"
                />
            )}
            blurOnSelect
            className={styles.autocomplete}
            loading={loading}
            loadingText="Ищем..."
            noOptionsText="Начните вводить"
            onInputChange={(e) =>
                debouncedSetQuery((e?.currentTarget as HTMLInputElement)?.value)
            }
            onChange={(e) =>
                selectRegionHandler((e?.target as HTMLInputElement)?.innerText)
            }
            datatype="label"
            itemType="value"
        />
    );
};
