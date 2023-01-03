const navBtn = document.querySelector("#navBtn");
const mobileNav = document.querySelector("#mobileNav");

navBtn.onclick = () => {
    mobileNav.classList.toggle("js-active");

    navBtn.innerHTML = mobileNav.classList.contains("js-active") ? "close" : "menu";
}