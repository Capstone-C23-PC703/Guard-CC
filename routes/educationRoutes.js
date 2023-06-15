const express = require('express');
const router = express.Router();
const educations = require('../data/educations.json');

// Endpoint untuk mendapatkan semua data edukasi
router.get('/educations', (req, res) => {
    const titles = educations.map(edu => edu.title);
    res.json(titles);
  });

// Endpoint untuk mendapatkan data edukasi berdasarkan ID
router.get('/educations/:id', (req, res) => {
  const id = req.params.id;
  const education = educations.find(edu => edu.id == id);

  if (!education) {
    res.status(404).json({ error: 'Education not found' });
    return;
  }

  res.json(education);
});

module.exports = router;
