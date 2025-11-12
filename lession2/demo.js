// vòng lặp switch case
// let day = prompt("Nhập vào một số từ 2 đến 8: ");
// switch (day) {
//     case '2':
//         console.log("Thứ Hai");
//         break;
//     case '3':
//         console.log("Thứ Ba");
//         break;
//     case '4':
//         console.log("Thứ Tư");
//         break;
//     case '5':
//         console.log("Thứ Năm");
//         break;
//     case '6':
//         console.log("Thứ Sáu");
//         break;
//     case '7':
//         console.log("Thứ Bảy");
//         break;
//     case '8':
//         console.log("Chủ Nhật");
//         break;
//     default:
//         console.log("Ngày không hợp lệ");
//         break;
// }

// tính giá vé theo độ tuổi : 6->11 là 300k từ 12->17 là 600k lớn hơn 18 là 1tr2 dùng switch case
let age = prompt("Nhập vào độ tuổi của bạn: ");
switch (true) {
    case (age >= 6 && age <= 11):
        console.log("Giá vé của bạn là 300k");
        break;
    case (age >= 12 && age <= 17):
        console.log("Giá vé của bạn là 600k");
        break;
    case (age >= 18):
        console.log("Giá vé của bạn là 1tr2");
        break;
    default:
        console.log("Độ tuổi không hợp lệ");
}
