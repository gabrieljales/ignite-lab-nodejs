import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface ICountRecipientsNotificationsRequest {
  recipientId: string;
}

interface ICountRecipientsNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientsNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ICountRecipientsNotificationsRequest,
  ): Promise<ICountRecipientsNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
