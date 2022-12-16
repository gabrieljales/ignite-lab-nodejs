import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface INotification {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date; // não é possível ser nulo
}

export class Notification {
  // Motivo do underline e motivo de colocar _id fora de props explicados no notion - aula 02
  private _id: string;
  private props: INotification;

  constructor(props: Replace<INotification, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      // Se o createdAt for informado, usamos ele. Se não, definimos a data atual
      // Dessa forma sempre vamos ter o createdAt, mas na hora de criar a notificação, ele é opcional
    };
  }

  public get id() {
    return this._id;
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

  // Não faz sentido poder alterar a data de cancelamento para uma data que quiser, por isso invés de um getter temos esse método
  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  // Não tem um setter pois não faz sentido atualizar o createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
