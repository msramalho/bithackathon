import {DefaultCrudRepository} from '@loopback/repository';
import {BundleTagRelation} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BundleTagRelationRepository extends DefaultCrudRepository<
  BundleTagRelation,
  typeof BundleTagRelation.prototype._id
> {
  constructor(@inject('datasources.memory') dataSource: MemoryDataSource) {
    super(BundleTagRelation, dataSource);
  }
}
