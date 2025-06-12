# Latihan: Hello World di React

Mari kita mulai membuat aplikasi React pertama kita dengan contoh sederhana `"Hello World".`

### Persiapan

1. Buat folder baru bernama `belajar-react`
2. Di dalam folder tersebut, buat file baru bernama `hello-react.html`

### Kode Hello World

Salin kode berikut ke dalam file `hello-react.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello React</title>
    <!-- Load React dan ReactDOM dari CDN (versi terbaru React 18) -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <!-- Load Babel untuk kompilasi JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      // Menggunakan metode baru React 18
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<h1>Hello, World!</h1>);
    </script>
  </body>
</html>
```

Setelah itu, buka file `hello-react.html` dengan web browser.

Maka hasilnya:

![hello](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54928975-6704d6e368a130d79ccfb3640ea550b1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T013549Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=0546aff6744463b2ad372a2da776112605189f1a3f4df53d647c08d6491e228f)

Selamat!

anda sudah berhasil membuat aplikasi react pertama…

Baik, sekarang saya akan jelaskan arti kode di atas.

Pertama-tama kita membutuhkan _library_ react di HTML. Kita bisa menyisipkannya dengan cara seperti ini:

```html
<!-- Load React and ReactDOM from CDN (latest React 18 version) -->
<!-- React.development.js: Core React library for building components and managing state -->
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>

<!-- ReactDOM.development.js: Handles rendering React components to the DOM -->
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>

<!-- Babel: Transpiles modern JavaScript and JSX into browser-compatible code -->
<!-- Required for JSX syntax and ES6+ features support across browsers -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
>Catatan: Menggunakan CDN seperti ini sangat bagus untuk belajar dan membuat demo sederhana. Namun, untuk aplikasi sungguhan, kita akan menggunakan build tools seperti Vite (yang akan dibahas di modul selanjutnya) untuk mengelola proyek kita secara lebih efisien.

Pustaka ini dimuat langsung dari internet melalui CDN. Jika Anda tidak memiliki koneksi internet, aplikasi tidak akan dapat berjalan.

Mengapa kita memerlukan tiga pustaka yang berbeda?

Karena ketiganya penting - jika salah satu tidak ada, aplikasi tidak akan berfungsi dengan baik:

1. **react.js** - Pustaka inti React yang diperlukan untuk membuat komponen
2. **react-dom.js** - Diperlukan untuk merender komponen React ke dalam HTML DOM
3. **babel.js** - Mengubah kode JavaScript (ES6) modern sehingga dapat berjalan di semua browser

Karena belum semua browser sepenuhnya mendukung fitur ES6, Babel membantu memastikan aplikasi React kita berfungsi secara konsisten di berbagai browser dengan mengubah sintaksis JavaScript modern menjadi versi yang kompatibel dengan versi sebelumnya.

Pada intinya, ReactJS hanya merender komponen saat data berubah. Seperti namanya, "React" bereaksi saat data berubah (reaktif).

### Lalu Apa itu Komponen?

Komponen adalah bagian dari UI, seperti tombol, label, input, dll. Komponen juga dapat terdiri dari komponen lain.

Secara Sederhana...

langkah-langkah yang harus dilakukan untuk membuat daplikasi react adalah sebagai berikut:

1. Tambahkan Library/pustaka React ke HTML
2. Buat elemen HTML sebagai wadah aplikasi
3. Buat komponen
4. Render komponen ke HTML

Setiap aplikasi React membutuhkan elemen wadah.

Melihat kembali contoh kita di atas, kita membuat elemen div dengan `id="root"` untuk berfungsi sebagai wadah.

Mari kita periksa bagian-bagian utama dari contoh `Hello World` kita:

1. `<h1>Hello, World!</h1>` - Ini adalah komponen React kita. Komponen ini akan menampilkan judul dengan teks `"Hello, World!"`.
2. `document.getElementById('root')` - Di sinilah komponen React kita akan ditampilkan. Dalam kasus ini, komponen ini adalah div dengan `id` `"root".`

Saat kita menjalankan `ReactDOM.render()`, React mengambil elemen `<h1>` dan menampilkannya ke dalam `div` dengan `id` "root". Hasilnya adalah teks `Hello, World!`" muncul di browser.

Untuk menjalankan kode React, kita menggunakan fungsi `ReactDOM.render()`. Fungsi ini menerima dua parameter:

1. Komponen React yang akan ditampilkan
2. Elemen HTML sebagai wadah

Fungsi ini akan merender komponen React ke dalam elemen HTML yang ditentukan.

![images-1](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54929481-f858c88c9b29d64039eae221299d9ec3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T013052Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=7d3868de2531231ce8ba7faa33d16415fbfe281f80580160298777a42e08b1a8)

Apakah harus dibuat dengan `id="root"`?

Tidak harus, karena nanti kita akan tentukan elemennya dengan method `getElementById()`.

Berikutnya kita membuat kode aplikasinya dengan tipe `text/babel` :

```html
<script type="text/babel">
  // Menggunakan metode baru React 18
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<h1>Hello, World!</h1>);
</script>
```

Mari kita pecah dan sederhanakan penjelasan kode tersebut menggunakan analogi yang lebih mudah dipahami, seolah-olah kita sedang mendekorasi sebuah ruangan.

Bayangkan:

- Halaman Web adalah Ruangan Anda.
- Di dalam HTML, ada `<div id="root"></div>`. Anggap ini sebagai dinding kosong yang Anda siapkan dan beri nama `root`. Dinding ini adalah tempat Anda akan memasang hiasan.
- React adalah _dekorator interior_ yang Anda sewa untuk menghias dinding tersebut.
- `<h1>Hello, World!</h1>` adalah hiasan yang ingin Anda pasang, yaitu sebuah tulisan "Hello, World!" dalam bingkai besar.

Dengan analogi tersebut, mari kita lihat kembali kodenya di atas.

### Penjelasan Per Baris

1. `const root = ReactDOM.createRoot(document.getElementById("root"));`

   - Ini adalah instruksi awal untuk React (_dekorator_)
   - `document.getElementById("root")` artinya "Cari dinding yang bernama `root`."
   - `ReactDOM.createRoot(...)` artinya "Jadikan dinding itu sebagai kanvas utama untuk dihias."
   - Intinya: Kita menunjuk sebuah dinding kosong dan memberitahu sang dekorator, "Di sinilah tempatmu bekerja."

2. `root.render(<h1>Hello, World!</h1>);`
   - Ini adalah perintah utama untuk menampilkan konten
   - `root.render(...)` artinya "Sekarang, tolong `render` (gambar atau tampilkan) hiasan ini di kanvas yang sudah siap."
   - `<h1>Hello, World!</h1>` adalah hiasan yang kita minta untuk dipasang.
   - **Intinya**: Kita memerintahkan dekorator untuk memasang tulisan `"Hello, World!"` di dinding yang telah kita tunjuk.

**Kenapa perlu** `<script type="text/babel">`?

Anda mungkin bertanya, "Mengapa ada kode yang mirip HTML (`<h1>`) di dalam kode `JavaScript`?"

Itu disebut `JSX`. Anggap saja `JSX` adalah "bahasa desain" khusus yang disukai oleh dekorator (React) kita karena lebih mudah dan cepat.

Namun, browser (seperti Chrome atau Firefox) tidak mengerti "bahasa desain" ini. Di sinilah Babel berperan sebagai penerjemah. Tag `<script type="text/babel">` memerintahkan Babel untuk mengubah kode JSX yang mudah kita tulis menjadi JavaScript biasa yang dapat dimengerti oleh browser.

Secara singkat, kode tersebut memberi perintah:

1. Cari dinding bernama `root`.
2. Jadikan dinding itu sebagai kanvas untuk React.
3. Perintahkan React untuk menampilkan `"Hello, World!"` di kanvas tersebut, dengan bantuan **penerjemah (Babel)** agar browser paham.

Berikut ilustrasi visual untuk membantu Anda memahami analogi tersebut:

![ilustrasi visual](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54929972-80154a2d3f7018295dd1841071eef969.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T013248Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=1e43202763442e2258122bccc50656d416546f95916b5e5012ae572b476e09be)

Penjelasan Ilustrasi:

1. **Robot "React":** Ini adalah sang "dekorator" utama. Tugasnya adalah mengambil konten (hiasan) dan menampilkannya di halaman web.
2. **Dinding `<div id="root">`:** Ini adalah "kanvas" atau dinding kosong yang sudah kita siapkan di kode HTML, tempat semua hiasan dari React akan dipasang.
3. **Bingkai "Hello, World!":** Ini adalah elemen `<h1>Hello, World!</h1>` yang kita perintahkan untuk ditampilkan. Ini adalah "hiasan" pertama kita.
4. **Asisten "Babel":** Robot kecil ini adalah sang "penerjemah". Ia mengubah bahasa desain "JSX" yang mudah kita tulis menjadi "JS" (JavaScript) biasa yang dimengerti oleh browser, sehingga robot "React" bisa bekerja dengan benar.

# Mengenal JSX

JSX adalah singkatan dari JavaScript XML. JSX adalah sintaks yang mirip dengan XML, tetapi menggunakan kurung kurawal `{}` untuk mengintegrasikan ekspresi JavaScript ke dalam kode HTML.

JSX memudahkan pengembangan React karena kita dapat menulis kode yang lebih mudah dibaca dan mengintegrasikan ekspresi JavaScript ke dalam tampilan.

JSX sama seperti XML dan HTML, ia juga memiliki nama tag, atribut, dan elemen anak.

Meskipun React dapat digunakan tanpa JSX, penggunaan JSX sangat direkomendasikan karena:

- Kode lebih mudah dibaca dan dipahami
- Struktur komponen lebih jelas dan intuitif
- Penulisan template UI lebih efisien
- Integrasi JavaScript lebih seamless
- Dukungan IDE dan tools development lebih baik

Tanpa JSX, membuat tampilan di React terasa lebih rumit dan panjang karena anda harus menggunakan fungsi `React.createElement`.

Dengan JSX, kodenya terlihat bersih dan familiar, persis seperti menulis HTML.

Coba kita bandingkan:

**Contoh 1: Tanpa JSX (Cara yang Lebih Sulit)**

Kode ini membuat sebuah judul `<h1>` dengan tulisan "I do not use JSX!". Cara ini panjang dan kurang intuitif.

```javascript
// Membuat komponen React tanpa JSX
class Btn extends React.Component {
  render() {
    // 'h1' adalah tag, {} untuk atribut (kosong), dan 'I do not use JSX!' adalah isinya.
    return React.createElement("h1", {}, "I do not use JSX!");
  }
}
```

**Contoh 2: Dengan JSX (Cara yang Mudah & Direkomendasikan)**

Lihat betapa sederhananya kode di bawah ini. Kamu bisa langsung menulis tag `<h1> `seolah-olah ini adalah file HTML biasa.

```javascript
// Membuat komponen dengan JSX
class Btn2 extends React.Component {
  render() {
    // Jauh lebih singkat dan mudah dibaca, kan?
    return <h1>I Love JSX!</h1>;
  }
}
```

Perhatikan kode di bawah ini:

Kode ini menggabungkan dua contoh komponen (dengan dan tanpa JSX) dari pembahasan kita sebelumnya ke dalam satu file HTML yang bisa langsung dijalankan di browser.

Cukup salin kode di bawah ini, simpan sebagai file `.html` (misalnya, `latihan-JSX.html`), lalu buka di browser Anda.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh JSX di React</title>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      // --- CONTOH 1: Membuat komponen TANPA JSX ---
      function TombolTanpaJSX() {
        return React.createElement("h2", {}, "Ini dibuat tanpa JSX");
      }

      // --- CONTOH 2: Membuat komponen DENGAN JSX ---
      function TombolDenganJSX() {
        return <h2>Saya dibuat dengan JSX! ❤️</h2>;
      }

      // --- Komponen Utama untuk menggabungkan semuanya ---
      function App() {
        return (
          <div>
            <h1>Perbandingan JSX dan Tanpa JSX</h1>
            <hr />
            <TombolTanpaJSX />
            <TombolDenganJSX />
          </div>
        );
      }

      // Render komponen utama
      const container = document.getElementById("app");
      const root = ReactDOM.createRoot(container);
      root.render(<App />);
    </script>
  </body>
</html>
```

