const menu_btn = document.querySelector(".icoans");
const nav_header = document.querySelector(".header")
const toggleNavbar = () => {
    nav_header.classList.toggle("active")
}

menu_btn.addEventListener("click", () => toggleNavbar())



VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});