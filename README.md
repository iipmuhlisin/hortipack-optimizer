# 📲 HortiPack Optimizer v3.0 — PWA

Progressive Web App untuk optimasi desain kemasan corrugated box produk hortikultura.

## 📁 Struktur File

```
hortipack-pwa/
├── index.html              ← Aplikasi utama (single-file, ~68 KB)
├── manifest.json           ← PWA manifest (nama, ikon, tema)
├── sw.js                   ← Service Worker (offline caching)
├── icons/
│   ├── icon-192.png        ← Ikon app 192×192
│   ├── icon-512.png        ← Ikon app 512×512
│   ├── icon-maskable-512.png ← Ikon maskable (Android adaptive)
│   ├── icon-192.svg        ← Source SVG
│   └── icon-512.svg        ← Source SVG
└── README.md               ← File ini
```

## 🚀 Cara Deploy (Gratis) di GitHub Pages

### Langkah 1: Buat Repository GitHub
1. Buka https://github.com/new
2. Nama repository: `hortipack-optimizer` (atau nama lain)
3. Pilih **Public**
4. Klik **Create repository**

### Langkah 2: Upload File
1. Klik **"uploading an existing file"**
2. Drag & drop SEMUA file dari folder `hortipack-pwa/`
3. Pastikan struktur folder tetap sama (icons/ harus jadi subfolder)
4. Klik **Commit changes**

### Langkah 3: Aktifkan GitHub Pages
1. Buka **Settings** → **Pages**
2. Source: pilih **Deploy from a branch**
3. Branch: pilih **main** → **/ (root)**
4. Klik **Save**
5. Tunggu 1-2 menit

### Langkah 4: Akses Aplikasi
URL aplikasi: `https://[username].github.io/hortipack-optimizer/`

Contoh: `https://iip-ipb.github.io/hortipack-optimizer/`

## 📱 Cara Install di HP Android

### Metode 1: Langsung dari Browser Chrome
1. Buka URL aplikasi di Chrome Android
2. Tunggu beberapa detik → muncul tombol **"📲 Install App"** di pojok kanan bawah
3. Tap tombol tersebut → Tap **"Install"**
4. Aplikasi muncul di home screen seperti app native!

### Metode 2: Via Menu Chrome
1. Buka URL aplikasi di Chrome Android
2. Tap ikon ⋮ (titik tiga) di pojok kanan atas
3. Tap **"Install app"** atau **"Add to Home screen"**
4. Tap **"Install"**

### Metode 3: Install di Desktop (Chrome/Edge)
1. Buka URL aplikasi
2. Klik ikon install (⊕) di address bar
3. Klik **"Install"**

## 🏪 Cara Publish ke Google Play Store (Opsional)

### Prasyarat
- Google Play Developer Account ($25 sekali bayar)
- Node.js terinstall di komputer

### Langkah-langkah

```bash
# 1. Install Bubblewrap CLI (tool resmi Google)
npm install -g @nicolo-nicolo-nicolo/nicolo @nicolo-ribaudo/chokidar-2
npm install -g nicolo-ribaudo

# 2. Inisialisasi project dari manifest PWA
bubblewrap init --manifest https://USERNAME.github.io/hortipack-optimizer/manifest.json

# 3. Build AAB (Android App Bundle)
bubblewrap build

# 4. Upload file .aab ke Google Play Console
```

**Catatan:** Proses Play Store membutuhkan:
- Digital Asset Links file di hosting
- Android signing key (keystore)
- Google Play Developer Console setup ($25)

Panduan lengkap: cari **"PWA to Play Store using Bubblewrap"**

## ✅ Fitur PWA

| Fitur | Status |
|-------|--------|
| Offline Support | ✅ Bekerja tanpa internet |
| Install ke Home Screen | ✅ Seperti app native |
| Fullscreen Mode | ✅ Tanpa address bar |
| Auto-update | ✅ Banner update otomatis |
| Responsive | ✅ Desktop + Mobile |
| Dark Theme | ✅ Native dark mode |

## 🔧 Fitur Engineering v3.0

- **McKee BCT** dengan 5-stage correction chain
- **Respiration-driven ventilation** — target ventilasi dari laju respirasi produk
- **Creep factor** — koreksi waktu penyimpanan (1-90 hari)
- **Transport modes** — Manual, Truk, Kapal, Kereta
- **Stacking patterns** — Column vs Interlock
- **Burst strength analysis** — BST vs tekanan internal
- **Total Cost Index (TCI)** — biaya kemasan + biaya kerugian
- **Sensitivity analysis** — variasi ECT, berat, humidity, durasi, tumpukan
- **11 material** — Single/Double/Triple wall corrugated
- **21 preset produk** — Buah, sayur, kacang/biji

## 📄 Lisensi

© 2026 IPB University — Disertasi Doktoral
HortiPack Optimizer v3.0
