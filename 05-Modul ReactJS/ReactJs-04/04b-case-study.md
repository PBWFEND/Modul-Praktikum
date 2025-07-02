# Studi Kasus Sederhana: Tombol Login/Logout yang Persisten

## Tujuan:

1. Membuat komponen yang menampilkan tombol dan pesan yang berbeda berdasarkan status login, dan status tersebut tersimpan di localStorage.
2. Memahami penggunaan localStorage untuk menyimpan data di browser.
   
### Langkah 1: Setup Proyek dan Komponen

Gunakan proyek `Vite` Anda dan buat komponen baru di `src/components/TombolAuth.jsx.`

### Langkah 2: Kode Komponen `TombolAuth.jsx`

```jsx
import React, { useState } from 'react';

function TombolAuth() {
  // 1. Inisialisasi state dengan membaca dari localStorage.
  //    Jika item 'isLoggedIn' ada dan nilainya 'true', state awal adalah true.
  //    Jika tidak, state awal adalah false.
  const [sudahLogin, setSudahLogin] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // 2. Fungsi untuk menangani proses login
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // Simpan status ke localStorage
    setSudahLogin(true); // Perbarui state
  };

  // 3. Fungsi untuk menangani proses logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Hapus status dari localStorage
    setSudahLogin(false); // Perbarui state
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {/* 4. Gunakan operator ternary untuk menampilkan UI yang berbeda */}
      {sudahLogin ? (
        <>
          <h2>Selamat Datang Kembali!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Anda belum login. Silakan login.</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default TombolAuth;
```

### Langkah 3: Tampilkan di `App.jsx`

```jsx
import React from 'react';
import TombolAuth from './components/TombolAuth';

function App() {
  return (
    <div>
      <h1>Aplikasi dengan State Persisten</h1>
      <p>Coba klik Login, lalu refresh halaman browser Anda. Status login Anda akan tetap tersimpan.</p>
      <TombolAuth />
    </div>
  );
}

export default App;
```

### Langkah 4: Jalankan dan Analisis

Jalankan aplikasi Anda. Klik tombol "Login". Pesan akan berubah. Sekarang, coba refresh halaman browser Anda. Anda akan melihat bahwa halaman tetap menampilkan pesan "Selamat Datang Kembali!".

Ini terjadi karena saat komponen dirender ulang setelah refresh, `useState` mengambil nilai awalnya dari `localStorage.getItem('isLoggedIn')`, yang sebelumnya telah kita set ke '`true`'.

# Kesimpulan

Anda telah berhasil menguasai cara menampilkan UI secara dinamis! Kemampuan ini sangat krusial untuk membangun aplikasi yang responsif terhadap data dan interaksi pengguna. 

Anda juga telah mempelajari cara menggunakan `localStorage` untuk membuat `state` aplikasi Anda menjadi persisten.