![Perbandingan JSX dan Tanpa JSX](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54930817-3eadb47eb0829ed5bd625e7b216c787a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T171558Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=089ffdebfc580783fd6ed36c145d49176b429dfa06dd32d205d779f711ea9142)

**Penjelasan**

1. **Struktur HTML Lengkap**: Kode ini sekarang berada dalam file HTML yang utuh dan siap pakai, lengkap dengan pemuatan library React, ReactDOM, dan Babel.
   1. **Menggabungkan Komponen**: Kita membuat komponen utama bernama `App` yang berfungsi untuk menampung dan menampilkan kedua komponen sebelumnya (`Btn` dan `Btn2`) agar mudah dibandingkan.
2. **Render ke Wadah**: Menggunakan metode `ReactDOM.createRoot()` yang merupakan standar di React 18, kita merender komponen App ke dalam elemen HTML dengan `id="app"`.

Berikut adalah ilustrasi visual untuk membantu Anda memahami perbedaan antara menggunakan JSX dan tidak, berdasarkan contoh kode di atas:

![ilustrasi](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54930818-c2cf33fc41bd3b372e835cb588ee2ee5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T172522Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=5ab37a7c162803219397d03b501cb81bb0682846672148c630097742f78dc917)

**Penjelasan Ilustrasi:**

