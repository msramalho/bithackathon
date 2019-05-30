import {DefaultCrudRepository} from '@loopback/repository';
import {Bundle} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BundleRepository extends DefaultCrudRepository<
  Bundle,
  typeof Bundle.prototype._id
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Bundle, dataSource);
  }
}
