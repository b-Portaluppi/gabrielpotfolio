const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const close = document.getElementById("close");

menu.addEventListener("click", () => {
        nav.style.display = 'block'
        menu.style.display = "none"
        close.style.display = "block"

})

close.addEventListener("click", () => {
    nav.style.display = "none"
    menu.style.display = "block"
    close.style.display = "none"
})