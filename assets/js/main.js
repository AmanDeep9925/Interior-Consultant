const navBtn = document.getElementById("nav--btn");
const mobileNav = document.querySelector(".mobile--nav");

navBtn.addEventListener("click", (e) => {
    let nav = document.querySelector(".fas");
    if (nav.classList.contains("fa-bars")) {
        nav.classList.remove("fa-bars");
        nav.classList.add("fa-times");

        mobileNav.style.display = "flex";
    } else if (nav.classList.contains("fa-times")) {
        nav.classList.remove("fa-times");
        nav.classList.add("fa-bars");

        mobileNav.style.display = "none";
    }
});
