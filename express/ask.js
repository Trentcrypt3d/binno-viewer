
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Midware
app.use(cors());
app.use(express.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'binnoviewer'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/ask', (req, res) => {
    const query = 'SELECT question, answer FROM faqs';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data from database:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(results);
    });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is runnin on port ${PORT}`);
});
