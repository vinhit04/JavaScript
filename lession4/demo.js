//Khai báo đối tượng
let sinhvien = {
    name: "Nguyễn Văn A",
    age: 19,
    mssv: "ph12345",
    dihoc() {
        console.log("Sinh viên đi học");
    },
};

console.log(sinhvien);

//Khai báo 1 lớp
class Sinhvien {
    constructor(name, age, mssv) {
        this.name = name;
        this.age = age;
        this.mssv = mssv;
    }

    dihoc() {
        console.log(`${this.name} đang đi học`);
    }
    diemdanh() {
        console.log(`${this.name} đã được điểm danh`);
    }
}

let sv1 = new Sinhvien("An", 19, "ph12345");
let sv2 = new Sinhvien("Long", 20, "ph12346");
let sv3 = new Sinhvien("Hằng", 19, "ph12347");

console.log(sv1, sv2, sv3);
//Truy cập đến phương thức
sv1.diemdanh();
sv1.dihoc();
//Truy cập đến thuộc tính
console.log(sv1.name);




//setTimeout thực hiện sau 1 khoảng thời gian
let t = setTimeout(function() {
    console.log('Thực hiện chương trình')
    console.log('Xin chào')
}, 3000)

// clearTimeout(t)
let dem = 1;
//setInterval thực hiện lặp lại sau 1 khoảng thời gian
let inter = setInterval(function() {
    console.log("Lặp lại lần thứ: " + dem)
    dem++
}, 2000)


//Lựa chọn thẻ cần thao tác
let h1 = document.querySelector('#tieude'); //cách 1
h1.innerHTML = "Xin chào <i>thế giới</i>"

//Lựa chọn theo id
let head = document.getElementById('head');
head.innerHTML = `
            <img src="images/Anh2.jpg" width=100 />
        `

//Khi di chuột vào
function moveOver() {
    head.innerHTML = `
            <img src="images/Anh3.jpg" width=100 />
        `
}
head.onmouseleave = function() {
    head.innerHTML = `
            <img src="images/Anh2.jpg" width=100 />
        `
}