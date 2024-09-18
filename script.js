const about = document.querySelector(".about");
const navlist = document.querySelector("nav-list");

about.addEventListener("click", () => {
    about.classList.toggle("Active");
    navlist.classList.toggle("Active");
})