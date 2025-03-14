document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#8d6b4f";
        } else {
            navbar.style.backgroundColor = "#B08D74";
        }
    });

    document.querySelectorAll(".view-more").forEach(button => {
        button.addEventListener("click", function () {
            const description = this.parentElement.querySelector("p");
            description.style.height = "auto";
        });
    });

    const scrollToTop = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        scrollToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
