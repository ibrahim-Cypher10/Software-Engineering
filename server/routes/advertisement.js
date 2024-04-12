// const express = require('express');
import express from 'express';
const router = express.Router();
// const Advertisement = require('../models/Advertisement'); // Adjust the path as necessary
import Advertisement from '../models/Advertisement.js';
// GET all advertisements
router.get('/', async (req, res) => {
  console.log("here i am ")
  console.log("why again")
  try {
    const ads = await Advertisement.find({});
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/:id/activate', async (req, res) => {
  console.log("Received ID: ", req.params.id);  // Log the received ID
  try {
    const ad = await Advertisement.findById(req.params.id);
    console.log("Found advertisement: ", ad);  // Log the found advertisement
    if (!ad) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }
    ad.active = !ad.active;
    await ad.save();
    res.status(200).json({ message: `Advertisement ${ad.active ? 'activated' : 'deactivated'}`, ad });
  } catch (error) {
    console.error("Error in activation/deactivation: ", error); // Log any error
    res.status(500).json({ message: error.message });
  }
});


export default router;
