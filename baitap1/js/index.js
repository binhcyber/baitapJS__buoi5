// const khuVucA = "khuVucA";
// const khuVucB = "khuVucB";
// const khuVucC = "khuVucC";
// const khongThuocKhuVucUuTien = "khongThuocKhuVucUuTien";
// const doiTuong1 = "doiTuong1";
// const doiTuong2 = "doiTuong2";
// const doiTuong3 = "doiTuong3";
// const khongThuocDoiTuongUuTien = "khongThuocDoiTuongUuTien";

function diemKhuVucUuTien(khuVuc) {
  if (khuVuc === "khuVucA") {
    return 2;
  }
  if (khuVuc === "khuVucB") {
    return 1;
  }
  if (khuVuc === "khuVucC") {
    return 0.5;
  }
  if (khuVuc === "khongThuocKhuVucUuTien") {
    return 0;
  }
}
function diemDoiTuongUuTien(doiTuong) {
  if (doiTuong === "doiTuong1") {
    return 2;
  }
  if (doiTuong === "doiTuong2") {
    return 1;
  }
  if (doiTuong === "doiTuong3") {
    return 0.5;
  }
  if (doiTuong === "khongThuocDoiTuongUuTien") {
    return 0;
  }
}

function ketQua() {
  var xuatThongBao = document.getElementById("xuatThongBao");
  var doiTuongUuTienEle = document.querySelector(
    'input[name="doiTuong"]:checked'
  );
  if (doiTuongUuTienEle == null) {
    alert("Vui lòng chọn đối tượng ưu tiên");
  }
  var doiTuongUuTien = doiTuongUuTienEle.value;
  var diemThuocDoiTuongUuTienNe = diemDoiTuongUuTien(doiTuongUuTien);
  var khuVucUuTienEle = document.querySelector('input[name="khuVuc"]:checked');
  if (khuVucUuTienEle == null) {
    alert("Vui lòng chọn khu vực ưu tiên");
  }
  var khuVucUuTien = khuVucUuTienEle.value;
  var diemKhuVucUuTienNe = diemKhuVucUuTien(khuVucUuTien);
  var diemMonThu1Ele = document.getElementById("diemMonThu1");
  var diemMonThu1Value = diemMonThu1Ele.value * 1;
  var diemMonThu2Ele = document.getElementById("diemMonThu2");
  var diemMonThu2Value = diemMonThu2Ele.value * 1;
  var diemMonThu3Ele = document.getElementById("diemMonThu3");
  var diemMonThu3Value = diemMonThu3Ele.value * 1;
  if (
    diemMonThu1Value == "" ||
    diemMonThu2Value == "" ||
    diemMonThu3Value == ""
  ) {
    alert("Vui lòng nhập số điểm đầy đủ của 3 môn");
    return false;
  }
  var diemTrungBinhMon =
    diemMonThu1Value +
    diemMonThu2Value +
    diemMonThu3Value +
    diemKhuVucUuTienNe +
    diemThuocDoiTuongUuTienNe;
  console.log(diemTrungBinhMon);
  if (diemMonThu1Value == 0 || diemMonThu2Value == 0 || diemMonThu3Value == 0) {
    xuatThongBao.innerHTML = "Bạn bị rớt do bị điểm liệt của 1 trong ba môn";
    xuatThongBao.style.backgroundColor = "#ee9b00";
    xuatThongBao.style.color = "white";
  } else if (
    diemMonThu1Value > 10 ||
    diemMonThu2Value > 10 ||
    diemMonThu3Value > 10
  ) {
    alert("Nhập điểm đối đa là 10");
  } else {
    if (diemTrungBinhMon >= 15) {
      xuatThongBao.innerHTML =
        "Bạn đã đủ điểm tốt nghiệp với số điểm " + diemTrungBinhMon;
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else {
      xuatThongBao.innerHTML =
        "Bạn không đủ điểm tốt nghiệp với số điểm chỉ là " + diemTrungBinhMon;
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    }
  }
}
