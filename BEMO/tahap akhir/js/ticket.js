function beliTiket() {
  const jenis = document.getElementById("jenisTiket").value;
  const jumlah = parseInt(document.getElementById("jumlahTiket").value);

  let harga = 0;

  if (jenis === "TMB") harga = 5000;
  else if (jenis === "Angkot") harga = 4000;
  else if (jenis === "Bandros") harga = 25000;
  else if (jenis === "Trans Jabar") harga = 15000;

  const total = harga * jumlah;

  document.getElementById("hasilTiket").innerHTML = `
    <div class="card" style="padding:16px;">
      <strong>🎉 Tiket Berhasil Dibeli</strong><br><br>

      Transportasi: ${jenis}<br>
      Jumlah: ${jumlah}<br>
      Harga per tiket: Rp ${harga}<br>
      <strong>Total: Rp ${total}</strong><br><br>

      <div style="text-align:center;">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${jenis}-${jumlah}-${total}" />
        <p>QR Tiket (Demo)</p>
      </div>

      <button onclick="alert('Tiket tersimpan!')">Simpan Tiket</button>
    </div>
  `;
}
