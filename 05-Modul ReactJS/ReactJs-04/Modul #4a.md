# State & Event Handling

## Pendahuluan

Selamat datang di Modul #04! 

Sejauh ini, komponen yang kita buat bersifat "statis". Mereka menerima data melalui `props` dan menampilkannya, namun tidak bisa berubah setelah dirender. 

Di dunia nyata, aplikasi harus interaktif: tombol harus bisa diklik, input harus bisa diisi, dan UI harus bisa "mengingat" informasi yang berubah.

[]()

Di sinilah `State` dan `Event Handling` berperan.

- `State`: Anggap ini sebagai "memori" internal sebuah komponen. State memungkinkan komponen untuk mengingat informasi (seperti jumlah klik atau teks di dalam input) dan berubah seiring waktu.

- `Event Handling`: Ini adalah cara kita merespons interaksi pengguna, seperti klik, ketikan, atau hover.

Di modul ini, kita akan menggunakan Hook pertama kita, yaitu `useState`, untuk memberikan "memori" pada komponen kita.

## 1. Memperkenalkan Hook `useState`

![img](/05-Modul%20ReactJS/ReactJs-04/img/img-1.png)

Bayangkan sebuah komponen yang menampilkan jumlah klik pada sebuah tombol. Tanpa `state`, komponen ini tidak akan bisa mengingat berapa kali tombol tersebut sudah diklik.

Contoh klasiknya adalah tombol yang menghitung berapa kali ia telah diklik.

Tanpa `state`, komponen tersebut bersifat "pelupa". Setiap kali aplikasi dirender ulang, ia akan lupa jumlah klik sebelumnya. Di sinilah `useState` berperan.

`useState` adalah sebuah "`Hook`" di React yang memungkinkan Anda menambahkan `state` (ingatan) ke dalam komponen fungsional. Dengan useState, komponen dapat:

- *Menyimpan nilai* (seperti jumlah klik).
- *Mengakses nilai* tersebut untuk menampilkannya.
- *Memperbarui nilai* tersebut ketika terjadi sesuatu (seperti saat tombol diklik).

Jadi, `useState` pada dasarnya memberikan "`ingatan`" pada komponen Anda, sehingga ia bisa melacak perubahan data dari waktu ke waktu dan merender ulang dirinya sendiri untuk menampilkan data yang terbaru.

Cara Menggunakan `useState`:

1. **Impor** `useState` dari React.

2. Panggil `useState` di dalam komponen Anda. `useState` akan mengembalikan sebuah array dengan dua elemen:

    - Elemen pertama adalah _nilai state saat ini_.
    - Elemen kedua adalah _fungsi untuk memperbarui state tersebut._

Mari kita lihat contohnya:

```javascript
import React, { useState } from 'react';

function Penghitung() {
  // 1. Deklarasi state
  //    'jumlah' adalah nilai state, 'setJumlah' adalah fungsi untuk mengubahnya.
  //    Nilai awal state adalah 0.
  const [jumlah, setJumlah] = useState(0);

  // 2. Fungsi untuk menangani event klik
  function handleKlik() {
    // 3. Memperbarui state menggunakan fungsi setter
    setJumlah(jumlah + 1);
  }

  return (
    <div>
      <p>Tombol ini telah diklik sebanyak: {jumlah} kali</p>
      <button onClick={handleKlik}>
        Klik Saya
      </button>
    </div>
  );
}
```
Penjelasan Kode:

- `const [jumlah, setJumlah] = useState(0);:` Kita mendeklarasikan sebuah state variable bernama jumlah. Nilai awalnya adalah `0`. React akan mengingat nilai ini. `setJumlah` adalah fungsi yang kita gunakan untuk memberitahu React agar mengubah nilai `jumlah`.

- `onClick={handleKlik}`: Ini adalah event handler. Saat tombol diklik, React akan memanggil fungsi `handleKlik`.

- `setJumlah(jumlah + 1);`: Di dalam `handleKlik`, kita memanggil fungsi `setJumlah` dengan nilai baru. Saat ini terjadi, React akan melakukan dua hal:

  1. Memperbarui nilai `jumlah` di dalam "memorinya".
  2. **Merender ulang** komponen Penghitung dengan nilai `jumlah` yang baru, sehingga UI di layar akan ikut diperbarui.

## 2. State Bekerja Secara Terisolasi

Penting untuk diingat bahwa **state bersifat lokal dan terisolasi** untuk setiap instance komponen. Jika Anda merender komponen `Penghitung` dua kali, masing-masing akan memiliki "memori" atau state-nya sendiri.

```javascript
function App() {
  return (
    <>
      <h1>Penghitung Terpisah</h1>
      <Penghitung />
      <Penghitung />
    </>
  );
}   
```

## Referensi

- [useState](https://react.dev/reference/react/useState)
- [Event Handlers](https://react.dev/reference/react-dom/components#events)
- [React Hooks](https://react.dev/reference/react)
- [React Component Lifecycle](https://react.dev/learn/react-component-lifecycle)
- [React DOM](https://react.dev/reference/react-dom)
- [React Component](https://react.dev/learn/react-component)
