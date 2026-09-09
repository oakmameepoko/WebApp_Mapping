const mysql = require('mysql2');

// สร้างการเชื่อมต่อแบบ Connection Pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'oak1234',                  // ใส่รหัสผ่านภาษาอังกฤษใหม่ที่นี่
  database: 'Mapping_Test',             // ระบุชื่อฐานข้อมูลที่ต้องการใช้งาน
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ทดสอบดึงข้อมูล
pool.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('Connection failed:', err.message);
    return;
  }
  console.log('Successfully connected to MySQL! Result:', results[0].result);
});