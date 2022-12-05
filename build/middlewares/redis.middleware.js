"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCache = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _redisDataBase = require("../config/redisDataBase");

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var checkCache = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var redisData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _redisDataBase.client.get('getall');

          case 2:
            redisData = _context.sent;

            if (redisData) {
              res.status(_httpStatusCodes["default"].OK).json({
                code: _httpStatusCodes["default"].OK,
                data: JSON.parse(redisData),
                message: "All cache notes fatched....."
              });
            } else {
              next();
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkCache(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkCache = checkCache;