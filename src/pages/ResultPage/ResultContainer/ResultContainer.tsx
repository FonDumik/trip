import { ReactNode } from "react";
import { Flexbox } from "../../../components/Flexbox/Flexbox";
import { Typography } from "@mui/material";

export const ResultContainer = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <Flexbox gap={16} width={"100%"}>
            <Typography variant="h5">{title}</Typography>

            {children}
        </Flexbox>
    );
};
