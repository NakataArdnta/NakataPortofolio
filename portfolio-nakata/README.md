# Personal Portfolio - Nakata Ardinata

Website personal portfolio modern, minimalis, ringan, dan elegan yang dibuat murni menggunakan **HTML5**, **CSS3**, dan **Vanilla JavaScript**. Website ini dirancang agar dapat langsung dibuka di browser tanpa perlu server, database, dependensi npm, ataupun proses build yang rumit.

---

## 📁 Struktur File & Folder

```text
portfolio-nakata/
├── index.html         # Struktur semantik website (Hero, About, Skills, Projects, Contact, Footer)
├── style.css          # Styling CSS3 murni, CSS variables, dark/light mode, animasi & responsivitas
├── script.js          # Logika vanilla JS: rendering data, theme toggle, copy email, navigasi mobile
├── config.js          # PUSAT PENGATURAN: Ubah semua isi teks, foto, skill, & projek di sini!
├── README.md          # Panduan lengkap penggunaan dan kustomisasi
└── assets/
    └── profile.svg    # Placeholder foto profil berformat vektor (bisa diganti foto sendiri)
```

---

## 🚀 Cara Menjalankan Website di Windows

### Cara 1: Langsung Dobel Klik (Paling Mudah, Tanpa Install Apapun)
1. Buka folder `portfolio-nakata` di Windows Explorer.
2. Cari file `index.html`.
3. Dobel klik file `index.html` (atau klik kanan > **Open with** > pilih **Google Chrome**, **Microsoft Edge**, atau **Mozilla Firefox**).
4. Website langsung terbuka dan berfungsi penuh!

### Cara 2: Menggunakan Visual Studio Code & Live Server (Rekomendasi saat Belajar)
1. Buka aplikasi **VS Code**.
2. Klik menu **File** > **Open Folder...** > pilih folder `portfolio-nakata`.
3. Pasang ekstensi **Live Server** (oleh *Ritwick Dey*) dari tab Extensions (`Ctrl + Shift + X`).
4. Klik kanan pada file `index.html`, lalu pilih **Open with Live Server**.
5. Browser akan terbuka otomatis dan halaman akan ter-refresh sendiri setiap kali Anda menyimpan perubahan kode.

---

## 🎨 Panduan Kustomisasi Lengkap Melalui `config.js`

Semua data di website ini terpusat di dalam file **`config.js`**. Anda **tidak perlu** repot mengutak-atik kode HTML atau CSS untuk mengubah konten!

Buka file `config.js` dengan editor teks favorit Anda (Notepad, VS Code, dll.), lalu sesuaikan bagian-bagian berikut:

### 1. Mengganti Nama, Tagline, dan Status
Cari bagian `personal:`:
```javascript
personal: {
  name: "Nakata Ardinata",                       // Nama lengkap Anda
  username: "Nakata",                             // Nama di logo kiri atas
  role: "Tech Enthusiast & Aspiring Developer",
  location: "Indonesia",
  statusBadge: "Open to Collaborate & Learn",     // Teks badge status di atas nama
  tagline: "Exploring Technology, Building Ideas.", // Kalimat utama di Hero
  subtitle: "Tuliskan kalimat perkenalan Anda di sini...",
  avatarUrl: "assets/profile.svg",                // File foto profil Anda
}
```

### 2. Mengganti Foto Profil
1. Siapkan foto profil Anda (format `.jpg` atau `.png`).
2. Beri nama file tersebut misalnya `profile.jpg`.
3. Masukkan file tersebut ke dalam folder `assets/` (sehingga menjadi `assets/profile.jpg`).
4. Buka `config.js`, ubah baris:
   ```javascript
   avatarUrl: "assets/profile.jpg",
   ```
5. Simpan file dan refresh browser. Foto profil baru akan langsung tampil!

### 3. Mengatur Tema & Warna Aksen
Cari bagian `theme:` di `config.js`:
```javascript
theme: {
  defaultTheme: "dark",      // Pilihan: "dark" atau "light"
  enableAnimations: true,    // true = aktif, false = matikan animasi
  saveToLocalStorage: true,  // Menyimpan preferensi tema pengunjung
  accentColor: "#3b82f6",    // Ganti kode warna hex (contoh: #8b5cf6 untuk ungu)
}
```

