import { useState } from "react";
import { Select, Switch } from "@gravity-ui/uikit";
import { useDispatch } from "react-redux";
import {
    selectWishes,
    selectTypeOfTravel,
} from "../../../store/FormReducer/FormReducer.slice";
import { Flexbox } from "../../Flexbox/Flexbox";
import { Typography } from "../../Typography";

enum ETypeOfTravel {
    withChildren = "Семейное",
    romantic = "Романтическое",
    alone = "В одиночестве",
}

const Wishes = [
    "Активный отдых",
    "Экскурсии",
    "Дегустации",
    "Фототур",
    "Шопинг",
    "Релакс",
    "Попробовать новое",
];
export const OtherInfo = () => {
    const dispatch = useDispatch();
    const [switcherChecked, toggleSwitcherChecked] = useState<boolean>(false);

    const changeTravelWishesHandler = (wishes: any[]) => {
        dispatch(selectWishes(wishes.join(", ")));
    };

    const toggleOtherDataHandler = () => {
        toggleSwitcherChecked((prev) => !prev);
        if (!switcherChecked) {
            dispatch(selectTypeOfTravel(null));
        }
    };

    const changeTravelTypeHandler = (type: string) => {
        dispatch(selectTypeOfTravel(ETypeOfTravel[type]));
    };

    return (
        <Flexbox width={"100%"}>
            <Flexbox direction="row" justify="space-between">
                <Typography kind="callout">Дополнительно</Typography>
                <Switch
                    checked={switcherChecked}
                    onChange={toggleOtherDataHandler}
                />
            </Flexbox>
            {switcherChecked && (
                <Flexbox gap={16} verticalMargin={20}>
                    <Flexbox
                        direction="row"
                        width={"100%"}
                        justify="space-between"
                        align="center"
                    >
                        <Typography kind="callout">Тип путешествия</Typography>
                        <Select
                            size="m"
                            placeholder="Выбрать"
                            width={150}
                            onUpdate={([value]) =>
                                changeTravelTypeHandler(value)
                            }
                        >
                            {Object.keys(ETypeOfTravel).map((type, index) => (
                                <Select.Option
                                    value={type}
                                    key={`${type}${index}`}
                                >
                                    {ETypeOfTravel[type]}
                                </Select.Option>
                            ))}
                        </Select>
                    </Flexbox>
                    <Flexbox
                        direction="row"
                        width={"100%"}
                        justify="space-between"
                    >
                        <Typography kind="callout">Пожелания</Typography>
                        <Select
                            size="m"
                            placeholder="Выбрать"
                            width={150}
                            onUpdate={changeTravelWishesHandler}
                            multiple
                        >
                            {Wishes.map((wish, index) => (
                                <Select.Option
                                    value={wish}
                                    key={`${wish}${index}`}
                                >
                                    {wish}
                                </Select.Option>
                            ))}
                        </Select>
                    </Flexbox>
                </Flexbox>
            )}
        </Flexbox>
    );
};
