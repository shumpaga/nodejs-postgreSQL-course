const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const { rows } = await db.query(
      // FIXME: Utiliser la fonction query pour insérer un nouvel utilisateur
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const { rows } = await db.query(
      // FIXME: Utiliser la fonction query pour récupérer tous les utilisateurs triés par id
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// Get a single user by id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      // FIXME: Utiliser la fonction query pour récupérer un utilisateur par son id
    );
    /*
     * FIXME: Si aucun utilisateur n'est trouvé, retourner une erreur 404
     * FIXME: Sinon, retourner l'utilisateur trouvé
     */
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
      // FIXME: Utiliser la fonction query pour mettre à jour un utilisateur par son id
    );
    /*
     * FIXME: Si aucun utilisateur n'est trouvé, retourner une erreur 404
     * FIXME: Sinon, retourner l'utilisateur mis à jour
     */
  } catch (err) {
    next(err);
  }
});

// Delete a user by id
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      // FIXME: Utiliser la fonction query pour supprimer un utilisateur par son id
    );
    /*
     * FIXME: Si aucun utilisateur n'est trouvé, retourner une erreur 404
     * FIXME: Sinon, retourner l'utilisateur supprimé
     */
  } catch (err) {
    next(err);
  }
});

module.exports = router;
