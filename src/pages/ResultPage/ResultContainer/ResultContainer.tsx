import { Flexbox } from "@/components/Flexbox/Flexbox";
import { Typography } from "@mui/joy";
import { ReactNode } from "react";

export const ResultContainer = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <Flexbox gap={16} width={"100%"} padding="0 0 0 20px">
            <Typography level="title-lg" textColor="common.white">
                {title}
            </Typography>

            {children}
        </Flexbox>
    );
};
