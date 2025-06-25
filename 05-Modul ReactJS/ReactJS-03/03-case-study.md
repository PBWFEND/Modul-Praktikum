# **Studi Kasus: Desain dan Implementasi Komponen Aplikasi React**

## Daftar Isi
- [**Studi Kasus: Desain dan Implementasi Komponen Aplikasi React**](#studi-kasus-desain-dan-implementasi-komponen-aplikasi-react)
  - [Daftar Isi](#daftar-isi)
  - [**Pendahuluan**](#pendahuluan)
  - [**Tujuan Pembelajaran**](#tujuan-pembelajaran)
  - [**Fase 1: Implementasi Awal Aplikasi Kartu Profil**](#fase-1-implementasi-awal-aplikasi-kartu-profil)
  - [**Langkah 1: Inisialisasi Lingkungan Proyek**](#langkah-1-inisialisasi-lingkungan-proyek)
  - [**Langkah 2: Perancangan Struktur Direktori Awal**](#langkah-2-perancangan-struktur-direktori-awal)
  - [**Langkah 3: Pembuatan Komponen `ProfilPengguna`**](#langkah-3-pembuatan-komponen-profilpengguna)
  - [**Langkah 4: Isolasi Data Pengguna**](#langkah-4-isolasi-data-pengguna)
  - [**Langkah 5: Komposisi Aplikasi di `App.jsx`**](#langkah-5-komposisi-aplikasi-di-appjsx)
  - [**Langkah 6: Eksekusi Aplikasi**](#langkah-6-eksekusi-aplikasi)
  - [**Fase 2: Refactoring Menggunakan Prinsip Komposisi**](#fase-2-refactoring-menggunakan-prinsip-komposisi)
  - [**Langkah 1: Pembaruan Struktur Direktori**](#langkah-1-pembaruan-struktur-direktori)
  - [**Langkah 2: Implementasi Komponen `Card` Generik**](#langkah-2-implementasi-komponen-card-generik)
  - [**Langkah 3: Modifikasi Komponen `ProfilPengguna`**](#langkah-3-modifikasi-komponen-profilpengguna)
  - [**Analisis Hasil Refactoring**](#analisis-hasil-refactoring)
- [Tugas Tambahan: Menguji Reusabilitas dengan Komponen Pengumuman](#tugas-tambahan-menguji-reusabilitas-dengan-komponen-pengumuman)
  - [**Tujuan:**](#tujuan)
  - [**Langkah-langkah:**](#langkah-langkah)
  - [**Poin Pembelajaran dari Tugas Ini:**](#poin-pembelajaran-dari-tugas-ini)
  - [**Ringkasan**](#ringkasan)


## **Pendahuluan** 

Studi kasus ini bertujuan untuk mentransisikan pengetahuan teoretis ke dalam praktik pengembangan aplikasi React yang sesungguhnya. Proses ini akan dibagi menjadi dua fase utama. 

- Fase pertama adalah **implementasi awal**, di mana kita akan membangun aplikasi kartu profil yang fungsional.
- Fase kedua adalah **refactoring**, di mana kita akan menyempurnakan arsitektur kode kita untuk menerapkan prinsip desain perangkat lunak yang lebih superior, yaitu **Komposisi Komponen**.

## **Tujuan Pembelajaran**

  * Mampu menginisialisasi dan mengelola proyek React menggunakan *build tool* modern (Vite).
  * Menerapkan struktur direktori yang skalabel dan terorganisir.
  * Memisahkan data, logika tampilan, dan styling ke dalam modul-modul yang independen.
  * Mengimplementasikan rendering daftar data secara dinamis menggunakan metode `.map()`.
  * Memahami dan menerapkan prinsip desain **Komposisi Komponen** melalui *refactoring* dengan `props.children`.

## **Fase 1: Implementasi Awal Aplikasi Kartu Profil**

Pada fase ini, kita akan membangun fungsionalitas dasar dari aplikasi kartu profil.

## **Langkah 1: Inisialisasi Lingkungan Proyek**

Inisialisasi proyek React dilakukan menggunakan Vite untuk mendapatkan lingkungan pengembangan yang modern dan efisien. Jalankan perintah berikut pada terminal Anda:

```bash
# Membuat direktori proyek dengan template React
npm create vite@latest kartu-profil-app -- --template react

# Masuk ke direktori proyek
cd kartu-profil-app

# Menginstal dependensi yang diperlukan
npm install
```

## **Langkah 2: Perancangan Struktur Direktori Awal**

Struktur direktori yang baik adalah fondasi dari aplikasi yang mudah dipelihara. Buatlah struktur berikut di dalam direktori `src/`:

```
kartu-profil-app/
└── src/
    ├── components/
    │   ├── ProfilPengguna.jsx
    │   └── ProfilPengguna.css
    ├── data/
    │   └── users.js
    ├── App.jsx
    └── main.jsx
```

  * **`components/`**: Direktori ini berfungsi untuk enkapsulasi komponen UI yang dapat digunakan kembali.
  * **`data/`**: Direktori ini digunakan untuk isolasi data statis dari logika aplikasi.
  * **`App.jsx`**: Bertindak sebagai komponen root yang mengorkestrasi seluruh komponen lain.
  * **`main.jsx`**: Titik masuk aplikasi (entry point) yang bertanggung jawab untuk me-render aplikasi ke dalam DOM.

## **Langkah 3: Pembuatan Komponen `ProfilPengguna`**

Komponen ini bertanggung jawab secara eksklusif untuk menampilkan visualisasi satu profil pengguna.

**Kode untuk `src/components/ProfilPengguna.jsx`:**

```jsx
import React from 'react';
import './ProfilPengguna.css'; // Impor dependensi styling

function ProfilPengguna({ gambar, nama, pekerjaan }) {
  return (
    <div className="kartu-profil">
      <img src={gambar} alt={"Foto " + nama} />
      <h3>{nama}</h3>
      <p>{pekerjaan}</p>
    </div>
  );
}

export default ProfilPengguna;
```

**Kode untuk `src/components/ProfilPengguna.css`:**

```css
.kartu-profil {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    width: 220px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}
.kartu-profil:hover {
    transform: translateY(-5px);
}
.kartu-profil img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #f0f0f0;
}
/* ... dan seterusnya untuk styling h3 dan p ... */
```

## **Langkah 4: Isolasi Data Pengguna**

Data dipisahkan ke dalam modulnya sendiri untuk meningkatkan keterbacaan dan mempermudah pengelolaan data di masa depan.

**Kode untuk `src/data/users.js`:**

```js
// Ekspor array of objects yang merepresentasikan data pengguna
export const users = [
  { id: 1, nama: "Jane Doe", pekerjaan: "Frontend Developer", gambar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
  { id: 2, nama: "John Smith", pekerjaan: "Backend Engineer", gambar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { id: 3, nama: "Sarah Wilson", pekerjaan: "UI/UX Designer", gambar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" }
];
```

## **Langkah 5: Komposisi Aplikasi di `App.jsx`**

Komponen `App` mengimpor data dan komponen `ProfilPengguna`, lalu secara dinamis me-render daftar profil menggunakan metode `.map()`.

**Kode untuk `src/App.jsx`:**

```jsx
import React from 'react';
import ProfilPengguna from './components/ProfilPengguna';
import { users } from './data/users'; // Impor data pengguna
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1>Tim Kami</h1>
      <div className="profil-list">
        {users.map(user => (
          <ProfilPengguna
            key={user.id} // Prop `key` esensial untuk optimasi render list
            nama={user.nama}
            pekerjaan={user.pekerjaan}
            gambar={user.gambar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

## **Langkah 6: Eksekusi Aplikasi**

Jalankan server pengembangan dari terminal:

```bash
npm run dev
```

Aplikasi kini dapat diakses pada URL yang disediakan.

-----

## **Fase 2: Refactoring Menggunakan Prinsip Komposisi**

Aplikasi sudah berfungsi, namun arsitekturnya dapat ditingkatkan. Kita akan memisahkan tanggung jawab komponen `ProfilPengguna` untuk menerapkan prinsip komposisi.

**Tujuan Refactoring:** Memisahkan komponen "wadah" (kartu) dari "isi" (profil) menggunakan `props.children`.

## **Langkah 1: Pembaruan Struktur Direktori**

Kita akan menambahkan komponen `Card` yang generik.

```
kartu-profil-app/
└── src/
    ├── components/
    │   ├── Card.jsx           # <-- FILE BARU
    │   ├── Card.css           # <-- FILE BARU
    │   ├── ProfilPengguna.jsx
    │   └── ProfilPengguna.css
    ...
```

## **Langkah 2: Implementasi Komponen `Card` Generik**

Komponen ini dirancang untuk menjadi "wadah" yang fleksibel dan tidak mengetahui konten di dalamnya.

**Kode untuk `src/components/Card.jsx`:**

```jsx
import React from 'react';
import './Card.css';

// Komponen menerima `children` sebagai prop spesial
function Card({ children }) {
  // `children` akan berisi JSX apapun yang disisipkan di antara tag <Card> dan </Card>
  return (
    <div className="card-wrapper">
      {children}
    </div>
  );
}

export default Card;
```

Styling untuk `.card-wrapper` (sebelumnya `.kartu-profil`) dipindahkan ke `Card.css`.

## **Langkah 3: Modifikasi Komponen `ProfilPengguna`**

Komponen `ProfilPengguna` kini akan menggunakan `Card` sebagai pembungkusnya, melepaskan tanggung jawab atas styling "bingkai".

**Kode baru untuk `src/components/ProfilPengguna.jsx`:**

```jsx
import React from 'react';
import Card from './Card'; // Impor komponen Card
import './ProfilPengguna.css';

function ProfilPengguna({ gambar, nama, pekerjaan }) {
  // Gunakan Card sebagai pembungkus
  return (
    <Card>
      <img src={gambar} alt={"Foto " + nama} />
      <h3>{nama}</h3>
      <p>{pekerjaan}</p>
    </Card>
  );
}

export default ProfilPengguna;
```

## **Analisis Hasil Refactoring**

Meskipun tampilan visual aplikasi tidak berubah, arsitektur perangkat lunaknya kini jauh lebih superior karena beberapa alasan:

  * **Reusability Tinggi**: Komponen `Card` sekarang dapat digunakan untuk membungkus konten apa pun, tidak terbatas pada profil pengguna.
  * **Prinsip Komposisi**: Kita kini membangun UI dengan menyusun komponen-komponen independen. Ini adalah filosofi inti React yang lebih disukai daripada pewarisan (inheritance).
  * **Pemisahan Tugas (Separation of Concerns)**:
      * `Card` hanya bertanggung jawab atas presentasi visual sebuah wadah.
      * `ProfilPengguna` hanya bertanggung jawab atas presentasi data pengguna.

# Tugas Tambahan: Menguji Reusabilitas dengan Komponen Pengumuman

Untuk memperkuat pemahaman Anda tentang reusabilitas komponen dan `props.children`, buatlah satu komponen baru yang juga akan menggunakan komponen `Card` yang sudah kita refactor.

## **Tujuan:**
Membuat komponen `<Pengumuman />` yang akan menampilkan judul dan isi pengumuman di dalam sebuah `Card`, membuktikan bahwa `Card` benar-benar dapat digunakan kembali.

## **Langkah-langkah:**

1.  **Buat File Komponen Baru:**
    Di dalam folder `src/components/`, buat file baru bernama `Pengumuman.jsx`.

2.  **Isi Kode Komponen `Pengumuman.jsx`:**
    Komponen ini akan menerima props `judul` dan `isi`, lalu menampilkannya di dalam `Card`.

    ```jsx
    import React from 'react';
    import Card from './Card';

    function Pengumuman({ judul, isi }) {
      return (
        <Card>
          <h3>📢 {judul}</h3>
          <p>{isi}</p>
        </Card>
      );
    }

    export default Pengumuman;
    ```

3.  **Tampilkan Komponen Baru di `App.jsx`:**
    Impor dan render komponen `<Pengumuman />` di dalam komponen `App`.

    ```jsx
    import React from 'react';
    import ProfilPengguna from './components/ProfilPengguna';
    import Pengumuman from './components/Pengumuman'; // <-- Impor komponen baru
    import { users } from './data/users';
    import './App.css';

    function App() {
      return (
        <div className="app-container">
          <Pengumuman 
            judul="Info Praktikum"
            isi="Pastikan semua tugas dikumpulkan sebelum batas waktu yang ditentukan."
          />
          <hr style={{width: '100%', margin: '40px 0', border: '1px solid #eee'}} />
          <h1>Tim Kami</h1>
          <div className="profil-list">
            {users.map(user => (
              <ProfilPengguna
                key={user.id}
                nama={user.nama}
                pekerjaan={user.pekerjaan}
                gambar={user.gambar}
              />
            ))}
          </div>
        </div>
      );
    }

    export default App;
    ```

## **Poin Pembelajaran dari Tugas Ini:**

* **Komposisi Komponen**: Dengan menyelesaikan tugas ini, Anda telah membuktikan secara praktik bahwa komponen `Card` yang generik dapat digunakan untuk membungkus berbagai jenis konten, yang merupakan inti dari prinsip komposisi dan _reusabilitas_ dalam _React_.
* **Refactoring**: Melakukan _refactoring_ adalah proses mengubah kode tanpa mengubah fungsionalitasnya. Dalam konteks React, ini melibatkan mengubah struktur komponen dan _props_ tanpa mengubah perilaku aplikasi.
* **Modularitas CSS**: CSS yang terpisah dan terkait dengan komponen tertentu, dikenal sebagai modular. Dalam konteks React, ini melibatkan penggunaan _styling_ yang terkait dengan komponen tertentu, yang memudahkan manajemen dan pemeliharaan.

## **Ringkasan**

Dalam praktikum ini, Anda telah:

1. Mempelajari cara membuat aplikasi React dari awal menggunakan Vite sebagai build tool
2. Mengimplementasikan struktur direktori yang terorganisir dan skalabel
3. Membuat komponen React fungsional dengan JSX
4. Menerapkan props untuk komunikasi antar komponen
5. Menggunakan metode `.map()` untuk render data dinamis
6. Melakukan _refactoring_ menggunakan prinsip komposisi komponen
7. Memisahkan komponen menjadi bagian yang lebih kecil dan reusable
8. Menerapkan styling CSS modular untuk komponen
9. Membuat komponen generik yang dapat digunakan kembali

Pendekatan yang dipelajari menghasilkan kode yang lebih mudah dipelihara, diuji, dan dikembangkan untuk kebutuhan masa depan.