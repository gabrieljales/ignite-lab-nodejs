import { Notification } from '@application/entities/Notification';

export class PrismaNotificationMapper {
  // Método static para não ser necessário instanciar a classe
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
