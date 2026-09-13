function tampilkanID() {
    // Ambil tempat kartu
    let data = document.getElementById("data");

    // Tampilkan kartu
    data.innerHTML = `
        <div class="kartu">
            <h2>Data Mahasiswa</h2>
            <p>Nama: Rio</p>
            <p>NIM: 8252520022 </p>
        </div>
    `;
}

function hapusID() {
    // Ambil kartu
    let data = document.getElementById("data");

    // Hapus kartu
    data.innerHTML = "";
}