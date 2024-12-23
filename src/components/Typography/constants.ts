import { ETypographyKind, TFontAlign } from './types';

export const FONT_SIZE: Record<ETypographyKind, number> = {
    [ETypographyKind.title1]: 40,
    [ETypographyKind.title2]: 32,
    [ETypographyKind.title3]: 20,
    [ETypographyKind.title4]: 18,
    [ETypographyKind.body]: 16,
    [ETypographyKind.callout]: 14,
    [ETypographyKind.subhead]: 12,
};

export const FONT_ALIGN: Record<TFontAlign, 'center' | 'left' | 'right'> = {
    center: 'center',
    left: 'left',
    right: 'right',
};
