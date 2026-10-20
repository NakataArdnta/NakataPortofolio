/**
 * ====================================================================
 * CONFIG.JS - PUSAT PENGATURAN PORTFOLIO NAKATA ARDINATA
 * ====================================================================
 * Kamu bisa mengubah SEMUA informasi di website ini cukup dengan
 * mengedit isi variabel di bawah ini, tanpa perlu membongkar HTML/CSS!
 *
 * Tips:
 * - Teks diapit tanda kutip ("..." atau '...')
 * - Jika ingin mengosongkan link, cukup isi dengan "" (tanda kutip kosong)
 * - Simpan file ini setelah diedit, lalu refresh browser kamu.
 * ====================================================================
 */

window.PORTFOLIO_CONFIG = {
  // ------------------------------------------------------------------
  // 1. IDENTITAS DIRI & PENGATURAN UMUM
  // ------------------------------------------------------------------
  personal: {
    name: "Nakata Ardinata",
    username: "Nakata",
    role: "Tech Enthusiast & Aspiring Developer",
    location: "Indonesia",
    statusBadge: "Open to Collaborate & Learn",
    
    // Tagline utama di halaman Hero
    tagline: "Exploring Technology, Building Ideas.",
    
    // Subtitle pengantar di bawah tagline (bisa kamu edit sesuka hati)
    subtitle: "Tertarik pada web development, pemrograman modern, dan eksplorasi proyek digital untuk menciptakan solusi yang bermanfaat.",
    
    // Foto profil: bisa berupa path file lokal di folder assets/
    // Contoh: "assets/profile.svg" atau jika punya foto sendiri: "assets/profile.jpg"
    avatarUrl: "assets/profile.svg",
    
    // Inisial jika gambar gagal dimuat
    avatarInitials: "NA",
  },

  // ------------------------------------------------------------------
  // 2. TEMA & TAMPILAN
  // ------------------------------------------------------------------
  theme: {
    // Pilihan tema default saat pertama kali website dibuka: 'dark' atau 'light'
    defaultTheme: "dark",
    
    // Aktifkan animasi halus (true = aktif, false = nonaktif untuk performa ekstra)
    enableAnimations: true,
    
    // Ingat pilihan tema pengunjung di browser mereka
    saveToLocalStorage: true,
    
    // Warna aksen utama (bisa diganti dengan warna hex pilihan kamu)
    // Biru elektrik: #3b82f6 | Ungu modern: #8b5cf6 | Emerald: #10b981 | Cyan: #06b6d4
    accentColor: "#3b82f6",
  },

  // ------------------------------------------------------------------
  // 3. TENTANG SAYA (ABOUT ME)
  // ------------------------------------------------------------------
  about: {
    sectionTitle: "Tentang Saya",
    sectionBadge: "Perkenalan",
    
    // Cerita singkat tentang perjalanan belajar dan ketertarikanmu
    paragraphs: [
      "Halo! Saya Nakata Ardinata. Saya adalah seorang peminat teknologi yang memiliki rasa ingin tahu tinggi terhadap bagaimana teknologi dan perangkat lunak bekerja di balik layar.",
      "Fokus belajar saya saat ini adalah memahami dasar-dasar web development, logika pemrograman yang bersih, serta mengeksplorasi pembuatan aplikasi digital yang interaktif dan mudah digunakan.",
      "Bagi saya, setiap baris kode adalah kesempatan untuk belajar memecahkan masalah secara terstruktur dan menuangkan ide kreatif menjadi produk nyata."
    ],

    // Kartu informasi cepat yang bisa diedit
    quickFacts: [
      { label: "Nama Lengkap", value: "Nakata Ardinata" },
      { label: "Nama Panggilan", value: "Nakata" },
      { label: "Status", value: "Pelajar / Tech Enthusiast" },
      { label: "Domisili", value: "Indonesia" },
      { label: "Fokus Utama", value: "Web Development & Pemrograman" },
      { label: "Minat", value: "Frontend, Automation, Problem Solving" }
    ]
  },

  // ------------------------------------------------------------------
  // 4. KEAHLIAN / SKILLS
  // ------------------------------------------------------------------
  // Catatan: Tidak menggunakan progress bar persentase buatan.
  // Cukup sebutkan kategori dan fokus kemampuanmu secara jujur.
  skills: [
    {
      name: "HTML5",
      category: "Frontend",
      note: "Struktur semantik, aksesibilitas dasar & SEO",
      icon: "code"
    },
    {
      name: "CSS3",
      category: "Frontend",
      note: "Responsive layout, Flexbox, Grid, & animasi CSS",
      icon: "palette"
    },
    {
      name: "JavaScript",
      category: "Programming",
      note: "DOM manipulation, vanilla JS logic, ES6+",
      icon: "cpu"
    },
    {
      name: "PHP",
      category: "Backend",
      note: "Dasar alur backend, pemrosesan formulir & data",
      icon: "server"
    },
    {
      name: "Node.js",
      category: "Runtime",
      note: "Eksplorasi runtime JavaScript & automasi skrip",
      icon: "box"
    },
    {
      name: "Python",
      category: "Programming",
      note: "Scripting sederhana, logika algoritma & otomasi",
      icon: "terminal"
    }
  ],

  // ------------------------------------------------------------------
  // 5. PROJEK / PROJECTS
  // ------------------------------------------------------------------
  // Jika URL demo atau source code belum ada, cukup kosongkan ("")
  // Tombol akan otomatis berstatus dinonaktifkan tanpa membuat link palsu.
  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      description: "Website portfolio profesional yang dibangun dengan vanilla HTML, CSS murni, dan JavaScript. Dilengkapi tema dark/light mode dan sistem konfigurasi terpusat.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      demoUrl: "#home", // mengarah ke halaman ini sendiri
      sourceUrl: "",   // kosongkan jika repo belum dipublikasikan
      status: "Selesai"
    },
    {
      id: "whatsapp-bot",
      title: "WhatsApp Bot Automation",
      description: "Eksplorasi bot WhatsApp sederhana menggunakan JavaScript untuk pengiriman respon otomatis dan utilitas produktivitas sehari-hari.",
      tags: ["Node.js", "JavaScript", "Automation"],
      demoUrl: "",
      sourceUrl: "",
      status: "Eksplorasi"
    },
    {
      id: "simple-pos",
      title: "Simple Point of Sale (POS)",
      description: "Aplikasi kasir sederhana untuk mencatat data produk, menghitung transaksi penjualan, dan mencetak nota transaksi dasar.",
      tags: ["PHP", "JavaScript", "CSS"],
      demoUrl: "",
      sourceUrl: "",
      status: "Pengembangan"
    }
  ],

  // ------------------------------------------------------------------
  // 6. KONTAK & MEDIA SOSIAL
  // ------------------------------------------------------------------
  // Isi dengan akun atau URL milikmu. Kosongkan ("") jika belum ada.
  contact: {
    email: "valencianakata1447@gmail.com",
    github: "https://github.com",
    instagram: "",
    linkedin: "",
    message: "Tertarik untuk berdiskusi, berbagi ide, atau berkolaborasi dalam proyek pemrograman? Silakan hubungi saya melalui email atau media sosial."
  },

  // ------------------------------------------------------------------
  // 7. FOOTER
  // ------------------------------------------------------------------
  footer: {
    copyrightName: "Nakata Ardinata",
    caption: "Dibuat dengan HTML5, CSS3 murni & Vanilla JavaScript."
  }
};
