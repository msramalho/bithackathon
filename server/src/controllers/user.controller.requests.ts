import {
  Entity,
  property,
  model,
} from '@loopback/repository';

@model()
export class AuthInfo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    description: 'Unhashed password received from front-end form',
  })
  password: string;
}
