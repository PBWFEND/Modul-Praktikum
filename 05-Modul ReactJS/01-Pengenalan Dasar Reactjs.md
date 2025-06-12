# Pengenalan Dasar ReactJS

![image](https://d5gp1bgprhhde.cloudfront.net/wp-content/uploads/2023/01/react.png)

ReactJS adalah sebuah library JavaScript untuk membangun antarmuka pengguna (UI) yang interaktif, baik untuk web maupun mobile. Library ini dikembangkan oleh Facebook (sekarang Meta) dan dirilis sebagai open source.

## Apakah ReactJS itu Framework atau Library?

Meskipun banyak yang menyebutnya sebagai framework, secara teknis ReactJS adalah sebuah library. Perbedaan utamanya adalah:

- **Library**: Kumpulan fungsi yang bisa digunakan untuk membantu development
- **Framework**: Kerangka kerja yang lebih kompleks dengan aturan dan struktur tertentu

Namun dalam praktiknya, penyebutan ReactJS sebagai framework atau library keduanya dapat diterima, karena ReactJS telah berkembang menjadi ekosistem yang luas dengan berbagai tools dan library pendukung.

## Sejarah ReactJS

ReactJS pertama kali dikembangkan oleh Jordan Walke, seorang engineer di Facebook. Prototipe awal ReactJS diberi nama "FaxJS" yang terinspirasi dari [XHP](https://en.wikipedia.org/wiki/XHP.), sebuah versi HTML komponen PHP.

Facebook menghadapi tantangan dalam mengelola antarmuka yang semakin kompleks pada aplikasi web mereka. Berbagai fitur seperti news feed, chat list, dan chat box memerlukan pembaruan secara real-time. Penggunaan pendekatan tradisional seperti jQuery dinilai kurang efisien dari segi performa dan penggunaan sumber daya komputasi.

Untuk mengatasi masalah tersebut, Facebook mengembangkan ReactJS dengan konsep `Virtual DOM. `

### Apa itu Virtual DOM ?

![Virtual DOM Illustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920429-c02677bd1421d9addfd01b896e2bc8c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T081234Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=838c346d8d0ea82eae0becc851549608bd91d74fd36240c90261923d048cd061)

![Virtual Dom Illustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920483-586b101ba3c5a5be2b2810cecdc74e60.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T081625Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=6e584738e224222101f5abe75f8723363e7474f34e8fbf1d1a2655691d12eb89)

![Virtual Dom Ilustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920525-83e8d3d28327cc5b3bb1c991da762d11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T081827Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=10e2fec0c14b8a0aa19a5f6921b6e66b94d89e08f7c0b494b8723b53b5845d29)

![Virtual Dom Illustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920554-b6acd419de9760e84e227af69050c978.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T081942Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=ab3f2de0223d1d508316a959fca08fe581c94b54678916ceeec0e8445cbddfd4)

![Virtual Dom Ilustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920580-b88d6e360cf9bd358148783bc6092efc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T082120Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=31081e0bff66c5c42d3259168cc19eae4c5b5300e7f0be3ea3f3812ce5ed9283)

Gimana udah paham belum ?

Dalam prakteknya, kita tidak akan membuat `Virtual DOM` sendiri..
karena sudah ada di dalam React. Kita pakai aja.

Jadi, anda perlu pahami dahulu konssep (VDOM) ini biar paham saat belajar React.

Dalam prakteknya, kita tidak akan membuat `Virtual DOM` sendiri karena sudah ada di dalam React. Kita tinggal menggunakannya saja.

Jadi, Anda perlu memahami dahulu `konsep Virtual DOM (VDOM)` ini agar lebih mudah dalam mempelajari React.

### Versi React

Per Maret 2024, React telah mencapai versi 18.2.0, yang dirilis pada 14 Juni 2022. Tim React saat ini sedang mengerjakan [React 19](https://react.dev/versions), yang akan membawa peningkatan signifikan pada framework ini.

React 19 mencakup beberapa peningkatan, seperti:

- `Mode Concurrent`: Meningkatkan kemampuan React dalam menangani pembaruan dan interaksi kompleks dengan lebih lancar.
- `Hooks `Baru: Memperkenalkan Hooks bawaan baru seperti `useId` dan `useTransition`.
- `Suspense`: Memungkinkan komponen untuk menunggu sumber daya secara deklaratif.
- `Mode Ketat` (`Strict Mode`): Menambahkan pemeriksaan dan peringatan tambahan untuk memudahkan debugging.

Pembaruan ini akan tersedia sebagai bagian dari React 19 dan akan kompatibel dengan versi sebelumnya yaitu React 18.

## Persiapan Awal Belajar ReactJS

Sebelum memulai belajar ReactJS, ada beberapa hal yang perlu dipersiapkan:

### Peralatan Dasar

1. **Web Browser**
   - Google Chrome (direkomendasikan)
   - Firefox
   - Microsoft Edge

2. **Text Editor**
   - Visual Studio Code (direkomendasikan)

3. **Node.js dan NPM** (opsional untuk pemula)
   - Diperlukan untuk pengembangan React yang lebih advanced
   - Dapat diunduh dari [nodejs.org](https://nodejs.org)

### Alternatif Online

Jika belum ingin menginstal tools di komputer lokal, tersedia beberapa platform online untuk belajar React:

- [CodeSandbox](https://codesandbox.io) - IDE online dengan dukungan React yang lengkap
- [CodePen](https://codepen.io) - Platform untuk membuat dan berbagi kode front-end
- [Glitch](https://glitch.com) - Platform kolaboratif untuk membuat aplikasi web
- [PlayCode](https://playcode.io/react) - Online IDE untuk belajar React
- [StackBlitz](https://stackblitz.com/edit/react-playground-practice?file=index.js) - Online IDE untuk belajar React

> **Catatan**: 
> - Untuk saat ini kita akan memulai dengan web browser dan text editor dasar terlebih dahulu sebelum menggunakan Node.js.
>
> - Sebelum melanjutkan, pastikan anda sudah memahami konsep dasar JavaScript ES6 seperti yang telah di pelajari sebelumnya:
>   - Class
>   - Arrow Functions 
>   - Variables (let, const, var)
> 
> Karena fitur-fitur tersebut akan sering digunakan dalam pengembangan React.
>
Jika semua persiapan sudah selesai, mari kita mulai belajar ReactJS!


## Latihan: Hello World di React

Mari kita mulai membuat aplikasi React pertama kita dengan contoh sederhana "Hello World".

### Persiapan

1. Buat folder baru bernama `belajar-react`
2. Di dalam folder tersebut, buat file baru bernama `hello-react.html`

### Kode Hello World

Salin kode berikut ke dalam file `hello-react.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello React</title>
    <!-- Load React dan ReactDOM dari CDN (versi terbaru React 18) -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Load Babel untuk kompilasi JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Menggunakan metode baru React 18
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<h1>Hello, World!</h1>);
    </script>
</body>
</html>
```
Setelah itu, buka file `hello-react.html` dengan web browser.

Maka hasilnya:

![hello](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54928975-6704d6e368a130d79ccfb3640ea550b1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T153045Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=99959ac8360a607208c426487991421b981ee1df78696f471cd345e2e6a65a21)

Selamat!

anda sudah berhasil membuat aplikasi react pertama…

Baik, sekarang saya akan jelaskan arti kode di atas.

Pertama-tama kita membutuhkan _library_ react di HTML. Kita bisa menyisipkannya dengan cara seperti ini:

```html
<!-- Load React and ReactDOM from CDN (latest React 18 version) -->
<!-- React.development.js: Core React library for building components and managing state -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- ReactDOM.development.js: Handles rendering React components to the DOM -->
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Babel: Transpiles modern JavaScript and JSX into browser-compatible code -->
<!-- Required for JSX syntax and ES6+ features support across browsers -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
Pustaka ini dimuat langsung dari internet melalui CDN. Jika Anda tidak memiliki koneksi internet, aplikasi tidak akan dapat berjalan.

Mengapa kita memerlukan tiga pustaka yang berbeda?

Karena ketiganya penting - jika salah satu tidak ada, aplikasi tidak akan berfungsi dengan baik:

1. **react.js** - Pustaka inti React yang diperlukan untuk membuat komponen
2. **react-dom.js** - Diperlukan untuk merender komponen React ke dalam HTML DOM
3. **babel.js** - Mengubah kode JavaScript (ES6) modern sehingga dapat berjalan di semua browser

Karena belum semua browser sepenuhnya mendukung fitur ES6, Babel membantu memastikan aplikasi React kita berfungsi secara konsisten di berbagai browser dengan mengubah sintaksis JavaScript modern menjadi versi yang kompatibel dengan versi sebelumnya.

## Konsep Dasar ReactJS

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

![images-1](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54929481-f858c88c9b29d64039eae221299d9ec3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T155831Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=dee4d6c38db73261f122bc4f866c6f3c8e2531ee761139fdf10eb41840dbabb8)

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

![ilustrasi visual](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54929972-80154a2d3f7018295dd1841071eef969.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T163958Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=d2745065d082c6c6011af580650fe2718815b5125e5d63ac78a5a8d5be762dbe)

Penjelasan Ilustrasi:

1. **Robot "React":** Ini adalah sang "dekorator" utama. Tugasnya adalah mengambil konten (hiasan) dan menampilkannya di halaman web.
2. **Dinding `<div id="root">`:** Ini adalah "kanvas" atau dinding kosong yang sudah kita siapkan di kode HTML, tempat semua hiasan dari React akan dipasang.
3. **Bingkai "Hello, World!":** Ini adalah elemen `<h1>Hello, World!</h1>` yang kita perintahkan untuk ditampilkan. Ini adalah "hiasan" pertama kita.
4. **Asisten "Babel":** Robot kecil ini adalah sang "penerjemah". Ia mengubah bahasa desain "JSX" yang mudah kita tulis menjadi "JS" (JavaScript) biasa yang dimengerti oleh browser, sehingga robot "React" bisa bekerja dengan benar.

## Mengenal JSX

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
    return React.createElement('h1', {}, 'I do not use JSX!');
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh JSX di React</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        
        // --- CONTOH 1: Membuat komponen TANPA JSX ---
        // Cara ini lebih panjang dan jarang digunakan.
        class Btn extends React.Component {
            render() {
                // Menggunakan React.createElement('tag', {props}, 'isi')
                let element = React.createElement('h2', {}, 'Ini dibuat tanpa JSX');
                return element;
            }
        }

        // --- CONTOH 2: Membuat komponen DENGAN JSX ---
        // Cara ini lebih singkat, mudah dibaca, dan direkomendasikan.
        class Btn2 extends React.Component {
            render() {
                // Terlihat seperti HTML biasa di dalam JavaScript
                let element = <h2>Saya dibuat dengan JSX! ❤️</h2>;
                return element;
            }
        }

        // --- Komponen Utama untuk menggabungkan semuanya ---
        // Kita buat satu komponen utama untuk menampilkan kedua contoh di atas.
        function App() {
            return (
                <div>
                    <h1>Perbandingan JSX dan Tanpa JSX</h1>
                    <hr />
                    <Btn /> 
                    <Btn2 />
                </div>
            );
        }

        // 5. Render komponen utama ke dalam div#app menggunakan API React 18
        const container = document.getElementById('app');
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan JSX: Atribut dan Anak</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>
        /* Sedikit style agar kartu terlihat lebih bagus */
        .kartu-profil {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            text-align: center;
            width: 200px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
        const container = document.getElementById('root');
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

1. **ReactJS #02: Membuat dan Memahami Struktur Direktori Project ReactJS**
2. **ReactJS #03: Mengenal State dan Props pada Komponen ReactJS**
   
   Dilanjutkan dengan:

3. Case Study

# Referensi

1. Contributors, projects. “XHP - Wikipedia.” Wikipedia, December 2023. https://en.wikipedia.org/wiki/XHP.
2. https://id.react.dev/learn
3. https://playcode.io/
4. https://reactjs.org/
5. https://react.dev/learn/react-developer-tools