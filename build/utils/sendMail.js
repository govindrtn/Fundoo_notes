"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = sendMail;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _morgan = require("morgan");

var nodemailer = require('nodemailer');

var _require = require('googleapis'),
    google = _require.google;

var CLIENT_ID = '435843099448-u7varh96t18170dmu5jmol6i2anmgf0l.apps.googleusercontent.com';
var CLIENT_SECRET = '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';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//04lZtONIFWc7ACgYIARAAGAQSNwF-L9IrV5mfABTrQfmWPKn-BRfPTCpe_6Y2o8Uh8ZWHpSGT1VfkoaCfW_qR93hgYS0cZKZL8F4';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});

function sendMail(_x, _x2) {
  return _sendMail.apply(this, arguments);
} // sendMail().then(result => console.log("email sent....." , result))
// .catch(error => console.log(error.message))


function _sendMail() {
  _sendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, newToken) {
    var accessToken, transport, mailOption, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return oAuth2Client.getAccessToken();

          case 3:
            accessToken = _context.sent;
            transport = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                type: 'OAuth2',
                user: 'govindmaithilrtn@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
              }
            });
            mailOption = {
              from: 'Govind <govindmaithilrtn@gmail.com>',
              to: email,
              subject: "Hello from gmail API..",
              Text: 'Hello from gmail API',
              html: "<h1> forget password token  <a href = \"http://localhost:3000/api/users/".concat(newToken, "\">click here </a></h1>")
            };
            _context.next = 8;
            return transport.sendMail(mailOption);

          case 8:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _sendMail.apply(this, arguments);
}