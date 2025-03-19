document.addEventListener("click", (event) => {
    const target = event.target.closest(".close-details");
    if (target) {
        event.preventDefault();
        target.closest("details")?.removeAttribute("open");
    }
});