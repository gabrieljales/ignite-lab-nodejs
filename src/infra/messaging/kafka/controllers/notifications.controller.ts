import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
  // Sempre que houver um evento nesse tópico, faça algo
  @EventPattern('notifications.send-notification')
  async handleSendNotifications() {
    console.log('Message!');
  }
}
