import { toPng } from "html-to-image";

export const downloadImage = (imgSrc, fileName) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Ensure CORS is enabled for the image
    img.src = imgSrc;

    console.log(img);

    img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);

        const dataURI = canvas.toDataURL("image/png"); // You can change the format if needed

        const linkElement = document.createElement("a");
        linkElement.href = dataURI;
        linkElement.download = fileName;

        document.body.appendChild(linkElement);
        linkElement.click();

        document.body.removeChild(linkElement);
    };
};

export const downloadHtmlAsImage = async (element, fileName) => {
    const dataURI = await toPng(element);

    const linkElement = document.createElement("a");
    linkElement.href = dataURI;
    linkElement.download = fileName;

    document.body.appendChild(linkElement);
    linkElement.click();

    document.body.removeChild(linkElement);
};
