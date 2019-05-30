import { Provider, inject, ValueOrPromise } from '@loopback/context';
import { Strategy } from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
} from '@loopback/authentication';
import { UserRepository } from '../repositories';
import { repository } from '@loopback/repository';
import {
  Strategy as JWTStrategy,
  ExtractJwt,
} from 'passport-jwt';
import { Payload, UserController } from '../controllers/user.controller';

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {

  static AUTH_HEADER: string = 'JWT';

  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }

    const name = this.metadata.strategy;
    if (name === 'JWTStrategy') {
      return new JWTStrategy(
        {
          passReqToCallback: false,
          jwtFromRequest: ExtractJwt.fromHeader(MyAuthStrategyProvider.AUTH_HEADER),
          secretOrKey: UserController.getSecretKey(),
        },
        (payload: Payload, done_callback) => {
          this.userRepo.findOne({
            where: {
              email: payload.user_id
            },
          })
            .then(user => {
              if (user !== null) done_callback(null, { id: payload.user_id });
              else done_callback(null, false);
            });
        },
      );
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }
}
