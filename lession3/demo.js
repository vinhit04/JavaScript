// toan tu 3 ngoi
let age = prompt("Nhập vào tuổi của bạn");
let access = age < 18 ? "Bạn chưa đủ tuổi" : "Chấp nhận vào học";

console.log(access);

//Vòng lặp while
let dem = 0;
while (dem < 5) {
    console.log(dem);
    dem++;
}
//Vòng lặp do .. while
do {
    console.log(dem);
    dem--;
} while (dem > 0);

//Vòng lặp for
for (let i = 0; i < 5; i++) {
    console.log("Lần lặp thứ " + i);
}

//Vòng lặp for of
let arr = ["apple", "orange", "mango", "banana"];

for (const item of arr) {
    console.log(item);
}
//Vòng lặp foreach
arr.forEach(function(item, index) {
    console.log(`${item} : ${index}`);
});

//Break
let dem = 5;
while (true) {
    console.log(dem);
    if (dem == 20) break;
    dem++;
}

//continues
for (let i = 0; i < 20; i++) {
    if (i > 5 && i < 15) continue;
    console.log(i);
}

//Hàm cơ bản
function hello() {
    console.log("Xin chào bạn")
}
//Lời gọi hàm
hello();

//Hàm có tham số
function tinhtong(x, y) {
    let t = x + y;
    console.log(`${x} + ${y} = ${t}`)
}
tinhtong(12, 22);
//Hàm có giá trị trả về
function tinhhieu(x, y) {
    return x - y;
}
let x = 10,
    y = 55
console.log(`${x} - ${y} = ` + tinhhieu(x, y))

//viết hàm kiểm tra xem học sinh có đủ tuổi đi học đại học không
function kiemtra(tuoi) {
    return tuoi >= 18
}
//Nhập vào tuổi
let tuoi = parseInt(prompt("Nhập tuổi"))
if (kiemtra(tuoi)) {
    console.log(`Tuổi ${tuoi} đủ để học cao đẳng đại học`)
} else {
    console.log(`Tuổi ${tuoi} chưa đủ học cao đẳng đại học`)
}

let dem = 0;

function hello() {
    dem++;
    console.log("Xin chào các bạn: " + dem);
}