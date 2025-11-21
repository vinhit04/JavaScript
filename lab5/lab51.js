
function display() {
    var pro = document.getElementById("pro");
    var quantity = document.getElementById("quantity");
    var name = pro.innerText;
    var price = parseFloat(pro.getAttribute("data-price").replace("$", ""));
    var quantity = parseInt(quantity.value);
    var amount = price * quantity;
    document.getElementById("name").innerText = name;
    document.getElementById("amount").innerText = price + "$" + " x " + quantity + " = " + amount + "$";
}