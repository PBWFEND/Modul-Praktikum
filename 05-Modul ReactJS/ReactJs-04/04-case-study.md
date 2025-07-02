# Studi Kasus Sederhana: Membuat Kotak Teks Interaktif

Mari kita terapkan konsep `useState` dan _event handling_ dalam sebuah studi kasus yang lebih praktis. Kita akan membuat sebuah komponen yang menampilkan teks yang Anda ketik secara real-time.

## Tujuan:

1. Memahami bagaimana state digunakan untuk mengelola input dari pengguna.
2. Mengerti cara kerja event handling untuk merespon interaksi pengguna.
3. Menampilkan teks yang diinputkan pengguna secara real-time.
4. Menyelesaikan tugasnya masing-masing

## Langkah 1: Inisialisasi Proyek

Gunakan proyek yang sudah ada atau buat proyek baru dengan `Vite`.

```bash
npm create vite@latest input-interaktif -- --template react
cd input-interaktif
npm install
```

## Langkah 2: Membuat Komponen `InputTeks`

Buat struktur direktori sederhana di dalam `src`/:

```bash
src/
└── components/
    ├── InputTeks.jsx
    └── InputTeks.css
```
Kode untuk `src/components/InputTeks.jsx`:

```jsx
import React, { useState } from 'react';
import './InputTeks.css';

function InputTeks() {
  // 1. Deklarasikan state untuk menyimpan nilai input. Nilai awalnya adalah string kosong.
  const [teks, setTeks] = useState('');

  // 2. Event handler yang akan dipanggil setiap kali ada perubahan pada input.
  //    'event.target.value' berisi teks terbaru dari elemen input.
  function handleChange(event) {
    setTeks(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={teks} // 3. Hubungkan nilai input dengan state 'teks'
        onChange={handleChange} // 4. Panggil handleChange saat input berubah
        placeholder="Ketik sesuatu..."
      />
      <p className="display-teks">
        Anda mengetik: <strong>{teks}</strong>
      </p>
    </div>
  );
}

export default InputTeks;
```

Kode untuk `src/components/InputTeks.css`:

```css
.input-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 20px;
}

.input-container input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.display-teks {
  color: #555;
}
```
## Langkah 3: Menampilkan Komponen di `App.jsx`

Perbarui `src/App.jsx` Anda:

```jsx
import React from 'react';
import InputTeks from './components/InputTeks';

function App() {
  return (
    <div>
      <h1>Contoh State dan Event Handling</h1>
      <InputTeks />
    </div>
  );
}

export default App;
```
## Langkah 4: Jalankan dan Analisis

Jalankan aplikasi Anda `(npm run dev)`. Coba ketik sesuatu di dalam kotak input.

**Alur Kerja yang Terjadi:**

1. Anda menekan sebuah tombol pada keyboard.
2. Event `onChange` pada elemen `<input> `terpicu.
3. Fungsi `handleChange` dipanggil.
4. `setTeks(event.target.value)` memperbarui state `teks` dengan nilai terbaru.
5. React merender ulang komponen `InputTeks`.
6. Elemen `<input> `sekarang menampilkan nilai `teks` yang baru, dan paragraf di bawahnya juga menampilkan teks yang sama.

Proses ini terjadi sangat cepat sehingga terasa instan.

# Kesimpulan

Anda telah mempelajari salah satu konsep paling fundamental di React! Dengan `useState`, Anda dapat memberikan "kehidupan" pada komponen Anda, membuatnya mampu mengingat informasi dan merespons interaksi pengguna.

# Poin Kunci:

- State adalah "memori" komponen.
- `useState` adalah Hook untuk mendeklarasikan state.
- **Event Handlers** (seperti `onClick` dan `onChange`) digunakan untuk memicu pembaruan state.

Saat state diperbarui menggunakan fungsi _setter-nya_, **React akan merender ulang komponen** untuk menampilkan perubahan tersebut.

Di modul berikutnya kita akan membahas cara menampilkan UI secara dinamis berdasarkan kondisi, serta memperkenalkan konsep penyimpanan data di browser dengan `localStorage`.
