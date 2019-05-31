import {DefaultCrudRepository} from '@loopback/repository';
import {FollowRelation} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FollowRelationRepository extends DefaultCrudRepository<
  FollowRelation,
  typeof FollowRelation.prototype._id
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(FollowRelation, dataSource);
  }
}
