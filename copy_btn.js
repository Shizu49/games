window.onload = function() {
    window.copyButton = function(button) {
        const textElement = button.querySelector("p");
        const codeElement = button.closest("pre")?.querySelector("code");
        if (!codeElement) {
            textElement.innerText = "Failed";
        } else {
            navigator.clipboard.writeText(codeElement.textContent.trim()).then(() => {
                textElement.innerText = "Copied !";
            });
        }
        setTimeout(() => textElement.innerText = " ", 2000);
    };
};
