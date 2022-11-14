import React from "react";
import { ObjectUtil } from "@iamyth/util";
import { RadioGroup, Radio, Stack } from "@chakra-ui/react";

export type ColorMode =
    | "Cream"
    | "Beige"
    | "Taupe"
    | "Shadow"
    | "Duke"
    | "Jade"
    | "Rose"
    | "Lavender"
    | "Colibri"
    | "Barbapapa"
    | "Matcha"
    | "Marine"
    | "Sapin"
    | "Violet"
    | "Nior"
    | "Piment"
    | "Gold"
    | "Bordeaux"
    | "Chocolate"
    | "Aubergine"
    | "Soleil";

export const ColorMap: Record<ColorMode, string> = {
    Cream: "#fbf9f6",
    Beige: "#a6a6a3",
    Taupe: "#6c5946",
    Shadow: "#343434",
    Duke: "#96a5a8",
    Jade: "#adb3a9",
    Rose: "#fededc",
    Lavender: "#dcd0ff",
    Colibri: "#80a1b0",
    Barbapapa: "#f3b0cf",
    Matcha: "#68694e",
    Marine: "#03254e",
    Sapin: "#1b2d24",
    Violet: "#402977",
    Nior: "#121212",
    Soleil: "#f5ea1b",
    Piment: "#d31e28",
    Gold: "#966a00",
    Bordeaux: "#470024",
    Chocolate: "#2e1503",
    Aubergine: "#391928",
};

export interface Props {
    value: ColorMode;
    onChange: (value: ColorMode) => void;
}

export const ColorModeRadio = React.memo(({ value, onChange }: Props) => {
    return (
        <RadioGroup value={value} onChange={(value) => onChange(value as ColorMode)}>
            <Stack direction="row" flexWrap="wrap">
                {ObjectUtil.toArray(ColorMap, (key) => (
                    <Radio value={key} key={key}>
                        {key}
                    </Radio>
                ))}
            </Stack>
        </RadioGroup>
    );
});
