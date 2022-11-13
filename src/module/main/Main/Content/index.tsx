import React from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { StampText } from "component/StampText";
import { FontRadioInput } from "component/FontRadioInput";
import { ColorRadio } from "component/ColorRadio";
import { LusterRadio } from "component/LusterRadio";
import { ColorModeRadio } from "component/ColorModeRadio";
import type { ColorMode } from "component/ColorModeRadio";
import type { FontType, Color, Luster } from "component/StampText";
import "./index.less";

export const Content = React.memo(() => {
    const [text, setText] = React.useState("Vintage Leather");
    const [fontType, setFontType] = React.useState<FontType>("typo-roman");
    const [luster, setLuster] = React.useState<Luster>("matte");
    const [color, setColor] = React.useState<Color>("gold");
    const [colorMode, setColorMode] = React.useState<ColorMode>("light");

    return (
        <div className="content">
            <h2>燙金預覽</h2>
            <div className="section">
                <div className="side">
                    <h3>設置</h3>
                    <div className="container">
                        <FormControl mb="4">
                            <FormLabel>內容</FormLabel>
                            <Textarea value={text} onChange={(e) => setText(e.target.value)} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>字體</FormLabel>
                            <FontRadioInput value={fontType} onChange={setFontType} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>顏色</FormLabel>
                            <ColorRadio value={color} onChange={setColor} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>光澤（未必支持所有顏色）</FormLabel>
                            <LusterRadio value={luster} onChange={setLuster} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>主題</FormLabel>
                            <ColorModeRadio value={colorMode} onChange={setColorMode} />
                        </FormControl>
                    </div>
                </div>
                <div className="divider" />
                <div className={`side ${colorMode}`}>
                    <h3>效果預覽</h3>
                    <div className="container">
                        <StampText color={color} luster={luster} type={fontType}>
                            {text}
                        </StampText>
                    </div>
                </div>
            </div>
        </div>
    );
});
