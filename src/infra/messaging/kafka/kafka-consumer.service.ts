import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices'; // consumer (producer usa o ClientKafka)

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    // Chamando o constructor do ServerKafka com super()
    super({
      client: {
        clientId: 'notifications',
        brokers: [process.env.KAFKA_BROKERS!],
        sasl: {
          mechanism: 'scram-sha-256',
          username: process.env.KAFKA_USERNAME!,
          password: process.env.KAFKA_PASSWORD!,
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
