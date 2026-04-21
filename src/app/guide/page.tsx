export default function Guide() {
  return (
    <div className="container animate-fade-in" style={{ marginTop: '3rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>Panduan Bermain (Roleplay Guide)</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Peraturan dasar dan panduan esensial untuk bermain di server kami.</p>
      
      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>1. Apa itu Roleplay?</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
          Roleplay (Peran) adalah tindakan memerankan seorang karakter fiksi dalam dunia virtual. Anda diharapkan untuk bertingkah laku, bereaksi, dan merespons layaknya karakter Anda di dunia nyata.
        </p>
      </div>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>2. Peraturan Dasar</h2>
        <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent)' }}>Powergaming (PG):</strong> Memaksakan tindakan terhadap pemain lain tanpa memberi mereka kesempatan untuk bereaksi, atau melakukan hal yang mustahil dilakukan di dunia nyata.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent)' }}>Metagaming (MG):</strong> Menggunakan informasi di luar karakter / Out-Of-Character (OOC) untuk kepentingan di dalam karakter / IN-Character (IC).</li>
          <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent)' }}>Deathmatching (DM):</strong> Membunuh atau menyerang pemain lain tanpa alasan In-Character yang jelas.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent)' }}>Revenge Kill (RK):</strong> Mencari balas dendam dengan cara membunuh orang yang membunuh karaktermu tepat setelah karaktermu mati.</li>
        </ul>
      </div>

      <div className="glass-panel">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>3. Perintah Peran (Commands)</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', marginBottom: '1rem' }}>
          Gunakan <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>/me</code> untuk melakukan aksi/tindakan karakter: <br/>
          <em>/me merogoh saku celananya lalu mengeluarkan sebuah dompet.</em>
        </p>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
          Gunakan <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>/do</code> untuk menjelaskan kondisi sekitar atau hasil dari sebuah tindakan: <br/>
          <em>/do Terlihat dompet terbuat dari kulit dan berisi beberapa kartu di dalamnya.</em>
        </p>
      </div>
    </div>
  );
}
