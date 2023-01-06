import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    MessagingModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
