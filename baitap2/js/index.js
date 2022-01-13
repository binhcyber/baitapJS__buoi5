function tinhTienDien() {
  var soKw = document.getElementById("soKw").value * 1;
  var xuatThongBao = document.getElementById("xuatThongTin");
  const gia50Kwdau = 500;
  const gia50Kwsau = 650;
  const gia100Kwke = 850;
  const gia150Kwke = 1100;
  const giaConLai = 1300;
  var tiendien = 0;

  if (soKw == "") {
    alert("Vui lòng nhập số kw điện ");
  } else {
    if (soKw <= 50) {
      tiendien = soKw * gia50Kwdau;
      xuatThongBao.innerHTML =
        "Số tiền điện là " + tiendien.toLocaleString() + "VND";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (soKw > 50 && soKw <= 100) {
      tiendien = 50 * gia50Kwdau + (soKw - 50) * gia50Kwsau;
      xuatThongBao.innerHTML =
        "Số tiền điện là " + tiendien.toLocaleString() + " VND";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (soKw > 100 && soKw <= 200) {
      tiendien = 50 * gia50Kwdau + 50 * gia50Kwsau + (soKw - 100) * gia100Kwke;
      xuatThongBao.innerHTML =
        "Số tiền điện là " + tiendien.toLocaleString() + " VND";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else if (soKw > 200 && soKw <= 350) {
      tiendien =
        50 * gia50Kwdau +
        50 * gia50Kwsau +
        100 * gia100Kwke +
        (soKw - 200) * gia150Kwke;
      xuatThongBao.innerHTML =
        "Số tiền điện là " + tiendien.toLocaleString() + " VND";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    } else {
      tiendien =
        50 * gia50Kwdau +
        50 * gia50Kwsau +
        100 * gia100Kwke +
        100 * gia100Kwke +
        150 * gia150Kwke +
        (soKw - 450) * giaConLai;
      xuatThongBao.innerHTML =
        "Số tiền điện là " + tiendien.toLocaleString() + " VND";
      xuatThongBao.style.backgroundColor = "#ee9b00";
      xuatThongBao.style.color = "white";
    }
  }
}
