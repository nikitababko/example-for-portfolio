(function navFixed() {
    const header = document.querySelector(".header-wrapper");
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            header.classList.add("header-wrapper_fixed");
        } else {
            header.classList.remove("header-wrapper_fixed");
        }
    };
})();

(function highlightLink() {
    let home = document.querySelector("#home");
    let about = document.querySelector("#about");
    let skills = document.querySelector("#skills");
    let projects = document.querySelector("#projects");
    let contact = document.querySelector("#contact");

    window.addEventListener("scroll", () => {
        var windo = window.pageYOffset;
        if (home.offsetTop <= windo && about.offsetTop > windo) {
            document.querySelector(".link-about").classList.remove("active");
        } else if (about.offsetTop <= windo && skills.offsetTop > windo) {
            document.querySelector(".link-about").classList.add("active");
            document.querySelector(".link-skills").classList.remove("active");
        } else if (skills.offsetTop <= windo && projects.offsetTop > windo) {
            document.querySelector(".link-about").classList.remove("active");
            document.querySelector(".link-skills").classList.add("active");
            document.querySelector(".link-projects").classList.remove("active");
        } else if (projects.offsetTop <= windo && contact.offsetTop > windo) {
            document.querySelector(".link-projects").classList.add("active");
            document.querySelector(".link-skills").classList.remove("active");
            document.querySelector(".link-contact").classList.remove("active");
        } else if (contact.offsetTop <= windo) {
            document.querySelector(".link-projects").classList.remove("active");
            document.querySelector(".link-contact").classList.add("active");
        }
    });
})();

(function () {
    let burgerBtn = document.querySelector(".burger-btn-wrapper");
    let burgerBtnItem = document.querySelector(".burger-btn");
    let nav = document.querySelector(".nav");

    burgerBtn.addEventListener("click", () => {
        burgerBtnItem.classList.toggle("burger-btn_active");
        nav.classList.toggle("nav_active");
    });
})();
