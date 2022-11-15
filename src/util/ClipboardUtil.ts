async function copyImage(base64Image: string) {
    if ("ClipboardItem" in window && "write" in navigator.clipboard) {
        const [base64Metadata, base64String] = base64Image.trim().split(";base64,");
        if (base64Metadata !== "data:image/png") {
            // not png format or invalid argument
            return false;
        }
        const unicodeArray = atob(base64String)
            .split("")
            .map((_) => _.charCodeAt(0));
        const byteArray = Uint8Array.from(unicodeArray);
        const blob = new Blob([byteArray], { type: "image/png" });
        await navigator.clipboard.write([new window.ClipboardItem({ "image/png": blob })]);
        return true;
    } else {
        return false;
    }
}

export const ClipboardUtil = Object.freeze({ copyImage });
