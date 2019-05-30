import { Entity, model, property } from '@loopback/repository';

// @model({ settings: { strict: false } })
@model({ settings: {} })
export class Bundle extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  img: string;

  @property.array(String, {
    type: 'array',
    itemType: 'string',
    required: true,
  })
  products: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // [prop: string]: any;

  constructor(data?: Partial<Bundle>) {
    super(data);
  }
}
