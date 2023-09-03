/**
 * Nama        : Mulya Irwansyah
 * NIM         : 24060121140110
 * Deskripsi   : Implementasi javascript dari Form Tambah Data Produk
*/ 

function showThankYouMessage() {
    alert("Terima Kasih Telah Mengisi Form :)");
}

function ValidateForm() {
    showThankYouMessage();
    return true;
}

// Fungsi untuk menampilkan subkategori yang sesuai berdasarkan kategori yang dipilih
function updateSubCategory() {
    var kategoriSelect = document.getElementById("kategori");
    var subKategoriSelect = document.getElementById("subkategori");
    var kategoriValue = kategoriSelect.value;

    // Hapus semua opsi subkategori
    subKategoriSelect.innerHTML = "";

    // Tambahkan opsi placeholder
    var placeholderOption = document.createElement("option");
    placeholderOption.text = "--Pilih Sub Kategori--";
    subKategoriSelect.appendChild(placeholderOption);

    if (kategoriValue === "Baju") {
        // Jika kategori Baju dipilih, tambahkan opsi subkategori yang sesuai
        var subKategoriOptions = ["Baju Pria", "Baju Wanita", "Baju Anak"];
        subKategoriOptions.forEach(function (option) {
            var subKategoriOption = document.createElement("option");
            subKategoriOption.value = option;
            subKategoriOption.text = option;
            subKategoriSelect.appendChild(subKategoriOption);
        });
    } else if (kategoriValue === "Elektronik") {
        // Jika kategori Elektronik dipilih, tambahkan opsi subkategori yang sesuai
        var subKategoriOptions = ["Mesin Cuci", "Kulkas", "AC"];
        subKategoriOptions.forEach(function (option) {
            var subKategoriOption = document.createElement("option");
            subKategoriOption.value = option;
            subKategoriOption.text = option;
            subKategoriSelect.appendChild(subKategoriOption);
        });
    } else if (kategoriValue === "Alat Tulis") {
        // Jika kategori Alat Tulis dipilih, tambahkan opsi subkategori yang sesuai
        var subKategoriOptions = ["Kertas", "Map", "Pulpen"];
        subKategoriOptions.forEach(function (option) {
            var subKategoriOption = document.createElement("option");
            subKategoriOption.value = option;
            subKategoriOption.text = option;
            subKategoriSelect.appendChild(subKategoriOption);
        });
    }
}

//Fungsi untuk mengatur input harga grosir berdasarkan pilihan grosir
function toggleHargaGrosirInput() {
    const grosirYaInput = document.getElementById('grosirYa');
    const hargaGrosirInput = document.getElementById('hargaGrosir');

    if (grosirYaInput.checked) {
        hargaGrosirInput.disabled = false; // Aktifkan input harga grosir jika "Ya" dipilih
        hargaGrosirInput.required = true; // Jadikan input harga grosir wajib diisi jika "Ya" dipilih
    } else {
        hargaGrosirInput.disabled = true; // Nonaktifkan input harga grosir jika "Tidak" dipilih
        hargaGrosirInput.required = false; // Buat input harga grosir tidak wajib diisi jika "Tidak" dipilih
    }
}

//Tambahkan event listener ke input radio "Ya" dan "Tidak" untuk mendeteksi perubahan nilai
const grosirYaInput = document.getElementById('grosirYa');
const grosirTidakInput = document.getElementById('grosirTidak');

grosirYaInput.addEventListener('change', toggleHargaGrosirInput);
grosirTidakInput.addEventListener('change', toggleHargaGrosirInput);


function generateCaptcha() {
    const captchaCodeInput = document.getElementById('captchaCode');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';

    // Generate captcha sepanjang 5 karakter
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }

    // Tampilkan captcha di input field
    captchaCodeInput.value = captcha;
}

//Panggil fungsi generateCaptcha saat halaman dimuat
window.addEventListener('load', generateCaptcha);

//Fungsi untuk mengecek apakah captcha yang dimasukkan benar
function validateCaptcha() {

    // Ambil nilai yang dimasukkan user
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaCodeInput = document.getElementById('captchaCode').value;

    // Cek apakah captcha yang dimasukkan benar
    if (captchaInput !== captchaCodeInput) {
        alert('Captcha yang dimasukkan salah.');
        return false; // Mencegah pengiriman formulir jika tidak valid
    }
    return true;
}