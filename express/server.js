const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'binnoviewer'
});

app.get('/faqs', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT question, answer FROM faqs');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/submitConcern', async (req, res) => {
  const { email, concernDetail } = req.body;

  if (!email || !concernDetail) {
    // Return a 400 Bad Request status with an error message
    return res.status(400).json({ error: 'Email and concern detail cannot be empty' });
  }

  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO concern (email, concerndetail) VALUES (?, ?)', [email, concernDetail]);
    connection.release();
    console.log('Concern submitted successfully:', { email, concernDetail });
    res.status(200).send('Concern submitted successfully!');
  } catch (error) {
    console.error('Error submitting concern:', error);
    res.status(500).json({ message: 'Internal server error', error: error  });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
