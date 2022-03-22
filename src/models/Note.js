const { Schema, model } = require('mongoose');

const NoteSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model('Note', NoteSchema);