- **Sisi Kiri (Tanpa JSX)**: Menggambarkan proses yang lebih rumit dan "berbelit-belit". Anda harus menggunakan fungsi `React.createElement()` yang terasa seperti merakit sesuatu dari bagian-bagian kecil yang terpisah, mirip seperti instruksi manual yang panjang.
- **Sisi Kanan (Dengan JSX)**: Menggambarkan proses yang jauh lebih sederhana dan langsung. Anda menulis kode yang terlihat seperti HTML (`<h2>...</h2>`), dan hasilnya langsung terlihat sama. Prosesnya lurus dan mudah dipahami, tanpa langkah-langkah rumit yang tidak perlu.

Secara singkat, ilustrasi ini menunjukkan mengapa pengembang lebih menyukai JSX: lebih intuitif, bersih, dan langsung ke intinya.

### JSX dengan Anak (Children) dan Atribut

ini adalah latihan berikutnya.

Kita akan membuat komponen sederhana berupa `"kartu profil"` yang memiliki beberapa `atribut` (seperti `className` dan `src`) dan beberapa elemen anak (gambar dan teks di dalamnya).

Berikut adalah contoh kode yang bisa langsung Anda jalankan. dan simpan sebagai file `jsx-children-attributes.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Latihan JSX: Atribut dan Anak</title>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>
      /* Sedikit style agar kartu terlihat lebih bagus */
      .kartu-profil {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        width: 200px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-family: sans-serif;
      }
      .kartu-profil img {
        width: 100px;
        height: 100px;
        border-radius: 50%; /* Membuat gambar menjadi bulat */
        object-fit: cover;
      }
      .kartu-profil h3 {
        margin: 10px 0 5px 0;
      }
      .kartu-profil p {
        margin: 0;
        color: #555;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function KartuProfil() {
        return (
          // Elemen induk (div) dengan ATRIBUT `className`
          <div className="kartu-profil">
            {/* ELEMEN ANAK 1: <img> dengan ATRIBUT `src` dan `alt` */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
              alt="Foto profil pengguna"
            />

            {/* ELEMEN ANAK 2: <h3> */}
            <h3>Nama Anda</h3>

            {/* ELEMEN ANAK 3: <p> */}
            <p>Web Developer</p>
          </div>
        );
      }

      // Render komponen ke dalam div#root
      const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);
      root.render(<KartuProfil />);
    </script>
  </body>
</html>
```

