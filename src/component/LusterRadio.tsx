import React from "react";
import { RadioGroup, Radio, Stack } from "@chakra-ui/react";
import type { Luster } from "./StampText";

export interface Props {
    value: Luster;
    onChange: (value: Luster) => void;
}

export const LusterRadio = React.memo(({ value, onChange }: Props) => {
    return (
        <RadioGroup value={value} onChange={(value) => onChange(value as Luster)}>
            <Stack direction="row">
                <Radio value="matte">{lusterTranslator("matte")}</Radio>
                <Radio value="glossy">{lusterTranslator("glossy")}</Radio>
            </Stack>
        </RadioGroup>
    );
});

function lusterTranslator(luster: Luster): string {
    switch (luster) {
        case "matte":
            return "亮色";
        case "glossy":
            return "啞色";
    }
}
