// التأكد من تحميل الصفحة بالكامل قبل تنفيذ الأكواد
document.addEventListener("DOMContentLoaded", function () {
    console.log("الموقع جاهز!");

    // مثال: تغيير لون شريط التنقل عند التمرير
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
            const product = this.parentElement;
            const description = product.querySelector("p");
            description.style.height = "auto"; // النص يظهر بالكامل
        });
    });
    const scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});

scrollToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


    // مثال: تنبيه عند الضغط على منتج
    const products = document.querySelectorAll(".product");
  
});
