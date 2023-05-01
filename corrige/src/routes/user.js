const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const { rows } = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM users ORDER BY id ASC');
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// Get a single user by id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: `User with id ${id} not found` });
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    next(err);
  }
});

// Update a user by id
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const { rows } = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    if (rows.length === 0) {
      res.status(404).json({ message: `User with id ${id} not found` });
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    next(err);
  }
});

// Delete a user by id
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    if (rows.length === 0) {
      res.status(404).json({ message: `User with id ${id} not found` });
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
