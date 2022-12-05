"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sender = void 0;

var amqp = require('amqplib/callback_api');

var queueName = "User Register";

var sender = function sender(data) {
  amqp.connect('amqp://localhost', function (error, connection) {
    if (error) {
      throw error;
    }

    connection.createChannel(function (error, channel) {
      if (error) {
        throw error;
      }

      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
      console.log("message :  ".concat(data));
    });
  });
};

exports.sender = sender;

var receiver = function receiver() {
  amqp.connect('amqp://localhost', function (error, connection) {
    if (error) {
      throw error;
    }

    connection.createChannel(function (error, channel1) {
      if (error) {
        throw error;
      }

      channel1.consume(queueName, function (data) {
        if (data) {
          var msg = data.content;
          console.log("Reciver------------>", JSON.parse(msg));
        } else {
          console.log("Consumer cancelled....................");
        }
      });
    });
  });
};

receiver();