**Hasilnya:**

![output](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54931213-8b001c99195d8d203cb2e4865b371cb6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T174401Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=77ee9edb13481d73a10d5743af673d153b7ce43208803991632eb0dca19fd75d)

**Penjelasan Kode**

1. **Elemen Induk dengan Atribut:**
   Elemen `<div>` adalah elemen terluar atau induk. Ia memiliki satu `atribut`, yaitu `className="kartu-profil"`.

```javascript
<div className="kartu-profil">
```

> Catatan Penting: Di JSX, kita menggunakan className sebagai ganti dari class untuk mendefinisikan kelas CSS. Ini karena class adalah kata kunci yang sudah dipakai (reserved word) di JavaScript.

2. ** Elemen Anak (Children):**
   Semua yang ada di dalam <div> adalah elemen anaknya. Dalam contoh ini, ada tiga elemen anak:

- **`<img ... />`:** Tag gambar ini memiliki dua atribut: `src` untuk sumber gambar dan `alt` untuk teks alternatif.
- **`<h3>Nama Anda</h3>`:** Tag judul.
- **`<p>Web Developer</p>`:** Tag paragraf.

Dengan contoh ini, Anda berhasil membuat sebuah komponen JSX yang memiliki elemen induk, beberapa elemen anak di dalamnya, serta atribut pada masing-masing elemen.

# Apa Selanjutnya?

Selamat!

Anda telah memulai langkah awal dalam mempelajari ReactJS.

Setelah memahami dasar-dasar ReactJS, mari kita lanjutkan dengan mempelajari cara membuat project ReactJS.

Berikut adalah urutan pembelajaran selanjutnya:

2. [**ReactJS #02: Membuat dan Memahami Struktur Direktori Project ReactJS**](https://)

# Referensi

1. Contributors, projects. “XHP - Wikipedia.” Wikipedia, December 2023. https://en.wikipedia.org/wiki/XHP.
2. https://id.react.dev/learn
3. https://playcode.io/
4. https://reactjs.org/
5. https://react.dev/learn/react-developer-tools
