"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNote = exports.trashNote = exports.newNote = exports.getNote = exports.getAllNote = exports.deleteNote = exports.archiveNote = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _redisDataBase = require("../config/redisDataBase");

var _note = _interopRequireDefault(require("../models/note.model"));

// import noteModel from '../models/note.model';
//create new note
var newNote = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var note;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(body);
            _context.next = 3;
            return _note["default"].create(body);

          case 3:
            note = _context.sent;

            if (!note) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return _redisDataBase.client.del('getall');

          case 7:
            return _context.abrupt("return", note);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function newNote(_x) {
    return _ref.apply(this, arguments);
  };
}(); //get all Note 


exports.newNote = newNote;

var getAllNote = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var note;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _note["default"].find();

          case 2:
            note = _context2.sent;

            if (!note) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return _redisDataBase.client.set('getall', JSON.stringify(note));

          case 6:
            return _context2.abrupt("return", note);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllNote() {
    return _ref2.apply(this, arguments);
  };
}(); //get a Note 


exports.getAllNote = getAllNote;

var getNote = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var note;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _note["default"].findById(id);

          case 2:
            note = _context3.sent;
            return _context3.abrupt("return", note);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getNote(_x2) {
    return _ref3.apply(this, arguments);
  };
}(); //update note by id


exports.getNote = getNote;

var updateNote = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var note;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });

          case 2:
            note = _context4.sent;
            return _context4.abrupt("return", note);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateNote(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}(); //delete single note by id


exports.updateNote = updateNote;

var deleteNote = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _note["default"].findByIdAndDelete(id);

          case 2:
            return _context5.abrupt("return", '');

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteNote(_x5) {
    return _ref5.apply(this, arguments);
  };
}(); //Archive note by id


exports.deleteNote = deleteNote;

var archiveNote = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_id) {
    var note;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, {
              isArchived: true
            }, {
              "new": true
            });

          case 2:
            note = _context6.sent;
            return _context6.abrupt("return", note);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function archiveNote(_x6) {
    return _ref6.apply(this, arguments);
  };
}(); //Archive note by id


exports.archiveNote = archiveNote;

var trashNote = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_id) {
    var note;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, {
              isTrashed: true
            }, {
              "new": true
            });

          case 2:
            note = _context7.sent;
            return _context7.abrupt("return", note);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function trashNote(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.trashNote = trashNote;