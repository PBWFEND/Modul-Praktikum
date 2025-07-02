# Conditional Rendering & Pengenalan `localStorage`

## Pendahuluan

Sejauh ini, komponen kita selalu menampilkan UI yang sama. Namun, aplikasi nyata harus bisa beradaptasi. Misalnya, menampilkan tombol "Login" untuk tamu dan tombol "Logout" untuk pengguna yang sudah masuk, atau menampilkan pesan "Loading..." saat data sedang diambil.

Conditional Rendering adalah kemampuan untuk menampilkan elemen yang berbeda berdasarkan kondisi tertentu.

Di modul ini, kita juga akan berkenalan dengan `localStorage`, sebuah fitur browser yang memungkinkan kita menyimpan informasi sederhana yang akan tetap ada bahkan setelah halaman ditutup.

## 1. Teori Fundamental: `localStorage`

Sebelum masuk ke praktik di React, mari kita pahami dulu apa itu `localStorage`.

`localStorage` adalah sebuah mekanisme penyimpanan data sederhana di dalam browser pengguna. 

Bayangkan ini seperti sebuah **"papan catatan digital"** kecil yang menempel pada browser untuk situs web Anda. 

Data yang Anda simpan di sini akan **persisten**, artinya tidak akan hilang saat browser ditutup atau komputer dimatikan.

### Karakteristik Utama:

- **Penyimpanan Kunci-Nilai (Key-Value):** Anda menyimpan data dengan memberikan sebuah kunci (sebagai nama pengenal) dan sebuah nilai.

- **Hanya Menyimpan String:** `localStorage` hanya bisa menyimpan data dalam format string. Jika Anda ingin menyimpan objek atau array, Anda harus mengubahnya menjadi string terlebih dahulu (umumnya menggunakan `JSON.stringify()`) dan mengubahnya kembali saat mengambilnya `(JSON.parse()`).

- **Spesifik per Domain:** Data `localStorage` untuk `situs-a.com `tidak bisa diakses oleh `situs-b.com`. Ini adalah fitur keamanan penting.

**Cara Menggunakan** `localStorage`:

Anda bisa berinteraksi dengan `localStorage` menggunakan beberapa perintah JavaScript sederhana:

- Menyimpan data:
  
```jsx
localStorage.setItem('namaPengguna', 'Andi');
```
- Mengambil data:

```jsx
const nama = localStorage.getItem('namaPengguna'); // hasilnya: "Andi"
```
- Menghapus data:

```jsx
localStorage.removeItem('namaPengguna');
```
- Menghapus semua data:

```jsx
localStorage.clear();
```
## 2. Pola _Conditional_ Rendering di React

Ada beberapa cara umum untuk menampilkan JSX secara kondisional di React.

  a. Menggunakan Operator Ternary (`? :`)

Ini adalah cara paling umum dan ringkas untuk kondisi `"jika-ini-maka-itu-jika-tidak-maka-ini"`. Sangat cocok digunakan langsung di dalam JSX.

```jsx
function SalamPembuka({ sudahLogin }) {
  return (
    <h1>
      {sudahLogin ? 'Selamat Datang Kembali!' : 'Silakan Login.'}
    </h1>
  );
}
```

b. Menggunakan Operator Logika `&&`

Ini adalah jalan pintas yang elegan jika Anda hanya ingin menampilkan sesuatu jika kondisinya benar, dan tidak menampilkan apa-apa jika salah.

```jsx
function Notifikasi({ jumlahPesan }) {
  return (
    <div>
      <h2>Inbox</h2>
      {/* Pesan di bawah ini hanya akan muncul jika jumlahPesan > 0 */}
      {jumlahPesan > 0 &&
        <p>Anda memiliki {jumlahPesan} pesan yang belum dibaca.</p>
      }
    </div>
  );
}
```

c. Menggunakan `if/else `Statement

Untuk logika yang lebih kompleks, Anda bisa menggunakan `if/else `standar di luar JSX untuk menentukan komponen mana yang akan dirender.

```jsx
function TombolAuth({ sudahLogin, handleLogout, handleLogin }) {
  if (sudahLogin) {
    return <button onClick={handleLogout}>Logout</button>;
  } else {
    return <button onClick={handleLogin}>Login</button>;
  }
}
```
Selanjutnya..

Mari kita gabungkan semua konsep ini untuk membuat sebuah tombol yang status login-nya bisa diingat oleh browser.

pada Studi Kasus Sederhana..

# Referensi:

- [MDN Web Docs - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [W3Schools - HTML Web Storage](https://www.w3schools.com/html/html5_webstorage.asp)
- [JavaScript.info - LocalStorage, sessionStorage](https://javascript.info/localstorage)
