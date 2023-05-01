const { Pool } = require('pg')

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query', {query: text, duration: `${duration} milliseconds`, rows: res.rowCount });
  return res;
}


module.exports = {
  query: async (text, params) => query(text, params),
}