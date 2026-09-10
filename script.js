// Fungsi untuk membuat persegi panjang ID
function buatID() {

    // Mengambil tempat untuk menampilkan ID
    const areaID = document.getElementById("areaID");

    // Mengecek apakah ID sudah dibuat
    if (document.getElementById("kartuID")) {
        alert("ID sudah dibuat!");
        return;
    }

    // Membuat elemen div baru
    const kartu = document.createElement("div");

    // Memberikan ID pada elemen yang dibuat
    kartu.id = "kartuID";

    // Memberikan class CSS pada elemen
    kartu.className = "kartu-id";

    // Mengisi isi persegi panjang dengan Nama dan NIM
    kartu.innerHTML = `
        <h2>IDENTITAS MAHASISWA</h2>
        <p><strong>Nama:</strong> Rio</p>
        <p><strong>NIM:</strong> 825250022</p>
    `;

    // Menampilkan persegi panjang ke halaman
    areaID.appendChild(kartu);
}


// Fungsi untuk menghapus persegi panjang ID
function hapusID() {

    // Mengambil elemen ID yang sudah dibuat
    const kartu = document.getElementById("kartuID");

    // Mengecek apakah ID tersedia
    if (kartu) {

        // Menghapus elemen ID
        kartu.remove();

    } else {

        // Menampilkan pesan jika ID belum dibuat
        alert("ID belum dibuat!");
    }
}