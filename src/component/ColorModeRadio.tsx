import React from "react";
import { RadioGroup, Radio, Stack } from "@chakra-ui/react";

export type ColorMode = "dark" | "light";

export interface Props {
    value: ColorMode;
    onChange: (value: ColorMode) => void;
}

export const ColorModeRadio = React.memo(({ value, onChange }: Props) => {
    return (
        <RadioGroup value={value} onChange={(value) => onChange(value as ColorMode)}>
            <Stack direction="row">
                <Radio value="dark">{colorModeTranslator("dark")}</Radio>
                <Radio value="light">{colorModeTranslator("light")}</Radio>
            </Stack>
        </RadioGroup>
    );
});

function colorModeTranslator(colorMode: ColorMode): string {
    switch (colorMode) {
        case "dark":
            return "深色主題";
        case "light":
            return "淺色主題";
    }
}
