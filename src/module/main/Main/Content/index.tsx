import React from "react";
import { FormControl, FormLabel, Textarea, Button, ButtonGroup, Stack, useToast } from "@chakra-ui/react";
import { StampText } from "component/StampText";
import { FontRadioInput } from "component/FontRadioInput";
import { ColorRadio } from "component/ColorRadio";
import { LusterRadio } from "component/LusterRadio";
import { ColorModeRadio, ColorMap } from "component/ColorModeRadio";
import { ColorUtil } from "util/ColorUtil";
import { PromiseUtil } from "@iamyth/util";
import { DownloadEngine } from "util/DownloadEngine";
import type { ColorMode } from "component/ColorModeRadio";
import type { FontType, Color, Luster } from "component/StampText";
import "./index.less";

export const Content = React.memo(() => {
    const [text, setText] = React.useState("Vintage Leather");
    const [fontType, setFontType] = React.useState<FontType>("typo-roman");
    const [luster, setLuster] = React.useState<Luster>("matte");
    const [color, setColor] = React.useState<Color>("gold");
    const [colorMode, setColorMode] = React.useState<ColorMode>("Cream");
    const [showWatermark, setShowWatermark] = React.useState(false);
    const toast = useToast({ position: "top-right", duration: 3000, containerStyle: { marginTop: "90px" } });

    const backgroundColor = ColorMap[colorMode];
    const shouldUseDark = ColorUtil.shouldUseDark(backgroundColor);

    const onDownload = async () => {
        try {
            setShowWatermark(true);
            await PromiseUtil.sleep(500);
            const filename = [colorMode].join("-");
            await DownloadEngine.downloadImage(filename);
        } finally {
            setShowWatermark(false);
        }
    };

    const onCopy = async () => {
        try {
            setShowWatermark(true);
            await PromiseUtil.sleep(500);
            const success = await DownloadEngine.copyImage();
            toast({
                colorScheme: success ? "green" : "red",
                status: success ? "success" : "error",
                title: success ? "????????????" : "????????????",
                variant: "left-accent",
            });
        } finally {
            setShowWatermark(false);
        }
    };

    const containerStyle: React.CSSProperties = {
        backgroundColor,
    };

    const previewStyle: React.CSSProperties = {
        color: ColorUtil.pickTextColorByBackground(backgroundColor),
    };

    const watermarkStyle: React.CSSProperties = {
        color: ColorUtil.pickTextColorByBackground(backgroundColor),
    };

    const overlayStyle: React.CSSProperties = {
        filter: shouldUseDark ? "invert(1)" : undefined,
        opacity: shouldUseDark ? 0.7 : 1,
    };

    return (
        <div className="content">
            <h2>????????????</h2>
            <div className="section">
                <div className="side">
                    <h3>??????</h3>
                    <div className="container">
                        <FormControl mb="4">
                            <FormLabel>??????</FormLabel>
                            <Textarea value={text} onChange={(e) => setText(e.target.value)} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>??????</FormLabel>
                            <FontRadioInput value={fontType} onChange={setFontType} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>??????</FormLabel>
                            <ColorRadio value={color} onChange={setColor} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>????????????????????????????????????</FormLabel>
                            <LusterRadio value={luster} onChange={setLuster} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>????????????</FormLabel>
                            <ColorModeRadio value={colorMode} onChange={setColorMode} />
                        </FormControl>
                        <FormControl mb="4">
                            <ButtonGroup>
                                <Stack direction="row">
                                    <Button onClick={onDownload} colorScheme="green">
                                        ????????????
                                    </Button>
                                    <Button onClick={onCopy} colorScheme="green">
                                        ??????
                                    </Button>
                                </Stack>
                            </ButtonGroup>
                        </FormControl>
                    </div>
                </div>
                <div className="divider" />
                <div className="side" style={containerStyle} ref={DownloadEngine.registerContainer}>
                    <h3 style={previewStyle}>????????????</h3>
                    {showWatermark && (
                        <div className="watermark" style={watermarkStyle}>
                            Vintage Leather
                        </div>
                    )}
                    <div className="overlay" style={overlayStyle} />
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
