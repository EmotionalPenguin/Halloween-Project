const menu = document.querySelector(".menu")
const mobileSize = document.querySelector(".mobile-size")

menu.addEventListener("click",() => {
    mobileSize.classList.toggle("show")
})