import { useState } from "react";
import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Cell, Radio, Switch } from "@telegram-apps/telegram-ui";

export const OtherInfo = () => {
    // const dispatch = useDispatch();
    const [switcherChecked, toggleSwitcherChecked] = useState<boolean>(false);
    // const [wishes, setWishes] = useState<string>("");

    // const handlePreviewSelect = (ranges) => {
    //     const result = {
    //         start: ranges.start.toDate(getLocalTimeZone()),
    //         end: ranges.end.toDate(getLocalTimeZone()),
    //     };

    //     dispatch(selectDates(result));
    // };

    return (
        <Flexbox width="100%">
            <Cell
                after={
                    <Switch
                        checked={switcherChecked}
                        onClick={() => toggleSwitcherChecked((prev) => !prev)}
                    />
                }
                description="Можно рассказать чуть больше"
            >
                Дополнительно
            </Cell>
            {switcherChecked && (
                <Flexbox direction="column">
                    <Cell
                        after={
                            <form>
                                <Cell
                                    Component="label"
                                    before={<Radio name="radio" value="1" />}
                                >
                                    Романтическое
                                </Cell>
                                <Cell
                                    Component="label"
                                    before={<Radio name="radio" value="2" />}
                                >
                                    Семейное
                                </Cell>
                                <Cell
                                    Component="label"
                                    before={<Radio name="radio" value="3" />}
                                >
                                    В одиночестве
                                </Cell>
                            </form>
                        }
                        description="Тип поездки"
                    />
                    {/* <Textarea
                        value={wishes}
                        onInput={(e) => setWishes(e.currentTarget.value)}
                        placeholder="Ваши ожидания от поездки"
                    ></Textarea> */}
                </Flexbox>
            )}
        </Flexbox>
    );
};
