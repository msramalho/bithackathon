import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  img?: string;

  @property({
    type: 'Object',
    description: 'The User object returned by the continente API',
  })
  userContent?: Object;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
