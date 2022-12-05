
const amqp = require('amqplib/callback_api');

let queueName = "User Register"

export const sender = (data) => {
    amqp.connect('amqp://localhost', (error, connection) => {
        if (error) {
            throw error;
        }
        connection.createChannel((error, channel) => {
            if (error) {
                throw error;
            }
            channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
            console.log(`message :  ${data}`);
        });
    });
}

const receiver = () => {
    amqp.connect('amqp://localhost', (error, connection) => {
        if (error) {
            throw error;
        }
        connection.createChannel((error, channel1) => {
            if (error) {
                throw error;
            }
            channel1.consume(queueName, (data) => {
                if (data) {
                    let msg = (data.content)
                    console.log("Reciver------------>", JSON.parse(msg));
                }
                else {
                    console.log("Consumer cancelled....................");
                }
            })
        })
    })
}
receiver()