import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/Notification';
import { Content } from '@application/entities/content';

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

  // Converte Notification do prisma para a entidade da camada de domínio da aplicação
  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt, // Nesse caso é uma notificação já existente que queremos salvar no banco, por isso o campo preenchido
      },
      raw.id, // Id que já existe no banco de dados, NÃO é uma nova notificação
    );
  }
}
