import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class BundleTagRelation extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  bundleId: string;

  @property({
    type: 'string',
    required: true,
  })
  tagId: string;

  constructor(data?: Partial<BundleTagRelation>) {
    super(data);
  }
}
