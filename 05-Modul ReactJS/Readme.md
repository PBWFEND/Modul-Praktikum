# Panduan Praktikum ReactJS

Selamat datang di repositori resmi untuk Panduan Praktikum ReactJS. Repositori ini berisi serangkaian modul pembelajaran yang dirancang untuk memandu Anda dari konsep dasar hingga topik tingkat lanjut dalam pengembangan aplikasi web menggunakan ReactJS.

Setiap modul disusun secara berurutan untuk membangun pemahaman Anda secara bertahap. Disarankan untuk mengikuti materi sesuai urutan yang telah disediakan.

## Prasyarat

Sebelum memulai praktikum ini, pastikan Anda telah memenuhi prasyarat berikut:

* **Pengetahuan Dasar:**
    * Memahami HTML, CSS, dan JavaScript (terutama ES6+, seperti arrow functions, let/const, classes).
* **Perangkat Lunak:**
    * [Node.js](https://nodejs.org/) versi LTS (v18 atau lebih baru).
    * Package manager `npm` (biasanya terinstal bersama Node.js) atau `yarn`.
    * Text Editor pilihan Anda (misalnya [Visual Studio Code](https://code.visualstudio.com/)).
    * Web browser modern (Google Chrome atau Firefox direkomendasikan).

## Struktur Praktikum

Praktikum ini terdiri dari 14 modul teori dan diakhiri dengan sebuah studi kasus untuk menerapkan semua pengetahuan yang telah dipelajari.

Setiap direktori modul akan berisi:

* File `README.md` dengan penjelasan teori.
* Contoh kode untuk materi yang dibahas.
* Latihan untuk menguji pemahaman Anda.

---

## **Panduan Praktikum React 18 Modern**

Struktur ini dirancang agar alur belajar menjadi lebih intuitif, dimulai dari fondasi paling dasar hingga konsep lanjutan, sesuai dengan dokumentasi resmi dan kebutuhan industri saat ini.

### **Bagian 1: Fondasi React**

Bagian ini fokus pada konsep inti yang wajib dikuasai setiap developer React.

1.  **ReactJS #01: Pengenalan & "Thinking in React"** 🧠
    * *Memahami apa itu React, filosofi di baliknya, dan cara memecah desain UI menjadi komponen-komponen kecil.*

2.  **ReactJS #02: Setup Project & Struktur Direktori** 🚀
    * *Menggunakan tool modern seperti Vite untuk membuat proyek React 18 baru dengan cepat.*

3.  **ReactJS #03: Komponen, JSX, dan Props** 📦
    * *Membuat komponen fungsional pertama, memahami JSX, dan cara komponen berkomunikasi dari induk ke anak (parent-to-child) lewat props.*

4.  **ReactJS #04: State & Event Handling (Hook `useState`)** ✨
    * *Membuat komponen menjadi dinamis dan interaktif menggunakan Hook `useState` untuk mengelola data internal dan merespons aksi pengguna (seperti klik).*

5.  **ReactJS #05: Conditional Rendering & Rendering Lists** 📋
    * *Menampilkan UI secara dinamis berdasarkan kondisi (jika/maka) dan cara me-render daftar data dari sebuah array, termasuk pentingnya `key` prop.*

6.  **ReactJS #06: Styling Komponen di React** 🎨
    * *Mempelajari berbagai metode styling: CSS biasa, CSS Modules, dan pengenalan CSS-in-JS (seperti Styled Components atau Emotion).*

---

### **Bagian 2: Konsep Tingkat Menengah**

Setelah fondasi kuat, kita masuk ke kasus penggunaan yang lebih kompleks dan umum di dunia nyata.

7.  **ReactJS #07: Side Effects & Fetching API (Hook `useEffect`)** 🌐
    * *Mengelola "efek samping" seperti mengambil data dari server (API), memanipulasi DOM, atau mengatur timer menggunakan Hook `useEffect`.*

8.  **ReactJS #08: Mengelola Form & Input** 📝
    * *Membangun form yang fungsional, mengelola state untuk banyak input, dan melakukan validasi sederhana.*

9.  **ReactJS #09: Routing dengan React Router** 🗺️
    * *Membangun aplikasi multi-halaman (Single Page Application/SPA) agar pengguna bisa bernavigasi tanpa me-refresh browser.*

10. **ReactJS #10: Global State dengan Context API** 🔄
    * *Berbagi state ke seluruh aplikasi tanpa perlu "prop drilling" (mengoper props lewat banyak level), langsung menggunakan fitur bawaan React 18.*

---

### **Bagian 3: Topik Lanjutan & Ekosistem**

Topik untuk memperdalam keahlian, optimasi, dan penggunaan library populer di ekosistem React.

11. **ReactJS #11: Membuat Custom Hooks** 🔧
    * *Mengekstrak dan menggunakan kembali logika stateful antar komponen, sebuah pola yang sangat powerful untuk kode yang bersih.*

12. **ReactJS #12: Optimasi Performa** ⚡
    * *Mengenal `React.memo`, `useCallback`, dan `useMemo` untuk mencegah render yang tidak perlu dan membuat aplikasi lebih cepat.*

13. **ReactJS #13: Pengenalan State Management Library (Zustand/Redux Toolkit)** 📚
    * *Memahami kapan dan mengapa kita memerlukan library pihak ketiga untuk state management pada aplikasi skala besar.*

14. **ReactJS #14: Dasar Pengujian Komponen (Component Testing)** ✅
    * *Pengenalan Jest dan React Testing Library untuk memastikan komponen berjalan sesuai harapan.*

---

### **Proyek Akhir**

15. **Studi Kasus: Membangun & Deploy Aplikasi Fungsional** 🏆
    * *Menerapkan semua konsep yang telah dipelajari untuk membangun sebuah proyek nyata dari awal hingga akhir dan melakukan deployment ke platform seperti Vercel atau Netlify.*


## **Referensi dan Sumber Belajar Tambahan**

Untuk memperdalam pemahaman Anda, sangat disarankan untuk mengunjungi sumber-sumber berikut yang menjadi standar industri dan selalu diperbarui.

#### **Dokumentasi Utama**

* **[React.dev](https://id.react.dev/learn)** - **(WAJIB)** Sumber kebenaran utama untuk semua tentang React. Dokumentasi baru ini sangat interaktif dan mudah dipahami.
* **[MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Referensi terbaik untuk memahami konsep dasar hingga lanjutan JavaScript, yang merupakan fondasi dari React.
* **[Vite.js Official Docs](https://vitejs.dev/)** - Dokumentasi resmi untuk *build tool* modern yang sangat cepat dan direkomendasikan untuk memulai proyek React baru.

#### **Routing**

* **[React Router](https://reactrouter.com/)** - Dokumentasi lengkap untuk library routing paling populer di ekosistem React.

#### **State Management**

* **[Redux Toolkit](https://redux-toolkit.js.org/)** - Panduan resmi dan cara modern yang direkomendasikan untuk menggunakan Redux.
* **[Zustand](https://github.com/pmndrs/zustand)** - Dokumentasi untuk Zustand, alternatif state management global yang lebih sederhana dan minimalis.

#### **Styling**

* **[Styled Components](https://styled-components.com/)** - Salah satu library CSS-in-JS paling populer untuk styling komponen.
* **[Emotion](https://emotion.sh/docs/introduction)** - Alternatif populer untuk Styled Components dengan performa tinggi.
* **[Tailwind CSS](https://tailwindcss.com/)** - Pendekatan *utility-first* yang sangat populer untuk styling cepat tanpa meninggalkan HTML Anda.

#### **Pengujian (Testing)**

* **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Panduan untuk menguji komponen React sesuai dengan bagaimana pengguna berinteraksi dengannya.
* **[Jest](https://jestjs.io/)** - *Test runner* yang paling umum digunakan bersama React Testing Library.

#### **Deployment**

* **[Vercel](https://vercel.com/docs)** - Platform yang dibuat oleh kreator Next.js, sangat dioptimalkan untuk deployment aplikasi React.
* **[Netlify](https://docs.netlify.com/)** - Alternatif yang sangat populer dan mudah digunakan untuk deployment aplikasi web modern.