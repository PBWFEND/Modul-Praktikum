// Mengimpor file CSS untuk komponen ini
import "./App.css";

// Komponen App utama yang berfungsi sebagai akar dari aplikasi React kita
function App() {
  return (
    // Fragment sebagai pembungkus untuk mengelompokkan beberapa elemen tanpa menambahkan node DOM tambahan
    <>
      {/* Judul utama yang menampilkan nama */}
      <h1 className="title">Hi, I'm Yanyan Sofiyan</h1>
      {/* Paragraf subjudul dengan pesan selamat datang */}
      <p className="subtitle">Selamat datang di perjalanan belajar React saya!</p>
      {/* Paragraf teks utama */}
      <p>
        Saya adalah mahasiswa Fakultas Teknologi Informasi di Universitas
        Sebelas April yang mengambil jurusan Sistem Informasi, dan saat ini saya sedang
        belajar React dengan penuh semangat.
      </p>
    </>
  );
}

// Mengekspor komponen App sebagai ekspor default
export default App;
