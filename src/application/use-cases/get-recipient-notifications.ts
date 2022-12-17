import { Notification } from '@application/entities/Notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface IGetRecipientsNotificationsRequest {
  recipientId: string;
}

interface IGetRecipientsNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientsNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: IGetRecipientsNotificationsRequest,
  ): Promise<IGetRecipientsNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
