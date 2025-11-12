// Bài 1: Tính tổng các phần tử trong mảng
// Mục tiêu: Biết cách duyệt mảng và cộng dồn giá trị.
// Đề bài:
// Viết hàm tinhTong(arr) nhận vào một mảng số, trả về tổng của tất cả phần tử trong mảng.
// giai
function tinhTong(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
    }
    return tong;
}




// Bài 2: Tìm giá trị lớn nhất trong mảng
// Mục tiêu: Củng cố thao tác tìm kiếm trong mảng.
// Đề bài:
// Viết hàm timMax(arr) để tìm phần tử có giá trị lớn nhất trong mảng.
// giai
function timMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}



// Bài 3: Đếm số chẵn trong mảng
// Mục tiêu: Ứng dụng điều kiện kết hợp vòng lặp.
// Đề bài:
// Viết hàm demSoChan(arr) trả về số lượng phần tử là số chẵn trong mảng.
// giai 
function demSoChan(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}



// Bài 4: Đảo ngược mảng
// Mục tiêu: Hiểu cách thao tác chỉ số trong mảng.
// Đề bài:
// Viết hàm daoNguoc(arr) trả về mảng mới là đảo ngược của mảng ban đầu.
// giai
function daoNguoc(arr) {
    let arrDaoNguoc = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrDaoNguoc.push(arr[i]);
    }
    return arrDaoNguoc;
}



// Bài 5: Tìm phần tử xuất hiện nhiều nhất trong mảng
// Mục tiêu: Luyện tư duy xử lý dữ liệu, đếm tần suất.
// Đề bài:
// Viết hàm timPhanTuNhieuNhat(arr) để tìm phần tử xuất hiện nhiều nhất.
// giai
function timPhanTuNhieuNhat(arr) {
    let tanSuat = {};
    let maxCount = 0;
    let phanTuNhieuNhat = null;
    for (let i = 0; i < arr.length; i++) {
        let phanTu = arr[i];
        tanSuat[phanTu] = (tanSuat[phanTu] || 0) + 1;
        if (tanSuat[phanTu] > maxCount) {
            maxCount = tanSuat[phanTu];
            phanTuNhieuNhat = phanTu;
        }
    }
    return phanTuNhieuNhat;
}



// Bài 6: Lọc các số dương trong mảng
// Mục tiêu: Biết tạo mảng mới từ mảng cũ qua điều kiện.
// Đề bài:
// Viết hàm locSoDuong(arr) trả về mảng mới chỉ gồm các số dương.
// giai
function locSoDuong(arr) {
    let arrSoDuong = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrSoDuong.push(arr[i]);
        }
    }
    return arrSoDuong;
}
