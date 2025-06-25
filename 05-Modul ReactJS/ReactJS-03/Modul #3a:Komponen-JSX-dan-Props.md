# Komponen, JSX, dan Props 📦

## Daftar Isi 📑

- [Komponen, JSX, dan Props 📦](#komponen-jsx-dan-props-)
  - [Daftar Isi 📑](#daftar-isi-)
  - [**1. Komponen Fungsional: Membangun Blok UI yang Dapat Digunakan Kembali**](#1-komponen-fungsional-membangun-blok-ui-yang-dapat-digunakan-kembali)
    - [✅ Aturan Dasar Komponen Fungsional:](#-aturan-dasar-komponen-fungsional)
  - [**2. JSX: HTML dalam JavaScript, Tapi Lebih Pintar**](#2-jsx-html-dalam-javascript-tapi-lebih-pintar)
    - [🔹 Aturan 1: Harus Mengembalikan Satu Elemen Induk](#-aturan-1-harus-mengembalikan-satu-elemen-induk)
      - [✅ Solusi:](#-solusi)
    - [🔹 Aturan 2: Gunakan `{}` untuk Menyisipkan JavaScript](#-aturan-2-gunakan--untuk-menyisipkan-javascript)
  - [**3. Props: Menjalin Komunikasi Antar Komponen 🎁**](#3-props-menjalin-komunikasi-antar-komponen-)
    - [🧩 Membuat Komponen dengan Props](#-membuat-komponen-dengan-props)
    - [🧩 Mengirim Props dari Komponen Induk](#-mengirim-props-dari-komponen-induk)
    - [🛠️ Praktik Terbaik: Destructuring Props](#️-praktik-terbaik-destructuring-props)
  - [💼 Latihan Praktikum: Membangun Komponen Profil](#-latihan-praktikum-membangun-komponen-profil)
    - [🎯 Tujuan:](#-tujuan)
    - [📌 Instruksi:](#-instruksi)
  - [🧠 Ringkasan](#-ringkasan)
    - [🧠 Tugas](#-tugas)
- [🚀 **Apa Selanjutnya?**](#-apa-selanjutnya)
- [🚀 **Apa Materi Selanjutnya?**](#-apa-materi-selanjutnya)
- [📚 Referensi](#-referensi)


Setelah mempelajari teori dasar di modul sebelumnya, kini saatnya kita mendalami tiga fondasi utama dalam pengembangan aplikasi menggunakan [React](https://id.react.dev/learn/passing-props-to-a-component). Ketiganya menjadi elemen krusial yang membentuk struktur dan alur kerja React:

1. **Komponen Fungsional** – Dasar pembentuk antarmuka yang dapat digunakan kembali.
2. **JSX** – Sintaks perluasan JavaScript yang memungkinkan kita menulis struktur HTML secara langsung dalam JavaScript.
3. **Props** – Mekanisme pengiriman data antar komponen, memungkinkan UI menjadi lebih fleksibel dan dinamis.

## **1. Komponen Fungsional: Membangun Blok UI yang Dapat Digunakan Kembali**

Dalam ekosistem React, sebuah *komponen* dapat dipahami sebagai unit fungsional yang menyusun antarmuka pengguna. Secara teknis, komponen React merupakan **fungsi JavaScript** yang menerima input berupa `props` dan menghasilkan keluaran berupa elemen UI.

![1](img/Screenshot%202025-06-25-01.png)
*Gambar: Representasi alur data pada komponen React—props sebagai input, elemen UI sebagai output*

### ✅ Aturan Dasar Komponen Fungsional:

* Dituliskan sebagai fungsi JavaScript biasa.
* Nama fungsi **harus diawali huruf kapital** (misalnya `Tombol`, bukan `tombol`).
* Fungsi ini harus **mengembalikan** (return) satu elemen UI dalam bentuk JSX.

Contoh:

```javascript
function Salam() {
  return <h1>Halo, selamat datang di React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Salam />);
```

Pada contoh di atas:

* `Salam` adalah komponen kita.
* `return <h1>...</h1>` adalah elemen yang akan dirender.
* `<Salam />` adalah cara pemanggilan komponennya, serupa dengan tag HTML.

---

## **2. JSX: HTML dalam JavaScript, Tapi Lebih Pintar**

JSX adalah sintaks unik yang memungkinkan kita menulis struktur antarmuka seperti HTML langsung dalam JavaScript. Meski terlihat seperti HTML, JSX sebenarnya akan dikompilasi menjadi JavaScript murni.

### 🔹 Aturan 1: Harus Mengembalikan Satu Elemen Induk

JSX hanya dapat merender satu elemen root. Contoh berikut akan menyebabkan error:

```javascript
// ❌ Salah
function Biodata() {
  return (
    <h2>Nama: Budi</h2>
    <p>Umur: 25</p>
  );
}
```

#### ✅ Solusi:

Bungkus elemen dengan `div` atau gunakan **Fragment (`<>...</>`)**:

```javascript
function Biodata() {
  return (
    <div>
      <h2>Nama: Budi</h2>
      <p>Umur: 25</p>
    </div>
  );
}
```

Atau, versi yang lebih bersih:

```javascript
function ProfilLengkap() {
  return (
    <>
      <h1>Profil Pengguna</h1>
      <Biodata />
    </>
  );
}
```

### 🔹 Aturan 2: Gunakan `{}` untuk Menyisipkan JavaScript

Kekuatan JSX terletak pada kemampuannya menyisipkan ekspresi JavaScript langsung ke dalam markup dengan kurung kurawal `{}`.

```javascript
function InfoAplikasi() {
  const namaAplikasi = "Aplikasi Belajar React";
  const tahun = new Date().getFullYear();

  return (
    <>
      <h1>{namaAplikasi}</h1>
      <p>Hak cipta © {tahun}</p>
      <p>Hasil dari 5 x 5 adalah {5 * 5}</p>
    </>
  );
}
```

## **3. Props: Menjalin Komunikasi Antar Komponen 🎁**

Komponen `Salam` tadi masih statis. Lalu bagaimana jika kita ingin menyapa nama yang berbeda? Di sinilah **props** berperan.

> Props (*properties*) adalah cara mengirim data dari **komponen induk** ke **komponen anak**, mirip dengan atribut pada HTML.

### 🧩 Membuat Komponen dengan Props

```javascript
function KartuUcapan(props) {
  return (
    <div className="kartu">
      <h2>Halo, {props.nama}!</h2>
      <p>{props.pesan}</p>
    </div>
  );
}
```

### 🧩 Mengirim Props dari Komponen Induk

```javascript
function App() {
  return (
    <div>
      <h1>Daftar Ucapan</h1>
      <KartuUcapan nama="Andi" pesan="Selamat belajar React!" />
      <KartuUcapan nama="Citra" pesan="Semoga harimu menyenangkan!" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Props membuat komponen menjadi **dinamis** dan **reusable**. Kita bisa mengubah isinya hanya dengan mengganti nilainya dari komponen induk.

### 🛠️ Praktik Terbaik: Destructuring Props

Menuliskan `props.nama` dan `props.pesan` berulang bisa melelahkan. Solusinya: gunakan *destructuring* langsung di parameter fungsi.

```javascript
function KartuUcapan({ nama, pesan }) {
  return (
    <div className="kartu">
      <h2>Halo, {nama}!</h2>
      <p>{pesan}</p>
    </div>
  );
}
```

Lebih ringkas, lebih elegan, dan mudah dibaca.

## 💼 Latihan Praktikum: Membangun Komponen Profil

Saatnya Anda mencoba langsung!

### 🎯 Tujuan:

Membuat aplikasi React sederhana yang menampilkan kartu profil pengguna.

### 📌 Instruksi:

1. Buat komponen `ProfilPengguna` dengan tiga props: `gambar`, `nama`, dan `pekerjaan`.
2. Tampilkan kontennya secara rapi menggunakan HTML dan CSS.
3. Gunakan komponen `App` untuk menampilkan minimal tiga profil berbeda.
4. Render `App` ke dalam elemen dengan `id="root"`.

> Mari kita mulai dengan membuat file HTML baru bernama `modul-03.html`, kemudian isi dengan struktur awal seperti di modul sebelumnya (termasuk React, ReactDOM, dan Babel via CDN).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modul 03: Latihan</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body { font-family: sans-serif; display: flex; gap: 20px; padding: 20px; }
        .kartu-profil {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            text-align: center;
            width: 200px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .kartu-profil img { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; }
        .kartu-profil h3 { margin: 10px 0 5px 0; }
        .kartu-profil p { margin: 0; color: #555; }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // TULIS KODE ANDA DI SINI
        // 1. Buat komponen ProfilPengguna
        // 2. Buat komponen App
        // 3. Render komponen App

        // --- Contoh Solusi ---
        function ProfilPengguna({ gambar, nama, pekerjaan }) {
            return (
                <div className="kartu-profil">
                    <img src={gambar} alt={"Foto " + nama} />
                    <h3>{nama}</h3>
                    <p>{pekerjaan}</p>
                </div>
            );
        }

        function App() {
            return (
                <>
                    <ProfilPengguna 
                        gambar="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" 
                        nama="Jane Doe" 
                        pekerjaan="Frontend Developer" />
                    <ProfilPengguna 
                        gambar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" 
                        nama="John Smith" 
                        pekerjaan="Backend Engineer" />
                    <ProfilPengguna 
                        gambar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" 
                        nama="Sarah Wilson" 
                        pekerjaan="UI/UX Designer" />
                </>
            );
        }
        
        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<App />);

    </script>
</body>
</html>
```

## 🧠 Ringkasan

Dalam praktikum ini, Anda telah:

Membuat komponen fungsional yang modular.
Menulis markup dengan JSX, lengkap dengan ekspresi JavaScript.
Mengirimkan data ke komponen menggunakan props untuk menciptakan UI yang fleksibel dan dinamis.
Membuat aplikasi sederhana menggunakan kombinasi komponen, JSX, dan props.

### 🧠 Tugas

1. Buatlah tiga profil pengguna dengan gambar, nama, dan hobi masing-masing.
2. Terapkan styling minimal untuk tampilan profil.
3. Render komponen `ProfilPengguna` ke dalam elemen dengan `id="root"`.

Dengan pemahaman ini, Anda telah memiliki fondasi yang kuat untuk mengembangkan aplikasi React yang lebih kompleks.

# 🚀 **Apa Selanjutnya?**

📍 Untuk memperdalam pemahaman Anda tentang `komponen`, `JSX`, dan `props`, silakan kerjakan latihan pada [Case Study](03-case-Study.md).

# 🚀 **Apa Materi Selanjutnya?**

📍 Di modul selanjutnya, kita akan melangkah ke konsep yang tak kalah penting—bagaimana membuat komponen mengingat sesuatu: yaitu dengan `state`.

# 📚 Referensi

* [React Documentation – Passing Props](https://react.dev/learn/passing-props-to-a-component)
* [React Documentation – JSX in Depth](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
