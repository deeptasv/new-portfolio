document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".bucket-list li");
    listItems.forEach(item => {
        item.addEventListener("click", () => {
            if (item.classList.contains("pending")) {
                item.classList.remove("pending");
                item.classList.add("done");
            } else {
                item.classList.remove("done");
                item.classList.add("pending");
            }
        });
    });
});
