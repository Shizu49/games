window.onload = () => {
    window.copyButton = (button) => {
        const textElement = button.querySelector("p");
        const codeElement = button.closest("pre")?.querySelector("code");

        textElement.innerText = codeElement 
            ? (navigator.clipboard.writeText(codeElement.textContent.trim()).then(() => textElement.innerText = "Copied !"), " ")
            : "Failed";

        setTimeout(() => textElement.innerText = " ", 2000);
    };
};
