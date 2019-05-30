import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id
> {
  constructor(@inject('datasources.memory') dataSource: MemoryDataSource) {
    super(User, dataSource);
  }
}
