import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import pool from '@/lib/db';
import Link from 'next/link';

const JWT_SECRET = process.env.JWT_SECRET || 'samp_secret_key_change_in_prod';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('ucp_token')?.value;

  if (!token) {
    redirect('/login');
  }

  let decoded: any;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    redirect('/login');
  }

  const ucpName = decoded.ucpName;

  // Fetch Characters
  const [characters]: any = await pool.query(
    'SELECT Char_Name, Char_Level, Char_Money, Char_BankMoney, Char_Hours, Char_Faction FROM player_characters WHERE Char_UCP = ?',
    [ucpName]
  );

  return (
    <div className="container animate-fade-in" style={{ marginTop: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>Dasbor</h1>
          <p style={{ color: 'var(--text-muted)' }}>Selamat datang kembali, <strong style={{ color: 'white' }}>{ucpName}</strong></p>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Daftar Karaktermu ({characters.length})
      </h2>

      {characters.length === 0 ? (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Kamu belum memiliki karakter sama sekali.</p>
          <p style={{ color: 'var(--text-muted)' }}>Silakan login ke server SA:MP menggunakan UCP ini untuk membuat karakter pertamamu!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {characters.map((char: any, index: number) => (
            <div key={index} className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{char.Char_Name.replace('_', ' ')}</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <div><strong>Level:</strong> {char.Char_Level}</div>
                <div><strong>Jam Main:</strong> {char.Char_Hours}</div>
                <div><strong>Uang Tunai:</strong> ${char.Char_Money.toLocaleString()}</div>
                <div><strong>Uang Bank:</strong> ${char.Char_BankMoney.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
