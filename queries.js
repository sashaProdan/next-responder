const Pool = require('pg').Pool
const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
})

// GET: /categories
const getCategories = (request, response) => {
    pool.query('SELECT * FROM categories ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

// GET: /categories/:id
const getCategoryById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT FROM categories where id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}



module.exports = {
    getCategories,
    getCategoryById,
}