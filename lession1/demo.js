var x = 1 ;
let y = 2 ;
const z = 3 ;

console.log(x, y, z) ;

let a = 1 ;
let isPoint = true ;
let person = { name : "Alice"};
let nothing = null ;
let arr = [1,2,3];
let s = "hello" ;
// kiểm tra kiểu dữ liệu 
console.log(typeof a);
console.log(typeof isPoint);
console.log(typeof person);
console.log(typeof arr);
console.log(typeof s);
console.log(typeof nothing);

// nhập vào họ tên 
a = prompt("Nhập vào họ tên của bạn: ") ;
console.log("Họ tên của bạn là: " + a);

// tạo số ngẫu nhiên 
let number = Math.random() * 10 ;
console.log(number);

// tạo số ngẫu nhiên từ 0 - 10
/**
 * Math.ceil làm tròn lên 7.1 -> 8
 * Math.floor làm tròn xuống 7.9 -> 7
 * Math.round làm tròn trong gần 7.5 -> 8, gần 7.4->7
 */
number = Math.round(number*10);
console.log(number);

// câu lệnh if 
if (number > 5){
    console.log("Số lớn hơn 5");
}
// câu lệnh if else
if (number>5) {
    console.log("Số lớn hơn 5");
} else {
    console.log("Số nhỏ hơn hoặc bằng 5");
}

// câu lệnh if else if
if (number>7) {
    console.log("Số lớn hơn 7");
} else if (number>5){
    console.log("Số lớn hơn 5 nhưng nhỏ hơn hoặc bằng 7");
}   else if (number>3){
    console.log("Số lớn hơn 3 nhưng nhỏ hơn hoặc bằng 5");
} else {
    console.log("Số nhỏ hơn hoặc bằng 3");
}

// chuỗi 
let languague = "JavaScript" ;
let message = "Ngôn ngữ lập trình " + languague ;
console.log(message) ;

// thuộc tính và phương thức của chuỗi

// lấy độ dài chuỗi
console.log(languague.length) ;

// chuỗi con
console.log(languague.slice(0,4)) ;

// sử dụng ký tự đặc biệt trong chuỗi
let text = 'Học lập trình \"JavaScript\" tại F8!' ;
console.log (text) ;

// kiểu số , phương thức

let n = 15.56789 ;
console.log(n.toFixed(2)) ; // làm tròn 2 chữ số thập phân

// kiểm tra xem có phải số hay không sử dụng isNaN : fales là số , true là không phải số
console.log(isNaN(n)) ;
console.log(isNaN("Hello")) ;

// kiểm tra xem nó có phải số nguyên không
console.log(Number.isInteger(n)) ;
console.log(Number.isInteger(10)) ;
