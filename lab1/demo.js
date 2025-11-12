// Bài 1. Tính điểm trung bình và xếp loại
// Mục tiêu: kết hợp tính toán và điều kiện rẽ nhánh.
// Yêu cầu:
// Nhập điểm 3 môn: Toán, Lý, Hóa.
// Tính điểm trung bình.
// Dựa vào điểm trung bình, xếp loại:
// Giỏi: ≥ 8.0
// 	Khá: ≥ 6.5 và < 8.0
// 	Trung bình: ≥ 5.0 và < 6.5
// 	Yếu: < 5.0
// giai
let toan = parseFloat(prompt("Nhập điểm Toán: "));
let ly = parseFloat(prompt("Nhập điểm Lý: "));
let hoa = parseFloat(prompt("Nhập điểm Hóa: "));
let diemTrungBinh = (toan + ly + hoa) / 3;
console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2));
if (diemTrungBinh >= 8.0) {
    console.log("Xếp loại: Giỏi");
}
else if (diemTrungBinh >= 6.5) {
    console.log("Xếp loại: Khá");
}
else if (diemTrungBinh >= 5.0) {
    console.log("Xếp loại: Trung bình");
}
else {
    console.log("Xếp loại: Yếu");
}




// Bài 2. Kiểm tra năm nhuận
// Mục tiêu: luyện biểu thức logic và điều kiện lồng nhau.
// Yêu cầu:
// 	Nhập một năm bất kỳ.
// 	In ra “Năm nhuận” nếu năm đó chia hết cho 4 mà không chia hết cho 100, hoặc chia hết cho 400.
// 	Ngược lại in “Không phải năm nhuận”.
// giai 
let nam = parseInt(prompt("Nhập một năm bất kỳ: "));
if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
    console.log(nam + " là Năm nhuận");
}
else {
    console.log(nam + " Không phải năm nhuận");
}




// Bài 3. Đếm số chữ cái trong chuỗi
// Mục tiêu: luyện làm việc với chuỗi và thuộc tính .length.
// Yêu cầu:
// 	Nhập vào một chuỗi bất kỳ.
// 	In ra số ký tự có trong chuỗi.
// giai
let chuoi = prompt("Nhập vào một chuỗi bất kỳ: ");
console.log("Số ký tự trong chuỗi: " + chuoi.length);




// Bài 4. In thông báo theo giới tính (switch case)
// Mục tiêu: thực hành switch case.
// Yêu cầu:
// 	Nhập giới tính: "nam", "nữ", hoặc "khác".
// 	In ra lời chào phù hợp:
// 	Nam → “Xin chào anh!”
// 	Nữ → “Xin chào chị!”
// 	Khác → “Xin chào bạn!”
// giai
let gioiTinh = prompt("Nhập giới tính (nam, nữ, khác): ").toLowerCase();
switch (gioiTinh) {
    case "nam":
        console.log("Xin chào anh!");
        break;
    case "nữ":
        console.log("Xin chào chị!");
        break;
    case "khác":
        console.log("Xin chào bạn!");
        break;
    default:
        console.log("Giới tính không hợp lệ!");
        break;
}




// Bài 5. Máy tính mini đơn giản
// Mục tiêu: thực hành switch case với phép toán.
// Yêu cầu:
// 	Nhập 2 số và 1 phép toán (+, -, *, /).
// 	Dùng switch để tính và in kết quả.
// giai
let so1 = parseFloat(prompt("Nhập số thứ nhất: "));
let so2 = parseFloat(prompt("Nhập số thứ hai: "));
let phepToan = prompt("Nhập phép toán (+, -, *, /): ");
let ketQua;
switch (phepToan) {
    case "+":
        ketQua = so1 + so2;
        break;
    case "-":
        ketQua = so1 - so2;
        break;
    case "*":
        ketQua = so1 * so2;
        break;
    case "/":
        if (so2 !== 0) {
            ketQua = so1 / so2;
        }
        else {
            console.log("Lỗi: Không thể chia cho 0.");
        }
        break;
    default:
        console.log("Phép toán không hợp lệ!");
        break;
}



// Bài 6. Đoán số
// Mục tiêu: thực hành tạo số ngẫu nhiên (0-100) random 
// Yêu cầu:
//     Tạo số ngẫu nhiên từ 0 đến 100
// 	Nhập vào 2 số nguyên
// 	Kiểm tra 2 số đó có bằng với số ngẫu nhiên không
// 	In ra thông báo Trúng số  khi bằng hoặc May mắn lần sau khi không bằng.
// giai
let soNgauNhien = Math.floor(Math.random() * 101);
let soNhap1 = parseInt(prompt("Nhập số nguyên thứ nhất (0-100): "));
let soNhap2 = parseInt(prompt("Nhập số nguyên thứ hai (0-100): "));
if (soNhap1 === soNgauNhien || soNhap2 === soNgauNhien) {
    console.log("Trúng số!");
} else {
    console.log("May mắn lần sau!");
}
console.log("Số ngẫu nhiên là: " + soNgauNhien);
