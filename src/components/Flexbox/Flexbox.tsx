import { ReactNode, HTMLProps } from "react";

interface IProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
    gap?: number;
    width?: number | string;
    direction?: string;
    align?: string;
    wrap?: string;
    justify?: string;
    verticalMargin?: number;
    style?: any;
    className?: string;
    onClick?: (...args: never) => void;
}

export const Flexbox = ({
    gap = 0,
    direction = "column",
    align = "stretch",
    justify = "flex-start",
    children,
    width = "auto",
    wrap = "nowrap",
    verticalMargin = 0,
    style,
    className,
    onClick,
}: IProps) => {
    const FlexStyles = {
        display: "flex",
        gap,
        width: typeof width === "number" ? width + "px" : width,
        flexDirection: direction,
        alignItems: align,
        flexWrap: wrap,
        justifyContent: justify,
        margin: `${verticalMargin}px 0`,
    };

    return (
        <div
            style={{ ...FlexStyles, ...style }}
            className={className}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
