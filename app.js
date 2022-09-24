let menuSatu = "kopi hitam";
var menuDua = "susu jahe";
let menuTiga = "kopi susu";

const title1 = document.querySelector("#m1");
const title2 = document.querySelector("#m2");
const title3 = document.querySelector("#m3");

console.log(title1);

title1.textContent = menuSatu;
title2.textContent = menuDua;
title3.textContent = menuTiga;

//number
let hargaMenuSatu = 5000;
let hargaMenuDua = 6000;
let hargaMenuTiga = 8000;

//conditional

let status = "belum bayar";
let dibayarkan = 10000;

// if (dibayarkan >= hargaMenuSatu) {
//   status = "lunas";
// }
// console.log(status);
if (dibayarkan > hargaMenuSatu) {
  status = "dapat kembalian " + (dibayarkan - hargaMenuSatu);
} else if (dibayarkan < hargaMenuSatu) {
  status = "punya hutang " + (hargaMenuSatu - dibayarkan);
} else if (dibayarkan == hargaMenuSatu) {
  status = "lunas";
} else {
  status = "belum bayar sama sekali";
}

switch (status) {
  case "lunas":
    console.log("terima kasih");
    break;
  case "dapat kembalian " + (dibayarkan - hargaMenuSatu):
    console.log("silahkan ambil di kasir");
    break;

  default:
    console.log("silahkan bayar di kasir");
}

let stock = 0;

let buyAble = stock > 0 ? true : false;

// let qtyKopi = 0.5;

// console.log(hargaMenuSatu, qtyKopi);
// let kalimat = "harga " + menuSatu;
// //Boolean
// let sudahdiBayar = false;
// //undefined
// let menuEmpat;
// console.log(menuEmpat);
// //null
// let hargaMenuEmpat = null;
// console.log(hargaMenuEmpat);

// //operator aritmatika
// let totalPesanan = hargaMenuSatu + hargaMenuDua;
// console.log(totalPesanan);
// let dibayarkan = 10000;
// let kembalian = dibayarkan - hargaMenuSatu;
// console.log(kembalian);
// let qtyItem = 3;
// totalPesanan = hargaMenuSatu * qtyItem;
// console.log(totalPesanan);

// let test = 12 % 3; //0
// console.log(test);

// hargaMenuSatu += 2000;
// console.log(hargaMenuSatu);
