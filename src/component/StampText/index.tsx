import React from "react";
import "./index.less";

export type Luster = "glossy" | "matte";
export type Color = "gold" | "rose-gold" | "silver" | "black" | "white";
export type FontType = "typo-roman" | "goudy-cursive";

export interface Props {
    type: FontType;
    color: Color;
    luster: Luster;
    children: React.ReactNode;
}

export const StampText = React.memo(({ type, luster, color, children }: Props) => {
    return <span className={`g-stamp-text ${luster}-${color} ${type}`}>{children}</span>;
});
