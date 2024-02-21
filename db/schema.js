const mysql = require('mysql2');
require('dotenv').config();

// MySQL connection configuration
const connection = mysql.createConnection(
  process.env.JAWSDB_URL
    ? {
        host: process.env.JAWSDB_URL,
      }
    : {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      }
);

// Connect to MySQL
connection.connect((err) =>
  err
    ? console.error('Error connecting to MySQL:', err)
    : console.log('Connected to MySQL')
);

// Create a new database
connection.query(
  `CREATE DATABASE IF NOT EXISTS fitness_tracker;`,
  (createDbErr) =>
    createDbErr
      ? console.error('Error creating database:', createDbErr)
      : console.log(`Database fitness_tracker created successfully`)
);

// Close the connection when done
connection.end((endErr) =>
  endErr
    ? console.error('Error closing MySQL connection:', endErr)
    : console.log('Connection closed')
);
