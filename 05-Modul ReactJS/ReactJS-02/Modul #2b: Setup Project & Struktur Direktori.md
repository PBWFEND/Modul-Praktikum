# Modul Praktikum ReactJS #02: Setup Project & Struktur Direktori 🚀

Pada modul praktikum sebelumnya, kita sudah belajar dasar-dasar Reactjs.

Namun, di sana kita hanya sebatas menggunakan `Reactjs` sebagai `library` dengan menyisipkan langsung ke `HTML` melalui `CDN`.

Ini tidak salah.

Hanya saja saat nanti kita membuat aplikasi besar, kita akan menemukan masalah.

Yakni:

Kesulitan mengelola source code, karena banyaknya kode. Mungkin anda bisa bayangkan, betapa berantakannya kode tersebut.

Karena itulah..

Kita harus membuat `project Reactjs.`

Gimana caranya?

Mari kita pelajari!

## Tujuan Praktikum

Setelah menyelesaikan modul ini, Anda diharapkan mampu:

- Memahami fungsi dan keunggulan Vite sebagai build tool.
- Membuat proyek React 18 baru dari awal menggunakan Vite.
- Menjalankan development server untuk melihat aplikasi React secara langsung di browser.
- Memahami struktur direktori dan fungsi dari setiap file penting dalam proyek React.
- Membangun aplikasi "Hello World" sederhana di React.

## Prasyarat

Sebelum memulai, pastikan `Node.js` dan `npm` sudah terinstal di komputer Anda. `Node.js` adalah lingkungan untuk menjalankan JavaScript di luar browser, dan `npm` adalah manajer paket yang ikut terinstal bersamanya.

Untuk menginstal Node.js dan npm, Anda dapat mengunduhnya melalui situs resmi Node.js di:

