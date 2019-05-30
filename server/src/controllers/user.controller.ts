import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';
import { AuthInfo } from './user.controller.requests';
import { sign } from 'jsonwebtoken';
import { get as request_get, post as request_post } from "request-promise-native";


export class Payload {
  user_id: string;
}

export class UserController {

  static SONAE_API: string = 'https://api.sonae.pt';

  static readonly TOKEN_EXPIRATION = '2h';

  // Default key to use for signing JWT
  static readonly DEFAULT_SECRET_KEY = 'sinceramente';

  // Map of user._id to their current service access token
  static usersAccessTokens = new Map<string, string>();
  // NOT NEEDED: send user service token back on login request
  // and expect service token in all incoming requests

  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  static getSecretKey(): string {
    return process.env.SECRET_KEY === undefined
      ? UserController.DEFAULT_SECRET_KEY
      : process.env.SECRET_KEY;
  }

  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async create(@requestBody() user: User): Promise<User> {
    return await this.userRepository.create(user);
  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'User session information',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
                expiresIn: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(@requestBody() authInfo: AuthInfo): Promise<Object> {
    // Retrieve user from DB
    let storedUser = await this.userRepository.findOne({
      where: { email: authInfo.email },
    });
    if (!storedUser) throw new Error('User not found');

    // Login at SONAE API
    // if successful, return jwt token and sonae's api token

    // let res = await request_get(
    //   UserController.SONAE_API + '/continenteOnline/authentication/login',

    // );
    // console.log(res);


    // If credentials are OK, generate signed token with private shared key
    const payload: Payload = {
      user_id: storedUser.email,
      // TODO add as needed
    };

    const token = sign(payload, UserController.getSecretKey(), {
      expiresIn: UserController.TOKEN_EXPIRATION,
    });

    return Object.assign(
      {},
      {
        jwtToken: token,
        // serviceToken: serviceToken,
        expiresIn: UserController.TOKEN_EXPIRATION,
      },
    );
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where,
  ): Promise<Count> {
    return await this.userRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of User model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': User } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(User)) filter?: Filter<User>,
  ): Promise<User[]> {
    return await this.userRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'User PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() user: User,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where,
  ): Promise<Count> {
    return await this.userRepository.updateAll(user, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<User> {
    return await this.userRepository.findById(id);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'User PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'User DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
