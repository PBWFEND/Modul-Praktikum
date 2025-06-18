# Latihan: Build Aplikasi React "Hello World" 👨‍💻

Mari kita mulai dengan tradisi di dunia pemrograman: membuat aplikasi `"Hello World"`. 

Kita akan membersihkan kode bawaan dari Vite dan menggantinya dengan komponen kita sendiri.

## Langkah 1: Membersihkan `App.jsx`

File `src/App.jsx` berisi kode contoh dari `Vite`. Kita akan menghapus semuanya dan memulai dari awal.

Buka `src/App.jsx` dan hapus semua isinya. Lalu, ketik atau salin kode minimal berikut:

```jsx
// src/App.jsx

function App() {
  return (
    <h1>Hello, World!</h1>
  )
}

export default App
```
**Penjelasan Kode:**
- `function App() { ... }`:
  Ini adalah sebuah _functional_ _component_ di React. Sebuah fungsi JavaScript biasa yang mengembalikan JSX.

- `return <h1>Hello, World!</h1>`:
  Bagian ini adalah `JSX` - sintaks yang mirip HTML tetapi sebenarnya JavaScript. Komponen `App` akan _me-render_ elemen `<h1>`.

- `export default App`:
  Baris ini mengekspor komponen `App` agar dapat digunakan _(di-import)_ oleh file lain, khususnya `src/main.jsx`.

Simpan file ini. `Cek browser` Anda, sekarang seharusnya hanya ada tulisan `"Hello, World!`" dengan gaya standar.

## Langkah 2: Membersihkan CSS (Opsional, tapi Direkomendasikan)

Vite menyediakan beberapa styling default. Agar tidak mengganggu, mari kita bersihkan.

1. Bersihkan `App.css`: Buka `src/App.css` dan hapus semua isinya. Simpan file.
2. Bersihkan `index.css`: Buka `src/index.css`, hapus semua isinya, dan tambahkan kode berikut untuk memberikan reset dasar.

```css
/* src/index.css */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2rem;
}
```
Simpan file. Sekarang tampilan aplikasi Anda benar-benar bersih dari gaya bawaan `Vite`.

Untuk melihat hasilnya jalankan kembali perintah:

```bash
npm run dev
```

## Tantangan (Challenge)

Setelah berhasil membuat `"Hello World"`, coba lakukan modifikasi berikut untuk menguji pemahaman Anda:

1. `Modifikasi Komponen`: Di dalam `App.jsx`, tambahkan elemen paragraf `<p>` di bawah `<h1>` yang berisi nama dan perkenalan singkat Anda.

2. `Styling Sederhana`: Buat sebuah class CSS di `App.css`, misalnya `.title`. Beri warna (color) dan ukuran font (font-size) yang berbeda. Kemudian, terapkan class tersebut pada elemen `<h1>` di `App.jsx` menggunakan `className="title"`.


# Build Aplikasi React

Apabila aplikasi sudah selesai dikembangkan, kita bisa build aplikasinya untuk di-publish.

## Langkah 3: Build Aplikasi

1. **Build Aplikasi**: Jalankan perintah berikut di terminal:

   ```bash
   npm run build
   ```
   
   ```bash
   ➜  latihan-react-vite git:(main) ✗ npm run build
   ```
```bash
> latihan-react-vite@0.0.0 build
> vite build

vite v6.3.5 building for production...
✓ 30 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-CLR4tqSg.css    0.46 kB │ gzip:  0.30 kB
dist/assets/index-B-hwUafQ.js   187.66 kB │ gzip: 59.06 kB
✓ built in 393ms
➜  latihan-react-vite git:(main) ✗ 
```
Secara default, output build akan ditempatkan di `dist`. Anda dapat menyebarkan folder `dist` ini ke salah satu platform pilihan Anda.

**Menguji Aplikasi Secara Lokal**

Setelah Anda membuat aplikasi, Anda dapat mengujinya secara lokal dengan menjalankan perintah `npm run preview`.

```bash
npm run preview
```

Perintah `npm run preview` vite akan mem-boot server web statis lokal yang melayani file dari `dist` di `http://localhost:4173`. Ini adalah cara mudah untuk memeriksa apakah pembuatan produksi terlihat baik-baik saja di lingkungan lokal Anda.

```bash
➜  latihan-react-vite git:(main) ✗ npm run preview

> latihan-react-vite@0.0.0 preview
> vite preview

  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

Setelah selesai menguji aplikasi, Anda dapat menghapus folder `dist` dan membuat build baru dengan menjalankan perintah `npm run build` kembali. 

Hal ini berguna ketika Anda ingin memastikan `build terbaru` mencakup semua perubahan yang telah dilakukan.

## Apa Selanjutnya?

Selamat! Anda telah berhasil membuat proyek React modern menggunakan Vite, menjalankan development server, memahami struktur proyek, dan yang terpenting, membangun aplikasi "Hello World" pertama Anda dari awal.

Anda kini memiliki fondasi yang kuat untuk mulai membangun komponen dan fitur yang lebih kompleks.

Pada modul praktikum selanjutnya, kita akan mulai menyelami konsep inti React: `Komponen, JSX, dan Props` secara lebih mendalam. 

Tetap semangat! ✨

# Referensi

1. **Dokumentasi Vite**: https://vitejs.dev/guide/
2. **Dokumentasi React**: https://reactjs.org/docs/getting-started.html
