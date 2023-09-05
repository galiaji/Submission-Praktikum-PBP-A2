// Nama: Fitra Syamli Yudhisaputra 
// NIM: 24060121140124 
// Lab: PBP A2 
// Deskripsi: File JS Form Tambah Produk 
// Tanggal:  02/09/2023 

function validasiForm() {
  //validasi Nama Produk tidak boleh kosong
  if (document.forms["formTambahProduk"]["name"].value == "") {
    alert("Silahkan isi nama produk Anda.");
    document.forms["formTambahProduk"]["name"].focus();
    return false;
  }
  //validasi Deskripsi Produk tidak boleh kosong
  if (document.forms["formTambahProduk"]["deskripsi"].value == "") {
    alert("Silahkan isi deskripsi produk Anda.");
    document.forms["formTambahProduk"]["deskripsi"].focus();
    return false;
  }
  //validasi Kategori tidak boleh kosong
  if (document.forms["formTambahProduk"]["kategori"].value == "") {
    alert("Silahkan pilih kategori produk Anda.");
    document.forms["formTambahProduk"]["kategori"].focus();
    return false;
  }
  //validasi sub-kategori tidak boleh kosong
  if (document.forms["formTambahProduk"]["sub_kategori"].value == "") {
    alert("Silahkan pilih sub-kategori produk Anda.");
    document.forms["formTambahProduk"]["sub_kategori"].focus();
    return false;
  }
  //validasi Harga Satuan tidak boleh kosong dan harus numerik
  if (document.forms["formTambahProduk"]["harga_satuan"].value == "") {
    alert("Silahkan pilih sub-kategori produk Anda.");
    document.forms["formTambahProduk"]["harga_satuan"].focus();
    return false;
  } else if (isNaN(document.forms["formTambahProduk"]["harga_satuan"].value)) {
    alert("Input harga satuan harus numerik.");
    document.forms["formTambahProduk"]["harga_satuan"].value = "";
    document.forms["formTambahProduk"]["harga_satuan"].focus();
    return false;
  }

  // validasi Grosir tidak boleh kosong
  let grosir = document.forms["formTambahProduk"]["grosir"];
  if (!grosir[0].checked && !grosir[1].checked) {
    alert("Pilih salah satu opsi grosir");
    return false;
  } else if (grosir[0].checked) { 
    if (document.forms["formTambahProduk"]["harga_grosir"].value == "") {
      alert("Silahkan isi harga grosir.");
      document.forms["formTambahProduk"]["harga_grosir"].focus();
      return false;
    }
  }
  // validasi Jasa Kirim, minimal pilih tiga Jasa Kirim
  let jasa_kirim = document.forms["formTambahProduk"]["jasa_kirim[]"];
  let selectedCount = 0;

  for (let i = 0; i < jasa_kirim.length; i++) {
    if (jasa_kirim[i].checked) {
      selectedCount++;
    }
  }

  if (selectedCount < 3) {
    alert("Silakan pilih minimal tiga Jasa Kirim.");
    return false;
  }

  // validasi captcha
  let captchaInput = document.forms["formTambahProduk"]["captcha_input"].value;
  if (captchaInput === "") {
    alert("Captcha harus diisi.");
    return false;
  } else if (captchaInput !== captchaGenerated) { // Membandingkan dengan captcha yang dihasilkan
    alert("Captcha yang Anda masukkan tidak sesuai.");
    return false;
  }

  //Berhasil submit
  alert("Semua data berhasil diisi. Form akan dikirim.");
  return true;
}

//Menambahkan opsi sub-kategori sesuai kategori yang dipilih
function getSubCategory() {
  let kategori = document.forms["formTambahProduk"]["kategori"].value;
  let sub_kategori_select = document.getElementById("sub_kategori");

  sub_kategori_select.innerHTML = "";

  switch (kategori) {
    case "Baju":
      sub_kategori_select.innerHTML =
        '<option value="">--Pilih sub kategori--</option>' +
        '<option value="Baju Pria">Baju Pria</option>' +
        '<option value="Baju Wanita">Baju Wanita</option>' +
        '<option value="Baju Anak">Baju Anak</option>';
      break;
    case "Elektronik":
      sub_kategori_select.innerHTML =
        '<option value="">--Pilih sub kategori--</option>' +
        '<option value="Mesin Cuci">Mesin Cuci</option>' +
        '<option value="Kulkas">Kulkas</option>' +
        '<option value="AC">AC</option>';
      break;
    case "Alat Tulis":
      sub_kategori_select.innerHTML =
        '<option value="">--Pilih sub kategori--</option>' +
        '<option value="Kertas">Kertas</option>' +
        '<option value="Map">Map</option>' +
        '<option value="Pulpen">Pulpen</option>';
      break;
    default:
      sub_kategori_select.innerHTML =
        '<option value="">Pilih sub kategori</option>';
      break;
  }
}

//validasi opsi grosir
function isAktif() {
  let yaGrosir = document.getElementById("ya");
  let inputHargaGrosir = document.getElementById("harga_grosir");

  // Jika "Ya Grosir" dipilih, aktifkan kolom harga grosir
  if (yaGrosir.checked) {
    inputHargaGrosir.disabled = false;

    // validasi grosir jika YA
    if (inputHargaGrosir.value === "") {
      alert("Harga grosir harus diisi jika pilihan opsi Ya!");
      inputHargaGrosir.focus();
      return false;
    } else if (isNaN(inputHargaGrosir.value)) {
      alert("Harga grosir harus berupa nilai numerik.");
      inputHargaGrosir.value = "";
      inputHargaGrosir.focus();
      return false;
    }
  } else {
    // Jika "Tidak" dipilih, nonaktifkan kolom harga grosir dan kosongkan nilainya
    inputHargaGrosir.disabled = true;
    inputHargaGrosir.value = "";
  }
}

//Generate Captcha
let captchaGenerated = ""; // Variabel global untuk menyimpan captcha yang dihasilkan

function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  captchaGenerated = "";
  
  for (let i = 0; i < 5; i++) {
    captchaGenerated += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  document.forms["formTambahProduk"]["captcha_text"].value = captchaGenerated;
}







