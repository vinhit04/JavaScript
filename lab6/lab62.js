var flag = true;
var count = 0;
function mark(index) {
    var buttons = document.getElementsByTagName("button");
    var buttons = buttons[index];
    buttons.innerText = flag ? "X" : "O";
    buttons.style.backgroundColor = flag ? "aqua" : "yellow";
    buttons.setAttribute("disabled", "true");
    flag = !flag;
    count++;
    if (count === 8) {
        alert(" Game Over !");
        location.reload();
    }
}
