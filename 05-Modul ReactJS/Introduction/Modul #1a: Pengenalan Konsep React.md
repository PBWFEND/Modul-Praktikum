# **ReactJS \#01: Pengenalan Konsep Inti React**

![image](https://d5gp1bgprhhde.cloudfront.net/wp-content/uploads/2023/01/react.png)

Selamat datang di modul pertama dalam perjalanan Anda menguasai React\!

Di bagian ini, kita tidak akan langsung menulis kode. Sebaliknya, kita akan membangun fondasi pemahaman yang kuat tentang **apa itu React**, **mengapa ia diciptakan**, dan **konsep-konsep kunci** yang membuatnya begitu powerful. Memahami "mengapa"-nya akan membuat proses belajar "bagaimana"-nya menjadi jauh lebih mudah.

## **Apa Itu React? Library atau Framework?** 💡

![s1](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54932419-622e26a67456f3481c49046f3f51ca03.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T190103Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f7e4ec9bb8f7a93f1aa030ff05235f0feb2af8f97d0b901bb90377f24ba6f43a)

Secara sederhana:

> React adalah sebuah **library JavaScript** yang dikhususkan untuk membangun antarmuka pengguna (User Interface atau UI) yang interaktif dan modern.

Anda mungkin sering mendengar perdebatan apakah React itu sebuah *library* atau *framework*. Mari kita jelaskan dengan analogi sederhana:

  * **Library (Perpustakaan):** Bayangkan Anda pergi ke toko perkakas. Anda bebas memilih palu, obeng, atau gergaji yang Anda butuhkan untuk membangun sebuah kursi. **Library** memberi Anda alat, tetapi Anda yang menentukan bagaimana cara membangun kursinya. React adalah sebuah library karena ia fokus pada satu hal: membantu Anda membangun UI. Anda bebas memilih "alat" lain untuk hal-hal seperti *routing* atau *state management*.

  * **Framework (Kerangka Kerja):** Bayangkan Anda membeli sebuah furnitur rakitan dari IKEA. Anda mendapatkan semua bagian, baut, dan buku instruksi yang ketat. Anda harus mengikuti aturan dan struktur yang sudah disediakan untuk membangunnya. **Framework** memberi Anda kerangka kerja lengkap dengan aturan yang mengikat.

**Jadi, kesimpulannya?**
Secara teknis, **React adalah sebuah library**. Namun, karena ekosistemnya yang sangat luas (dengan adanya React Router untuk navigasi, Redux/Zustand untuk state, dll.), ia seringkali digunakan seperti sebuah framework. Keduanya adalah sebutan yang bisa diterima dalam percakapan sehari-hari.

## **Mengapa React Diciptakan? (Kisah dari Facebook)** 📜

Sekitar tahun 2011, Facebook menghadapi masalah besar. Aplikasi web mereka, terutama News Feed, menjadi sangat kompleks. Ada banyak sekali bagian yang harus diperbarui secara *real-time*: status baru, komentar, notifikasi, daftar chat, dll.

Menggunakan pendekatan tradisional (seperti jQuery) untuk mengelola semua perubahan ini menjadi sangat rumit dan rawan kesalahan (*buggy*). Mengubah satu bagian kecil bisa secara tidak sengaja merusak bagian lain di halaman. Performa aplikasi pun menurun karena browser harus bekerja terlalu keras untuk memperbarui banyak elemen sekaligus.

![s2](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54932529-ad058b55b83b4a3228a37aa1d77c4800.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250611%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250611T190736Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f43d770bd5155f93139dc57815ffbbaa361787c1623969debdaa322367374bbc)

Facebook butuh solusi. Mereka butuh cara baru untuk membangun UI yang:

1.  **Terorganisir:** Mudah dikelola meskipun aplikasinya sangat besar.
2.  **Efisien:** Cepat dan tidak membuat browser terbebani.
3.  **Prediktif:** Perubahan state di satu tempat hanya akan mempengaruhi bagian yang seharusnya, tidak menyebar ke mana-mana.

Dari kebutuhan inilah, seorang software engineer di Facebook bernama **Jordan Walke** menciptakan prototipe pertama React.

## **Dua Konsep Kunci yang Mengubah Segalanya** 🔑

React memperkenalkan dua ide revolusioner yang menjadi pilar utamanya. Memahami dua konsep ini berarti Anda sudah memahami 50% dari keajaiban React.

### **1. Arsitektur Berbasis Komponen (Component-Based Architecture)**

Bayangkan Anda sedang bermain dengan balok **LEGO**. Anda tidak membangun sebuah kastil dari satu bongkahan batu besar, kan? Anda menyusunnya dari ratusan balok kecil: balok untuk dinding, balok untuk menara, balok untuk gerbang.

Itulah cara React melihat sebuah website.

> **Komponen** adalah balok LEGO untuk UI Anda. Setiap bagian dari antarmuka—tombol, kolom pencarian, kartu profil, bahkan seluruh halaman—adalah sebuah komponen.

Komponen-komponen ini bersifat:

  * **Independen:** Setiap komponen punya logika dan tampilannya sendiri. Mengubah komponen tombol tidak akan merusak komponen kolom pencarian.
  * **Reusable (Dapat Digunakan Kembali):** Anda bisa membuat satu komponen `Tombol` dan menggunakannya di 50 tempat berbeda di seluruh aplikasi Anda.
  * **Composable (Dapat Disusun):** Anda bisa membangun komponen yang lebih besar dengan menggabungkan komponen-komponen yang lebih kecil. Misalnya, sebuah komponen `KartuProfil` bisa terdiri dari komponen `GambarProfil`, `NamaPengguna`, dan `TombolIkuti`.

Pendekatan ini membuat UI yang kompleks menjadi sangat mudah dikelola.

### **2. Virtual DOM**

Facebook mengembangkan ReactJS dengan konsep `Virtual DOM. `

..dan mengapa penting?

![Virtual DOM Illustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920429-c02677bd1421d9addfd01b896e2bc8c1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T012148Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=ffdd5f42a25667784447e3b17fd63f173ceaeb9935aecfd192aef996e521e499)

![Virtual Dom Illustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920483-586b101ba3c5a5be2b2810cecdc74e60.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T012417Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f7b6f9a1ad938b9ebcdf4a7d0e88e01df5251fddb254685903b5f0c277600571)

![Virtual Dom Ilustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920525-83e8d3d28327cc5b3bb1c991da762d11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T012442Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=1fc206f6b352c08df2fc57bc6dafc4a8972eac9c5e203dc7b73488316930cb24)

![Virtual Dom Illustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920554-b6acd419de9760e84e227af69050c978.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T012507Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=e389e39fd659640574946d99b1bc94428342e5ca26200ab0b71e4606ab7e2e50)

![Virtual Dom Ilustration](https://awesomescreenshot.s3.amazonaws.com/image/4565304/54920580-b88d6e360cf9bd358148783bc6092efc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250612%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T014302Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=9e93ea2e81bb621e0a40f8a2b4d2884fba01bad5e7050757e71218f8dbeee6a3)

Gimana udah paham belum ?

Dalam prakteknya, kita tidak akan membuat `Virtual DOM` sendiri..
karena sudah ada di dalam React. Kita pakai aja.

Jadi, anda perlu pahami dahulu konssep (VDOM) ini biar paham saat belajar React.

### Versi React

- [Versi 18](https://18.react.dev/versions)

- [React 19](https://react.dev/versions), versi saat ini yang banyak membawa peningkatan signifikan pada framework ini.

Meskipun banyak fitur seperti `Mode Concurrent`, `useId`, dan `useTransition` sudah diperkenalkan di React 18, React 19 menyempurnakannya dan membawa fitur revolusioner baru, yaitu:

- **React Compiler**: Optimasi kode otomatis yang membuat kita tidak perlu lagi menulis `useMemo` atau `useCallback` secara manual.
- **Actions**: Cara baru yang lebih sederhana untuk menangani `form` dan perubahan data, mengurangi kode `boilerplate`.
- **Server Components**: Integrasi yang lebih matang untuk membangun aplikasi full-stack langsung dengan React."

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

3. **Node.js dan NPM** (opsional untuk modul pertama ini, namun wajib untuk pengembangan profesional)
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
>
> - Untuk saat ini kita akan memulai dengan web browser dan text editor dasar terlebih dahulu sebelum menggunakan Node.js.
>
> - Sebelum melanjutkan, pastikan anda sudah memahami konsep dasar JavaScript ES6 seperti yang telah di pelajari sebelumnya:
>   - Class
>   - Arrow Functions
>   - Variables (let, const, var)

Karena fitur-fitur tersebut akan sering digunakan dalam pengembangan React.

Jika semua persiapan sudah selesai, mari kita mulai belajar ReactJS!

## **Apa Selanjutnya?**

Selamat\! Anda sekarang sudah memahami konsep fundamental di balik React. Anda tahu bahwa React membantu kita membangun UI dengan:

  * **Komponen:** Balok LEGO yang bisa disusun dan digunakan kembali.
  * **Virtual DOM:** Manajer cerdas yang memastikan aplikasi kita tetap cepat.

Dengan fondasi teori ini, kita akan mulai menulis kode pertama kita dan membuktikan semua konsep ini dalam praktik nyata.
