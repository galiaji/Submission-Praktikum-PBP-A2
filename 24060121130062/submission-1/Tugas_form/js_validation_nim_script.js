////////////////////////////////////////////////////////////////////
// File      : js_validation_nim.js		3/09/23
// Penulis   : Varrel / 24060121130062
// Deskripsi : Tugas pertemuan 1 mengenai implementasi JS dan DOM
////////////////////////////////////////////////////////////////////


// 1. fungsi untuk mengecek apakah nama terisi dengan benar
function validateNama() {
    const namaInput = document.getElementById('nama').value;
    if (namaInput.length < 5 || namaInput.length > 100) {
        alert('Nama Produk harus memiliki panjang antara 5 hingga 30 karakter.');
        return false;
    }
    return true;
}

// 2. fungsi untuk mengecek apakah deskripsi terisi dengan benar
function validateDesc() {
    const descInput = document.getElementById('deskripsi').value;
    if (descInput.length < 5 || descInput.length > 100) {
        alert('Deskripsi Produk harus memiliki panjang antara 5 hingga 100 karakter.');
        return false; // Mencegah pengiriman formulir jika tidak valid
    }
    return true;
}

// // 3. fungsi untuk mengecek apakah kategori terisi dengan benar
// function validateKat() {
//     const kategoriInput = document.getElementById('kategori').value;
//     const subKategoriInput = document.getElementById('subKategori').value;
//     if (kategoriInput === "" || subKategoriInput === "") {
//         alert('Harap pilih Kategori dan Sub Kategori yang valid.');
//         return false; // Mencegah pengiriman formulir jika tidak valid
//     }
//     return true;
// }

// 4. fungsi untuk memilih dropdown sub kategori yang sesuai dengan pilihan kategori
function updateSubKategori() {
    const kategoriSelect = document.getElementById('kategori');
    const subKategoriSelect = document.getElementById('subKategori');

    // Hapus semua opsi yang ada di dalam dropdown sub kategori
    subKategoriSelect.innerHTML = '';

    // Ambil nilai yang dipilih dalam dropdown kategori
    const selectedKategori = kategoriSelect.value;

    // Tambahkan opsi sub kategori berdasarkan kategori yang dipilih
    switch (selectedKategori) {
        case 'baju':
            subKategoriSelect.innerHTML = `
                    <option value="">--Pilih Sub Kategori--</option>
                    <option value="bajuPria">Baju Pria</option>
                    <option value="bajuWanita">Baju Wanita</option>
                    <option value="bajuAnak">Baju Anak</option>
                `;
            break;
        case 'elektronik':
            subKategoriSelect.innerHTML = `
                    <option value="">--Pilih Sub Kategori--</option>
                    <option value="mesinCuci">Mesin Cuci</option>
                    <option value="kulkas">Kulkas</option>
                    <option value="ac">AC</option>
                `;
            break;
        case 'alatTulis':
            subKategoriSelect.innerHTML = `
                    <option value="">--Pilih Sub Kategori--</option>
                    <option value="kertas">Kertas</option>
                    <option value="map">Map</option>
                    <option value="pulpen">Pulpen</option>
                `;
            break;
        default:
            // Default jika tidak ada kategori yang dipilih
            subKategoriSelect.innerHTML = '<option value="">--Pilih Kategori Dahulu--</option>';
            break;
    }
}

// 4.1. Tambahkan event listener ke dropdown kategori untuk mendeteksi perubahan nilai
const kategoriSelect = document.getElementById('kategori');
kategoriSelect.addEventListener('change', updateSubKategori);

// 4.2. Panggil fungsi updateSubKategori saat halaman dimuat (untuk mengatur default)
updateSubKategori();

// 5. Fungsi untuk mengatur input harga grosir berdasarkan pilihan grosir
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

// 5.1 Tambahkan event listener ke input radio "Ya" dan "Tidak" untuk mendeteksi perubahan nilai
const grosirYaInput = document.getElementById('grosirYa');
const grosirTidakInput = document.getElementById('grosirTidak');

grosirYaInput.addEventListener('change', toggleHargaGrosirInput);
grosirTidakInput.addEventListener('change', toggleHargaGrosirInput);

// 5.2 Panggil fungsi toggleHargaGrosirInput saat halaman dimuat (untuk mengatur default)
toggleHargaGrosirInput();

// 6. fungsi untuk mengecek apakah check box jasa kirim sudaa terisi minimal 3
function deRequireCb(elClass) {
    el = document.getElementsByClassName(elClass);

    var checkedCount = 0; // jumlah elemen yang memiliki checked bernilai true
    for (var i = 0; i < el.length; i++) {
        if (el[i].checked === true) {
            checkedCount++;
        }
    }

    for (var i = 0; i < el.length; i++) {
        el[i].required = false; // set default semua elemen tidak required
    }

    if (checkedCount >= 3) {
        // Jika minimal tiga elemen yang memiliki checked bernilai true
        for (var i = 0; i < el.length; i++) {
            el[i].required = false; // Set semua elemen menjadi tidak required
        }
    } else {
        // Jika kurang dari tiga elemen yang memiliki checked bernilai true
        for (var i = 0; i < el.length; i++) {
            el[i].required = true; // Set semua elemen menjadi required
        }
    }
}

// 7. Fungsi untuk meng-generate captcha
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

// 7.1. Panggil fungsi generateCaptcha saat halaman dimuat
window.addEventListener('load', generateCaptcha);

// 8. Fungsi untuk mengecek apakah captcha yang dimasukkan benar
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

// 9. fungsi untuk memberi alert ketika submit
function alertButton() {
    alert('Terima kasih sudah mengisi form ini.');
}