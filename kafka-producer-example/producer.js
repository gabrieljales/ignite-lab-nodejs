/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const { Kafka } = require('kafkajs');
const { randomUUID } = require('node:crypto');

dotenv.config();

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: [process.env.KAFKA_BROKERS],
    sasl: {
      mechanism: 'scram-sha-256',
      username: process.env.KAFKA_USERNAME,
      password: process.env.KAFKA_PASSWORD,
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade.',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
