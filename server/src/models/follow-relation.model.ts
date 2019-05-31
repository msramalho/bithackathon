import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class FollowRelation extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  followee: string;

  @property({
    type: 'string',
    required: true,
  })
  follower: string;


  constructor(data?: Partial<FollowRelation>) {
    super(data);
  }
}
