import { FC } from "react";

import { FONT_ALIGN, FONT_SIZE } from "./constants";
import { ETypographyKind, TFontAlign } from "./types";

interface IProps {
    children: any;
    kind?: keyof typeof ETypographyKind;
    align?: TFontAlign;
    color?: string;
    warning?: boolean;
    weight?: number;
    verticalMargin?: number;
    clickable?: boolean;
    maxLength?: number;
}

export const Typography: FC<IProps> = ({
    kind = ETypographyKind.body,
    align = "left",
    weight = 400,
    children,
    verticalMargin = 0,
    clickable = false,
    ...props
}) => {
    const renderSpan = (length?: number) => {
        const truncatedChildren =
            length && children.length > length
                ? children.substring(0, length) + "..."
                : children;

        return (
            <span
                style={{
                    fontSize: FONT_SIZE[kind],
                    textAlign: FONT_ALIGN[align],
                    fontWeight: weight,
                    margin: `${verticalMargin}px 0`,
                    cursor: clickable ? "pointer" : "default",
                }}
                {...props}
            >
                {truncatedChildren}
            </span>
        );
    };

    return renderSpan();
};
