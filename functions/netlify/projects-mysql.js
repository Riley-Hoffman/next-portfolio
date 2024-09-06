const mysql = require('mysql2/promise');

exports.handler = async (event, context) => {
  try {
    const db = await mysql.createConnection({
      host: Netlify.env.DB_HOST,
      user: Netlify.env.DB_USER,
      password: Netlify.env.DB_PASSWORD,
      database: Netlify.env.DB_NAME,
    });

    const [rows] = await db.execute('SELECT * FROM projects');
    
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Database connection failed' }),
    };
  }
};
