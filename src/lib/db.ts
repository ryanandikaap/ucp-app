import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '147.139.244.154',
  user: 'u43_XcFztNgcZ4',
  password: 'sHA+^cw6dH^5TrNI4O@Ztqkh',
  database: 's43_ntrp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
