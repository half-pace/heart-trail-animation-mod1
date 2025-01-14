const bodyEle = document.querySelector("body");

bodyEle.addEventListener("mousemove", () => {
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanEle = document.createElement("span");
    bodyEle.appendChild(spanEle);
});