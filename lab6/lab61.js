const menus = document.querySelectorAll(".title");
const openText = document.querySelectorAll(".myText");
menus.forEach((el) => {
    el.addEventListener("click", (event) => {
        console.log(el.nextElementSibling);
        remove();
        el.nextElementSibling.classList.toggle("active");
    })
})
function remove() {
    openText.forEach((ele) => {
        ele.classList.remove("active");
    })
}
