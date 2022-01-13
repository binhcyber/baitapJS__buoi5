function tinhHoaDon() {
  var loaiHoaDonEle = document.querySelector('input[name="hoaDonCap"]:checked');
  if (loaiHoaDonEle == null) {
    alert("Vui lòng chọn loại hóa đơn Doanh Nghiệp hoặc Nhà Dân");
  }
  var loaiHoaDon = loaiHoaDonEle.value;
  var xuatThongBao = document.getElementById("xuatThongBao");
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  if (soKetNoi == "" && loaiHoaDon == "cn") {
    xuatThongBao.innerHTML = "Tồng tiền là: " + tongTienHoaDonNhaDan + " $";
    xuatThongBao.style.backgroundColor = "#ee9b00";
    xuatThongBao.style.color = "white";
  } else if (soKetNoi == "") {
    alert("Vui lòng nhập số kết nối");
    return;
  }
  var soKenhCaoCap = document.getElementById("soKenh").value * 1;
  if (soKenhCaoCap == "") {
    alert("Vui lòng nhập số kênh cao cấp");
    return;
  }

  // var soKenhCaoCap = soKenhCaoCapEle.value;
  var phiHoaDon = 4.5;
  var phiCoBanNhaDan = 20.5;
  var phiThueKenhCaoCap = soKenhCaoCap * 7.5;
  var tongTienHoaDonNhaDan = 0;
  var phiHoaDonDoanhNghiep = 15;
  var phiThueKenhCaoCap = soKenhCaoCap * 50;
  var tongHoaDonDoanhNghiep = 0;
  if (loaiHoaDon == "cn") {
    tongTienHoaDonNhaDan = phiHoaDon + phiCoBanNhaDan + phiThueKenhCaoCap;
    xuatThongBao.innerHTML = "Tồng tiền là: " + tongTienHoaDonNhaDan + " $";
    xuatThongBao.style.backgroundColor = "#ee9b00";
    xuatThongBao.style.color = "white";
    return;
  } else if (loaiHoaDon == "dn") {
    if (soKetNoi <= 10) {
      tongHoaDonDoanhNghiep =
        phiHoaDonDoanhNghiep + soKenhCaoCap * 50 + soKetNoi * 75;
      xuatThongBao.innerHTML = "Tồng tiền là: " + tongHoaDonDoanhNghiep + " $";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (soKetNoi > 10) {
      tongHoaDonDoanhNghiep =
        phiHoaDonDoanhNghiep +
        75 * 10 +
        (soKetNoi - 10) * 5 +
        soKenhCaoCap * 50;
      xuatThongBao.innerHTML = "Tồng tiền là: " + tongHoaDonDoanhNghiep + " $";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    }
  }
}
//DOM events onfocus onclick onmousedown
document.getElementById("dn").onclick = function () {
  document.getElementById("soKetNoi").disabled = false;
};
document.getElementById("cn").onfocus = function () {
  document.getElementById("soKetNoi").disabled = true;
};