- [https://nodejs.org/en/download](https://nodejs.org/en/download)
  - Pilih versi `LTS (Long Term Support)` untuk stabilitas yang lebih baik. Versi `v22.16.0 (LTS)`.
  - Node.js akan menginstal `npm` secara otomatis saat proses instalasi selesai.

- Untuk Windows, pastikan Anda memilih opsi `"Add to PATH"` agar `npm` dapat dijalankan dari command prompt atau terminal.

Pada modul praktikum ini, saya menggunakan `Nodejs v23.5.0` dan `NPM v10.9.2.`   

Untuk memeriksa apakah keduanya sudah terinstal, buka terminal (Command Prompt, PowerShell, atau Terminal di Mac/Linux) dan jalankan perintah berikut:

```bash
node -v
npm -v
```
![1](img/Screenshot%202025-06-17%20at%2022.53.04.png)

## Langkah 1: Membuat Proyek React dengan Vite

[Vite](https://vite.dev) adalah _build tool_ generasi baru yang secara signifikan meningkatkan pengalaman pengembangan _frontend_. Untuk memulai proyek baru, kita tidak perlu menginstal apa pun secara global.

1. **Buka Terminal**
Buka aplikasi terminal pilihan Anda.

2. **Navigasi ke Direktori Kerja**
Pindahlah ke direktori tempat Anda ingin menyimpan semua proyek (misalnya, `Documents/Projects`).

```bash
# Contoh: Pindah ke folder Documents lalu membuat folder Projects
cd Documents
mkdir Projects
cd Projects
```
3. **Jalankan Perintah Pembuatan Proyek**
Gunakan perintah di bawah ini untuk memulai proses pembuatan proyek.

```bash
npm create vite@latest
```
4. **Konfigurasi Proyek Anda**

Vite akan mengajukan beberapa pertanyaan untuk mengonfigurasi proyek. Ikuti langkah-langkah berikut:

- **Project name**: Ketik nama proyek Anda (contoh: `latihan-react-vite`) lalu tekan Enter.

- **Select a framework**: Gunakan tombol panah untuk memilih React, lalu tekan Enter.

![2](img/Screenshot%202025-06-17%20at%2023.44.17.png)

- **Select a variant**: Pilih `JavaScript`. Ini adalah pilihan standar untuk memulai. Tekan Enter.

![3](img/Screenshot%202025-06-17%20at%2023.46.43.png)
---
![4](img/Screenshot%202025-06-17%20at%2023.48.05.png)

Vite akan secara otomatis membuatkan direktori proyek dengan template awal di dalamnya.

5. **Masuk ke Direktori Proyek dan Install Dependencies**

Setelah proyek selesai dibuat, jalankan dua perintah berikut secara berurutan:

```bash
# 1. Masuk ke dalam direktori proyek yang baru dibuat
cd latihan-react-vite

# atau bisa langsung drag folder project latihan-react-vite ke IDE VsCode 
# open terminal
# 2. Instal semua library yang dibutuhkan (react, react-dom, dll.)
npm install
```
![5](img/Screenshot%202025-06-18%20at%2000.33.42.png)

Perintah `npm install` akan membaca file `package.json` dan mengunduh semua paket yang tercantum di dalamnya ke dalam sebuah folder bernama `node_modules`.

## Langkah 2: Menjalankan Development Server

Setelah *semua dependencies terinstal*, saatnya menjalankan aplikasi React kita untuk pertama kalinya.

1. **Jalankan Development Server**

Pastikan Anda masih berada di dalam direktori proyek, lalu jalankan perintah:

```bash
npm run dev
```
![6](img/Screenshot%202025-06-18%20at%2000.36.28.png)

2. **Buka Browser**

Terminal akan menampilkan pesan bahwa server telah berjalan, beserta alamat URL-nya (biasanya `http://localhost:5173`).seperti pada gambar di atas. 

Buka alamat tersebut di web browser pilihan Anda.

Anda akan disambut dengan halaman awal dari aplikasi React + Vite. 

![6](img/Screenshot%202025-06-18%20at%2000.34.53.png)

Server ini sudah dilengkapi fitur `Hot Module Replacement (HMR)`, artinya setiap perubahan pada kode akan langsung terlihat di browser tanpa perlu refresh manual. Sangat cepat!

## Langkah 3: Memahami Struktur Direktori

Buka direktori proyek Anda di _code editor_ (seperti Visual Studio Code) untuk melihat isinya.

![7](img/Screenshot%202025-06-18%20at%2000.42.03.png)

Pada direktori tersebut, Anda akan menemukan beberapa file dan folder penting:

```bash
latihan-react-vite/
├── node_modules/     # Berisi semua library/paket pihak ketiga
├── public/           # Aset statis (gambar, ikon) yang tidak diproses oleh Vite
│   └── vite.svg
├── src/              # DIREKTORI UTAMA TEMPAT KITA BEKERJA
│   ├── assets/       # Aset yang perlu diproses (e.g., logo React)
│   │   └── react.svg
│   ├── App.css       # File styling khusus untuk komponen App
│   ├── App.jsx       # Komponen utama aplikasi (UI dan logika)
│   ├── index.css     # File styling global untuk seluruh aplikasi
│   └── main.jsx      # Titik masuk (entry point) aplikasi React
├── .gitignore        # Daftar file/folder yang akan diabaikan oleh Git
├── index.html        # Kerangka HTML utama. React akan 'disuntikkan' ke sini
├── package.json      # Metadata proyek & daftar dependencies
├── package-lock.json # Merekam versi pasti dari setiap paket yang diinstal
├── README.md         # Petunjuk penggunaan proyek
└── vite.config.js    # File konfigurasi untuk Vite
```
### Penjelasan File-file Penting
Berikut adalah file-file utama yang perlu Anda pahami:

1. **index.html**
   - File HTML tunggal dalam aplikasi
   - Memiliki elemen `<div id="root"></div>` sebagai mounting point
   - Tempat aplikasi React akan dirender

2. **src/main.jsx**
   - Entry point (titik masuk) aplikasi
   - Bertugas merender komponen utama `<App />` 
   - Menghubungkan React dengan elemen `#root` di index.html

3. **src/App.jsx**
   - Root component (komponen induk)
   - Container untuk komponen-komponen lainnya
   - Tempat utama untuk menulis logika dan tampilan aplikasi

4. **package.json**
   - Metadata proyek
   - Konfigurasi skrip (dev, build, dll)
   - Daftar dependencies dan devDependencies
   - Informasi versi aplikasi

## Kesimpulan

Sejauh ini kita telah berhasil:

- Membuat proyek React baru menggunakan Vite sebagai build tool
- Menjalankan development server untuk melihat aplikasi secara langsung
- Memahami struktur direktori dan file-file penting dalam proyek React

