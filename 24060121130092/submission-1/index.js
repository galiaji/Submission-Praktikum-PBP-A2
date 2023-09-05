// using alert as an error message
function validateForm(){
    if (document.getElementById("NamaProduk").value == "") {
        alert("Nama produk harus diisi");
        document.forms["formDataProduk"]["NamaProduk"].focus();
        return false;
    }
    if (document.forms["formDataProduk"]["DeskripsiProduk"].value == "") {
        alert("Deskripsi Produk harus diisi");
        document.forms["formDataProduk"]["DeskripsiProduk"].focus();
        return false;
    }
    if (document.forms["formDataProduk"]["kategori"].value == "") {
        alert("Pilih Category");
        document.forms["formDataProduk"]["kategori"].focus();
        return false;
    }
    if (document.forms["formDataProduk"]["categoryselect"].value == "") {
        alert("Pilih Sub Category");
        document.forms["formDataProduk"]["categoryselect"].focus();
        return false;
    }
    if (document.getElementById("hargasatuan").value == "") {
        alert("Masukkan Harga Satuan");
        document.forms["formDataProduk"]["hargasatuan"].focus();
        return false;
    }
    if (document.forms["formDataProduk"]["grosir"].value == "") {
        alert("Pilih Grosir");
        return false;
    }
    if (document.getElementById("HargaGrosir").disabled == false && document.forms["formDataProduk"]["HargaGrosir"].value == "") {
        alert("Masukkan Harga Grosir");
        return false;
    }
    var jasa = document.forms["formDataProduk"]["section"];
    var sum = 0;
    for (let i = 0; i < jasa.length; i++) {
        if (jasa[i].checked == true) {
            sum++;
        }
    }
    if (sum < 3) {
        alert("Minimal 3 jasa terpilih");
        return false;
    }
    if (document.forms["formDataProduk"]["Captcha"].value == "") {
        alert("Input Captcha");
        return false;
    }

    if (document.forms["formDataProduk"]["Captcha"].value != document.forms["formDataProduk"]["maincaptcha"].value) {
        alert("Captcha Incorrect");
        return false;
    }
    return true;
}

//Grosir validation
function enable() {
    var yes = document.getElementById("Ya")
    var grosir = document.getElementById("HargaGrosir")
    grosir.disabled = yes.checked ? false : true;
    if (!grosir) { grosir.focus(); }
}

//Subcategory
var SubKategori = {
    Baju: ["Baju Pria", "Baju Wanita", "Baju Anak"],
    Elektronik: ["Mesin Cuci", "Kulkas", "AC"],
    AlatTulis: ["Kertas", "Map", "Pulpen"]
}
function SubCategory(value) {
    var categoryselect = document.getElementById("categoryselect");
    categoryselect.innerHTML = ""; // Clear previous options

    if (value.length == 0) {
        categoryselect.innerHTML = "<option></option>";
    } else {
        for (var i = 0; i < SubKategori[value].length; i++) {
            var option = document.createElement("option");
            option.text = SubKategori[value][i];
            categoryselect.add(option);
        }
    }
}

function generateCaptcha() {
    var captchaText = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      captchaText += characters.charAt(randomIndex);
    }
    document.forms["formDataProduk"]["maincaptcha"].value = captchaText;
  }