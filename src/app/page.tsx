import Link from "next/link";

export default function Home() {
  return (
    <main className="container animate-fade-in">
      <div style={{ textAlign: 'center', marginTop: '6rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #3b82f6, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Selamat Datang di Nocturne Roleplay
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Rasakan pengalaman roleplay paling imersif. Buat karaktermu, bergabung dengan fraksi, dan bangun prestasimu di kota ini.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/login" className="btn btn-accent">
            Login UCP
          </Link>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer" className="btn" style={{ background: '#5865F2' }}>
            Gabung ke Discord
          </a>
          <Link href="/guide" className="btn" style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.5)' }}>
            Baca Panduan Roleplay
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '6rem' }}>
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Sistem Ekonomi Nyata</h3>
          <p style={{ color: 'var(--text-muted)' }}>Mulai dari perdagangan bisnis hingga kendaraan, segalanya dikontrol oleh interaksi pemain dan ekonomi dinamis.</p>
        </div>
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Fraksi Aktif</h3>
          <p style={{ color: 'var(--text-muted)' }}>Bergabunglah dengan Kepolisian, Tenaga Medis, Pemerintahan Kota, atau bahkan merintis dunia kriminal bawah tanah.</p>
        </div>
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#8b5cf6' }}>Kustomisasi Terhubung</h3>
          <p style={{ color: 'var(--text-muted)' }}>Kamu bisa memantau statistik karakter, kekayaan, dan informasi lainnya secara langsung lewat Dasbor UCP.</p>
        </div>
      </div>
    </main>
  );
}
