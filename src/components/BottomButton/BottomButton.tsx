import { Button } from "@gravity-ui/uikit";
import { FC } from "react";

interface IProps {
    onClick: (...args: never) => void;
    title: string;
    loading?: boolean;
    disabled?: boolean;
    size?: "s" | "m" | "l" | "xl";
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
                width: "90%",
                height: "max-content",
            }}
        >
            {title}
        </Button>
    );
};
