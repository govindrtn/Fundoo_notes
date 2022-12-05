"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.client = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _redis = require("redis");

var _logger = _interopRequireDefault(require("./logger"));

var client = (0, _redis.createClient)();
exports.client = client;

var redis = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.connect();

          case 3:
            console.log("connected to Redis dataBase....");

            _logger["default"].info('Connected to the Redis database.');

            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("unable to connect with redis please check your connection....", _context.t0);

            _logger["default"].error('Could not connect to the database.', _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function redis() {
    return _ref.apply(this, arguments);
  };
}();

var _default = redis;
exports["default"] = _default;