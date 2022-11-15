import React from "react";
import { RadioGroup, Radio, Stack } from "@chakra-ui/react";
import type { Color } from "./StampText";

export interface Props {
    value: Color;
    onChange: (value: Color) => void;
}

export const ColorRadio = React.memo(({ value, onChange }: Props) => {
    return (
        <RadioGroup value={value} onChange={(value) => onChange(value as Color)}>
            <Stack direction="row">
                <Radio value="gold">{colorTranslator("gold")}</Radio>
                <Radio value="rose-gold">{colorTranslator("rose-gold")}</Radio>
                <Radio value="silver">{colorTranslator("silver")}</Radio>
                <Radio value="black">{colorTranslator("black")}</Radio>
                <Radio value="white">{colorTranslator("white")}</Radio>
            </Stack>
        </RadioGroup>
    );
});

function colorTranslator(color: Color): string {
    switch (color) {
        case "gold":
            return "金色";
        case "rose-gold":
            return "玫瑰金色";
        case "silver":
            return "銀色";
        case "black":
            return "黑色";
        case "white":
            return "白色";
    }
}
