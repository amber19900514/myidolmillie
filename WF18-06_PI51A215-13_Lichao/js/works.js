(() => {
    const items = document.querySelectorAll(".works-item");
    const titleEl = document.getElementById("worksCurrentTitle");
    const descEl = document.getElementById("worksCurrentDesc");

    let current = 0;

    function updateWorks(index) {
        current = index;

        items.forEach((item, i) => {
            item.classList.toggle("active", i === current);
        });

        titleEl.textContent = items[current].dataset.title;
        descEl.textContent = items[current].dataset.desc;
    }

    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            updateWorks(index);
        });
    });

    updateWorks(2);
})();
