import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface INotification {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date; // não é possível ser nulo
}

export class Notification {
  private props: INotification;

  constructor(props: Replace<INotification, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      // Se o createdAt for informado, usamos ele. Se não, definimos a data atual
      // Dessa forma sempre vamos ter o createdAt, mas na hora de criar a notificação, ele é opcional
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  // Não tem um setter pois não faz sentido atualizar o createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
