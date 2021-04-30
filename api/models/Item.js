const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoItemSchema = new Schema({
  text: { type: String, required: true, trim: true, minlength: 3 },
  completed: { type: Boolean, default: false },
});

module.exports = Item = mongoose.model('ToDo_items', ToDoItemSchema);
