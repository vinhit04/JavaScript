function them() {
  var taskInput = document.getElementById("task");
  var value = taskInput.value.trim();
  if (value === "") {
    arlert("Vui long nhap cong viec");
    return;
  }
  var li = document.createElement("li");
  li.innerText = value;
  var btnDone = document.createElement("button");
  btnDone.innerText = "Hoàn thành";
  btnDone.style.marginLeft = "10px";
  btnDone.onclick = function () {
    li.classList.toggle("completed");
  };

  var btnXoa = document.createElement("button");
  btnXoa.innerText = "Xóa";
  btnXoa.style.marginLeft = "10px";
  btnXoa.onclick = function () {
    li.remove();
  };

  li.appendChild(btnDone);
  li.appendChild(btnXoa);
  document.getElementById("list").appendChild(li);
  taskInput.value = "";
}
