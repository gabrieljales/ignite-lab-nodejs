import { Content } from '@application/entities/content';
import {
  INotification,
  Notification,
} from '@application/entities/Notification';

type Override = Partial<INotification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
