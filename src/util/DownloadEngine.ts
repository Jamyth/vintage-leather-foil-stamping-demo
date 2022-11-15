import html2canvas from "html2canvas";
import { ClipboardUtil } from "./ClipboardUtil";

let container: HTMLElement | null = null;

function registerContainer(element: HTMLElement | null) {
    container = element;
}

async function downloadImage(filename = "preview") {
    const url = await getDownloadableData();
    const anchor = document.createElement("a");
    document.body.appendChild(anchor);
    anchor.href = url.replace(/^data:image\/png/, "data:application/octet-stream");
    anchor.download = `${filename}.png`;
    anchor.click();
    document.body.removeChild(anchor);
}

async function copyImage() {
    const url = await getDownloadableData();
    return ClipboardUtil.copyImage(url);
}

async function getDownloadableData() {
    if (!container) {
        throw new Error("[DownloadEngine]: container is not set.");
    }
    const canvas = await html2canvas(container);
    return canvas.toDataURL();
}

export const DownloadEngine = Object.freeze({
    registerContainer,
    downloadImage,
    copyImage,
});
