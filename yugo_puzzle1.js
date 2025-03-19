// <details> close
document.addEventListener("click", (event) => {
    const target = event.target.closest(".close-details");
    if (target) {
        event.preventDefault();
        target.closest("details")?.removeAttribute("open");
    }
});
document.addEventListener("toggle", (event) => {
    if (event.target.tagName === "DETAILS") {
        event.target.dataset.visited = "true";
    }
});
// thumbクリックでYoutube読込
document.querySelectorAll(".thumb").forEach(thumb => 
    thumb.addEventListener("click", () => {
        const player = thumb.nextElementSibling;
        if (player?.tagName === "IFRAME") {
            player.src = player.dataset.src;
            thumb.style.display = "none";
        }
    })
);
// Linkグラデ
const gradients = {
    ".mkj": [154, 89.4, 18.4, 309, 22.5, 44.5, "+"],
    ".mzm": [275, 45.6, 31, 313, 22.5, 37.5, "+"],
    ".zz":  [152, 79.6, 44, 197, 63.4, 16.1, "+"]
};
Object.entries(gradients).forEach(([selector, [hs, ss, ls, he, se, le, mode]]) => {
    document.querySelectorAll(`${selector} .btn`).forEach((btn, index, arr) => {
        const step = index / (arr.length - 1);
        const h = mode === "+" 
            ? hs + step * ((he - hs + 360) % 360) 
            : hs - step * ((hs - he + 360) % 360);
        const s = ss + step * (se - ss);
        const l = ls + step * (le - ls);
        btn.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
    });
});
