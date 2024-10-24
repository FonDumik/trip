// import { useState } from "react";
// import { Flexbox } from "@/components/Flexbox/Flexbox";
// import { useDispatch } from "@/store/hooks";
// import { selectTypeOfTravel } from "@/store/FormReducer/FormReducer.slice";

// enum ETypeOfTravel {
//     withChildren = "Семейное",
//     romantic = "Романтическое",
//     alone = "В одиночестве",
// }
export const OtherInfo = () => {
    // const dispatch = useDispatch();
    // const { typeOfTravel } = useSelector(FormState);
    // const [switcherChecked, toggleSwitcherChecked] = useState<boolean>(false);
    // const [wishes, setWishes] = useState<string>("");

    // const handlePreviewSelect = (ranges) => {
    //     const result = {
    //         start: ranges.start.toDate(getLocalTimeZone()),
    //         end: ranges.end.toDate(getLocalTimeZone()),
    //     };

    //     dispatch(selectDates(result));
    // };

    // const toggleOtherDataHandler = () => {
    //     toggleSwitcherChecked((prev) => !prev);
    //     if (!switcherChecked) {
    //         dispatch(selectTypeOfTravel(null));
    //     }
    // };

    // const clickRadioHandler = (type: ETypeOfTravel) => {
    //     dispatch(selectTypeOfTravel(type));
    // };

    return (
        <> </>
        // <Flexbox width="100%">
        //     {/* <Cell
        //         after={
        //             <Switch
        //                 checked={switcherChecked}
        //                 onClick={toggleOtherDataHandler}
        //             />
        //         }
        //         description={
        //             switcherChecked && (
        //                 <Flexbox direction="column">
        //                     <Cell
        //                         Component="label"
        //                         before={
        //                             <Radio
        //                                 name="radio"
        //                                 value="romantic"
        //                                 // onClick={() =>
        //                                 //     clickRadioHandler("romantic")
        //                                 // }
        //                             />
        //                         }
        //                     >
        //                         {ETypeOfTravel.romantic}
        //                     </Cell>
        //                     <Cell
        //                         Component="label"
        //                         before={
        //                             <Radio
        //                                 name="radio"
        //                                 value="withChildren"
        //                                 // onClick={() =>
        //                                 //     clickRadioHandler("withChildren")
        //                                 // }
        //                             />
        //                         }
        //                     >
        //                         {ETypeOfTravel.withChildren}
        //                     </Cell>
        //                     <Cell
        //                         Component="label"
        //                         before={
        //                             <Radio
        //                                 name="radio"
        //                                 value="alone"
        //                                 // onClick={() =>
        //                                 //     clickRadioHandler("alone")
        //                                 // }
        //                             />
        //                         }
        //                     >
        //                         {ETypeOfTravel.alone}
        //                     </Cell>
        //                 </Flexbox>
        //             )
        //         }
        //     >
        //         Указать формат поездки
        //     </Cell> */}
        //     <></>
        // </Flexbox>
    );
};
