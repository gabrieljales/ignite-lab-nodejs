import { Notification } from '@application/entities/Notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) {
      // O find retorna undefined quando não encontra nada, por preferência de trabalhar com null nós retornamos assim
      return null;
    }

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    // Se a notificação existir, vamos sobrepor com a notificação que queremos salvar
    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
