import { Notification } from '../entities/Notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>; // null é caso a notificação não exista
  abstract save(notification: Notification): Promise<void>;
}
