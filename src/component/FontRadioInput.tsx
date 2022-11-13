import React from "react";
import { RadioGroup, Radio, Stack } from "@chakra-ui/react";
import type { FontType } from "./StampText";

export interface Props {
    value: FontType;
    onChange: (value: FontType) => void;
}

export const FontRadioInput = React.memo(({ value, onChange }: Props) => {
    return (
        <RadioGroup onChange={(value) => onChange(value as FontType)} value={value}>
            <Stack direction="row">
                <Radio value="typo-roman">Typo-Roman（正階）</Radio>
                <Radio value="goudy-cursive">Goudy Cursive（撩草）</Radio>
            </Stack>
        </RadioGroup>
    );
});
