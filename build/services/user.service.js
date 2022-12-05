"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = exports.resetPassword = exports.registerUser = exports.forgetPassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _user = _interopRequireDefault(require("../models/user.model"));

var utilServices = _interopRequireWildcard(require("../utils/sendMail"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// dotenv.config();
var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var _require = require('../utils/RabbitMQ'),
    sender = _require.sender; // route to create register a user


var registerUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var result, saltRound, hashPassword, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("request body ---------> ", body);
            console.log("before hashing ---------> ", body.password);
            _context.next = 4;
            return _user["default"].findOne({
              email: body.email
            });

          case 4:
            result = _context.sent;

            if (!(result != null)) {
              _context.next = 9;
              break;
            }

            throw new Error("user is already here .....");

          case 9:
            saltRound = 11;
            hashPassword = bcrypt.hashSync(body.password, saltRound);
            _context.next = 13;
            return _user["default"].create({
              firstName: body.firstName,
              lastName: body.lastName,
              email: body.email,
              password: hashPassword
            });

          case 13:
            data = _context.sent;
            console.log("after hashing ---------> ", body.password);
            sender(data);
            return _context.abrupt("return", data);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registerUser(_x) {
    return _ref.apply(this, arguments);
  };
}(); // route to login user 


exports.registerUser = registerUser;

var userLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data, isValid, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findOne({
              email: body.email
            });

          case 2:
            data = _context2.sent;

            if (!(data != null)) {
              _context2.next = 14;
              break;
            }

            isValid = bcrypt.compareSync(body.password, data.password);

            if (!isValid) {
              _context2.next = 11;
              break;
            }

            token = jwt.sign({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email
            }, process.env.SECRET_KEY);
            console.log("Login successfully......");
            return _context2.abrupt("return", token);

          case 11:
            throw new Error("invalid pasword......");

          case 12:
            _context2.next = 15;
            break;

          case 14:
            throw new Error("invalid email id......");

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function userLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // route to forget password 


exports.userLogin = userLogin;

var forgetPassword = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var data, Token, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].findOne({
              email: body.email
            });

          case 2:
            data = _context3.sent;

            if (!data) {
              _context3.next = 12;
              break;
            }

            Token = jwt.sign({
              email: data.email,
              id: data._id
            }, process.env.NEW_SECRET_KEY);
            console.log("new token ---------->  ", Token);
            _context3.next = 8;
            return utilServices.sendMail(data.email, Token);

          case 8:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 12:
            throw new Error("email id not match...");

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function forgetPassword(_x3) {
    return _ref3.apply(this, arguments);
  };
}(); // route to forget password 


exports.forgetPassword = forgetPassword;

var resetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(body) {
    var saltRound, newHashPassword, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            saltRound = 10;
            _context4.next = 3;
            return bcrypt.hashSync(body.password, saltRound);

          case 3:
            newHashPassword = _context4.sent;
            _context4.next = 6;
            return _user["default"].findOneAndUpdate({
              email: body.email
            }, {
              password: newHashPassword
            }, {
              "new": true
            });

          case 6:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function resetPassword(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.resetPassword = resetPassword;