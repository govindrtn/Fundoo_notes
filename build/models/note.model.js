"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Descreption: {
    type: String,
    required: true
  },
  Colour: {
    type: String
  },
  isArchived: {
    type: Boolean,
    "default": false
  },
  isTrashed: {
    type: Boolean,
    "default": false
  },
  UserID: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Note', userSchema);

exports["default"] = _default;