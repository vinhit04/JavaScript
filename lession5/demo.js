// const p = document.getElementsByTagName('p');
// console.log(p);

// const parent = document.getElementById('container');
// console.log(parent);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.firstElementChild.nextElementSibling);
// console.log(parent.children);

// const countChild = parnent.childElementCount;
// console.log('So luong con: ' + countChild);

// const parent = document.getElementById('container')
// them moi su kien click
// const create = document.getElementById('add')
// const remove = document.getElementById('remove')
// create.addEventListener('click', function () {
  // cach 1 : tao phan tu tu phuong thuc createElement
  // const child1 = document.createElement('h2')
  // child1.innerText = 'Day la the h2 duoc them vao'
  // them phan tu vao parent
  // parent.appendChild(child1)
  // cach 2: tao phan tu tu thuoc tinh innerHTML
  // parent.innerHTML += '<h3>Day la the h3 duoc them vao</h3>'
// })

// xoa phan tu dau
// parent.removeChild(parent.firstElementChild);
// xoa phan tu cuoi
// remove.addEventListener('click', function () {
//   if (parent.childElementCount > 0) parent.removeChild(parent.lastElementChild)
//   else alert('Khong con phan tu de xoa')
// })


const btn = document.getElementsByTagName('button')

console.log(btn[0].parentElement.parentElement);
btn[0].addEventListener('click', function () {
  const parent1 = btn[0].parentElement.parentElement;
  console.log(parent1)

  const childElement = parent1.children;
  console.log(childElement[3])
})