import mysql from 'mysql';

let connection: mysql.Connection;

export const connectDatabase = () => {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wappnet',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.stack);
      return;
    }
    console.log('Connected to the database as ID ' + connection.threadId);
  });
};

export const getDatabase = () => connection;
