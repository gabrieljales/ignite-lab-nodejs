import { Content } from '../entities/content';
import { Notification } from '../entities/Notification';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // Retornando um objeto (explicação dos benefícios disso no Notion)
    return {
      notification,
    };
  }
}
