function them(button) {
  var row = button.parentElement.parentElement.cloneNode(true);
  var btnXoa = row.getElementsByTagName("button")[0];
  btnXoa.innerText = "Xóa";
  btnXoa.setAttribute("onclick", "xoa(this)");
  document.getElementById("cart").appendChild(row);
  tinhTong();
}
function xoa(button) {
  var row = button.parentElement.parentElement;
  document.getElementById("cart").removeChild(row);
  tinhTong();
}
function tinhTong() {
  var cart = document.getElementById("cart");
  var rows = cart.getElementsByTagName("tr");
  var tong = 0;
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    if (cells.length < 3) continue;
    var textGia = cells[2].innerText.trim();
    var gia = parseFloat(textGia.replace("$", ""));

    if (!isNaN(gia)) {
      tong += gia;
    }
  }
  document.getElementById("tong").innerText = tong;
}
