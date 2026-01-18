function pilihRute(jenis) {
  let info = "";

  if (jenis === "TMB") {
    info = `
      <strong>🚌 Rute TMB Bandung</strong><br><br>

      🔗 <a href="https://moovitapp.com/index/id/Tranportasi_Umum-lines-Bandung-4486-954424" target="_blank">
        Lihat detail jalur resmi di Moovit
      </a><br><br>

      <strong>Pilih Koridor:</strong><br><br>

      <button onclick="bukaMaps('Cicaheum Cibeureum Bandung')">
        Koridor 1: Cicaheum – Cibeureum
      </button><br><br>

      <button onclick="bukaMaps('Ledeng Cibiru Bandung')">
        Koridor 2: Ledeng – Cibiru
      </button><br><br>

      <button onclick="bukaMaps('Dago Antapani Bandung')">
        Koridor 3: Dago – Antapani
      </button><br><br>

      <button onclick="bukaMaps('Cikutra Kopo Bandung')">
        Koridor 4: Cikutra – Kopo
      </button><br><br>

      ⏱ Interval: 10–15 menit<br>
      💳 Tarif: Rp 5.000
    `;
  } 
  else if (jenis === "Bus Sekolah") {
    info = `
      <strong>🎓 Rute Bus Sekolah</strong><br><br>
      SMAN 3 → SMPN 1<br>
      ETA: 20 menit<br><br>
      <button onclick="bukaMaps('SMAN 3 Bandung')">Lihat di Maps</button>
    `;
  } 
  else if (jenis === "Bandros") {
    info = `
      <strong>🚌 Rute Bandros</strong><br><br>
      Kota Tua → Braga → Alun-alun<br>
      ETA: 40 menit<br>
      Tarif: Rp 25.000<br><br>
      <button onclick="bukaMaps('Braga Bandung')">Lihat Jalur Wisata</button>
    `;
  } 
  else if (jenis === "Angkot") {
    info = `
      <strong>🚕 Rute Angkot</strong><br><br>
      Ledeng – Alun-alun<br>
      ETA: 15 menit<br>
      Tarif: Rp 4.000<br><br>
      <button onclick="bukaMaps('Ledeng Bandung')">Lihat di Maps</button>
    `;
  }

  document.getElementById("hasilRute").innerHTML = `
    <div class="card" style="padding:16px;">
      ${info}
    </div>
  `;
}


// ================= BUKA GOOGLE MAPS =================

function bukaMaps(lokasi) {
  window.open(
    `https://www.google.com/maps/search/${encodeURIComponent(lokasi)}`,
    "_blank"
  );
}
