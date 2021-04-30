const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET API/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find().then((items) => res.json(items));
});

// @route  POST API/items
// @desc   Create a Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    text: req.body.text,
  });

  newItem.save().then((item) => res.json(item));
});

// @route  DELETE API/items:id dddd
// @desc   Delete item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route  PUT API/items:id
// @desc   Update item
// @access Public

router.put('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.text = req.body.text;
      item.completed = req.body.completed;

      item
        .save()
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(400).json({ success: false }));
    })
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
