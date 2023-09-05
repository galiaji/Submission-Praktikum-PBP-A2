function updateSubKategori() {
  var kategoriSelect = document.getElementById("fcat");
  var subKategoriSelect = document.getElementById("fsubcat");

  while (subKategoriSelect.options.length > 0) {
    subKategoriSelect.remove(0);
  }

  var kategori = kategoriSelect.value;
  var subKategoriOptions = [];

  switch (kategori) {
    case "Baju":
      subKategoriOptions = ["Baju Pria", "Baju Wanita", "Baju Anak"];
      break;
    case "Elektronik":
      subKategoriOptions = ["Mesin Cuci", "Kulkas", "AC"];
      break;
    case "Alat Tulis":
      subKategoriOptions = ["Kertas", "Map", "Pulpen"];
      break;
  }

  for (var i = 0; i < subKategoriOptions.length; i++) {
    var option = document.createElement("option");
    option.text = subKategoriOptions[i];
    option.value = subKategoriOptions[i];
    subKategoriSelect.appendChild(option);
  }

  if (kategori !== "--Pilih Kategori--") {
    subKategoriSelect.setAttribute("required", "required");
  } else {
    subKategoriSelect.removeAttribute("required");
  }
}

function generateCaptcha() {
  var captcha = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
  }

  return captcha;
}

function initializeCaptcha() {
  var captchaText = generateCaptcha();
  var captchatextInput = document.getElementById("fcaptchatext");

  captchatextInput.value = captchaText;
}

function validateCaptcha() {
  var userCaptcha = document.getElementById("fcaptchaanswer").value;
  var generatedCaptcha = document.getElementById("fcaptchatext").value;

  if (userCaptcha.toLowerCase() === generatedCaptcha.toLowerCase()) {
    return true;
  } else {
    alert("Captcha tidak sesuai. Silakan coba lagi.");
    return false;
  }
}

window.addEventListener("load", initializeCaptcha);

var form = document.forms["form"];
form.addEventListener("submit", function (event) {
  if (!validateCaptcha()) {
    event.preventDefault();
  }
});

function validateForm(event) {
  event.preventDefault();

  var namaProduk = document.forms["form"]["fname"].value;
  var deskripsiProduk = document.forms["form"]["fdesc"].value;
  var hargaSatuan = document.forms["form"]["fprice"].value;
  var grosirRadioYes = document.getElementById("fwholesalesYes");
  var hargaGrosir = document.forms["form"]["fwholeprice"].value;
  var jasaKirimCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  var kategoriSelect = document.getElementById("fcat");
  var subKategoriSelect = document.getElementById("fsubcat");

  var captchaIsValid = validateCaptcha();

  document.getElementById("errName").innerHTML = "";
  document.getElementById("errDesc").innerHTML = "";

  if (namaProduk.length < 5 || namaProduk.length > 30) {
    document.getElementById("errName").innerHTML =
      "Nama Produk harus diisi, minimal 5 karakter, maksimal 30 karakter";
    return false;
  }

  if (deskripsiProduk.length < 5 || deskripsiProduk.length > 100) {
    document.getElementById("errDesc").innerHTML =
      "Deskripsi harus diisi, minimal 5 karakter, maksimal 100 karakter";
    return false;
  }

  if (kategoriSelect.value === "" || subKategoriSelect.value === "") {
    alert("Kategori dan Sub Kategori harus dipilih");
    return false;
  }

  if (grosirRadioYes.checked && hargaGrosir.trim() === "") {
    alert("Harga Grosir harus diisi jika Grosir: Ya");
    return false;
  }

  if (jasaKirimCheckboxes.length < 3) {
    alert("Pilih minimal 3 opsi Jasa Kirim");
    return false;
  }

  if (!captchaIsValid) {
    alert("Captcha tidak sesuai. Silakan coba lagi.");
    return false;
  }

  alert("Form berhasil direkam!");
  window.location.reload();
  return true;
}
