import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Tag extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  name: string;

  constructor(data?: Partial<Tag>) {
    super(data);
  }
}
