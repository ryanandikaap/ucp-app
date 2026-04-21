"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [ucp, setUcp] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ucp, password })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Gagal login');
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError('Terjadi kesalahan saat proses login');
    }
  };

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--primary)' }}>Login UCP</h2>
        
        {error && <div style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nama UCP</label>
            <input 
              type="text" 
              className="input-field" 
              value={ucp} 
              onChange={(e) => setUcp(e.target.value)} 
              placeholder="Masukkan Nama UCP"
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Kata Sandi</label>
            <input 
              type="password" 
              className="input-field" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Masukkan Kata Sandi"
              required 
            />
          </div>

          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>
            Masuk
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)' }}>
          Belum punya UCP? Daftar melalui Bot Discord kami.
        </p>
      </div>
    </div>
  );
}
