import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { prepareForSelect } from "./helper";
import styles from "./styles.module.scss";
import { Text } from "@gravity-ui/uikit";
import { useDispatch } from "react-redux";
import { apiInstance } from "../../../api/apiInstance";
import { selectRegion } from "../../../store/FormReducer/FormReducer.slice";
import { Flexbox } from "../../Flexbox/Flexbox";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";

export const Region = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const debouncedSetQuery = useDebouncedCallback((query) => {
        setLoading(true);
        setQuery(query);
    }, 200);

    const [regions, setRegions] = useState<any[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
        undefined
    );

    useEffect(() => {
        if (!query) return;
        apiInstance.form.getRegionsAsync(query).then((response) => {
            setRegions(prepareForSelect(response));
            setLoading(false);
        });
    }, [query]);

    const selectRegionHandler = (option: { value: string }) => {
        if (!option) return;
        setSelectedRegion(option.value);
        dispatch(
            selectRegion({
                value: option.value,
            })
        );
        setQuery("");
        setRegions([]);
    };

    return (
        <Flexbox justify="center" gap={16} align="center" wrap="wrap">
            <Text variant="header-2">Куда вы планируете отправиться?</Text>
            <Text variant="body-1">Начните вводить название города</Text>
            <Autocomplete
                className={styles.autocomplete}
                options={regions || []} // Список доступных регионов
                value={selectedRegion || null} // Текущее выбранное значение
                loading={loading} // Показывает индикатор загрузки
                onChange={(_, value) => selectRegionHandler(value)} // Обработка выбора значения
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Город" // Заголовок поля ввода
                        placeholder="Например, Москва" // Подсказка внутри поля ввода
                        variant="outlined" // Стиль поля ввода
                        size="medium" // Размер поля ввода
                        fullWidth
                        id={"textField"}
                        onChange={(event) =>
                            debouncedSetQuery(event.target.value)
                        }
                        value={selectedRegion || null}
                    />
                )}
                loadingText={
                    <Flexbox justify="center" align="center">
                        <CircularProgress color="warning" />
                    </Flexbox>
                }
                inputValue={selectedRegion}
            />
        </Flexbox>
    );
};
