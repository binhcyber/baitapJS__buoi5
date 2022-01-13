function tinhThueThuNhapCaNhan() {
  var tongThuNhapNam = document.getElementById("tongThuNhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;
  var xuatThongTin = document.getElementById("xuatThongBao");
  var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  console.log(thuNhapChiuThue);
  var thueXuat = 0;
  var tienThuPhaiNop = 0;
  if (soNguoiPhuThuoc == "" || tongThuNhapNam == "") {
    alert("Vui lòng nhập thông tin ");
  } else {
    if (thuNhapChiuThue < 60000000) {
      xuatThongTin.innerHTML = "Không cần chịu thuế thu nhập cá nhân";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (thuNhapChiuThue == 60000000) {
      tienThuPhaiNop = thuNhapChiuThue * 0.05;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 5%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
      tienThuPhaiNop = thuNhapChiuThue * 0.1;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 10%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
      tienThuPhaiNop = thuNhapChiuThue * 0.15;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 15%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
      tienThuPhaiNop = thuNhapChiuThue * 0.2;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 20%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
      tienThuPhaiNop = thuNhapChiuThue * 0.25;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 25%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
      tienThuPhaiNop = thuNhapChiuThue * 0.3;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 30%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else {
      tienThuPhaiNop = thuNhapChiuThue * 0.35;
      xuatThongTin.innerHTML =
        "Tiền Thuế Phải nộp là " +
        tienThuPhaiNop.toLocaleString() +
        "với thuế suất là 35%";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    }
  }
}