### 4. Mengubah Cerita Diri (About Me)
Cari bagian `about:` di `config.js`. Anda dapat mengubah cerita dan kotak fakta singkat:
```javascript
about: {
  paragraphs: [
    "Paragraf pertama tentang siapa Anda...",
    "Paragraf kedua tentang minat teknologi dan apa yang sedang Anda pelajari...",
    "Paragraf ketiga tentang tujuan atau harapan Anda..."
  ],
  quickFacts: [
    { label: "Nama Lengkap", value: "Nakata Ardinata" },
    { label: "Status", value: "Pelajar / Tech Enthusiast" },
    { label: "Domisili", value: "Indonesia" },
    { label: "Minat", value: "Web Development, Coding, Otomasi" }
  ]
}
```

### 5. Menambah, Mengubah, atau Menghapus Skill
Cari bagian `skills:` di `config.js`:
```javascript
skills: [
  {
    name: "HTML5",
    category: "Frontend",
    note: "Struktur semantik & aksesibilitas dasar",
    icon: "code" // Pilihan ikon: "code", "palette", "cpu", "server", "box", "terminal"
  },
  // Tambah skill baru dengan format yang sama:
  {
    name: "Git & GitHub",
    category: "Tools",
    note: "Version control & manajemen repositori",
    icon: "terminal"
  }
]
```

### 6. Menambah atau Mengubah Projek
Cari bagian `projects:` di `config.js`:
```javascript
projects: [
  {
    id: "projek-saya",
    title: "Nama Projek Anda",
    description: "Jelaskan fungsi projek dan masalah apa yang dipecahkan...",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://link-demo-kamu.com", // Kosongkan ("") jika belum ada link demo
    sourceUrl: "https://github.com/...",    // Kosongkan ("") jika belum ada repositori publik
    status: "Selesai"                      // Contoh: Selesai, Pengembangan, atau Eksplorasi
  }
]
```
> **Catatan Keamanan & Kejujuran:** Jika `demoUrl` atau `sourceUrl` Anda kosongkan `""`, tombol akan otomatis nonaktif dengan tampilan bersih sehingga Anda tidak perlu membuat tautan palsu.

### 7. Mengatur Email dan Sosial Media
Cari bagian `contact:` di `config.js`:
```javascript
contact: {
  email: "emailanda@example.com",          // Akan otomatis muncul di tombol salin & kirim pesan
  github: "https://github.com/username",   // Kosongkan ("") jika belum ada
  instagram: "https://instagram.com/...",  // Kosongkan ("") jika tidak ingin ditampilkan
  linkedin: "",                           // Kosongkan ("") jika belum ada
  message: "Pesan ajakan berdiskusi atau kolaborasi..."
}
```

---

## 🌟 Fitur Utama Website

1. **Desain Minimalis Modern**: Tampilan bersih, aksen biru elektrik dan ungu, tipografi elegan, serta card dengan rounded corners.
2. **Dark Mode & Light Mode**: Dilengkapi tombol peralihan tema dengan penyimpanan otomatis di `localStorage`.
3. **Pusat Pengaturan `config.js`**: Seluruh data dinamis diubah dari satu file tanpa mengedit tag HTML.
4. **Tombol Salin Email Interaktif**: Pengunjung dapat menyalin alamat email ke clipboard dalam satu klik dengan indikator umpan balik visual "Tersalin!".
5. **Responsif Sepenuhnya**: Tampilan tertata rapi di layar ponsel pintar (smartphone), tablet, laptop, dan monitor desktop.
6. **Navigasi Sticky & Menu Hamburger**: Navigasi selalu mudah diakses, dilengkapi menu drawer animasi untuk perangkat mobile.
7. **Aksesibel & Ringan**: Mendukung navigasi keyboard (`focus-visible`), `prefers-reduced-motion` untuk kenyamanan visual, dan nol dependensi eksternal yang memberatkan.
8. **Jujur & Otentik**: Tanpa persentase keahlian buatan dan tanpa link palsu.

---

## 📄 Lisensi
Hak cipta © 2026 Nakata Ardinata. Dibuat untuk keperluan personal portfolio profesional.
