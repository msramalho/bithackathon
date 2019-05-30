import { Provider, inject, ValueOrPromise } from '@loopback/context';
import { Strategy } from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile
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
        this.verify
      );
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }

  verify(
    payload: Payload,
    done_callback: (error: any, user?: UserProfile | boolean, info?: any) => void
  ) {
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, user) when user is authenticated
    this.userRepo.findById(payload.user_id)
      .then(user => {
        if (user !== null) {
          done_callback(null, {
            id: payload.user_id,
            email: payload.user_email,
          });
        } else {
          done_callback(null, false);
        }
      });
  }

}
