import { Button } from "@gravity-ui/uikit";
import { FC } from "react";

interface IProps {
    onClick: (...args: never) => void;
    title: string;
    loading?: boolean;
    disabled?: boolean;
    size?: "s" | "m" | "l";
}
export const BottomButton: FC<IProps> = ({
    onClick,
    title,
    loading,
    disabled,
    size = "m",
}) => {
    return (
        <Button
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            view="action"
            size={size}
            style={{
                position: "absolute",
                bottom: 26,
                width: "90%",
            }}
        >
            {title}
        </Button>
    );
};