import {DefaultCrudRepository} from '@loopback/repository';
import {Tag} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TagRepository extends DefaultCrudRepository<
  Tag,
  typeof Tag.prototype.name
> {
  constructor(@inject('datasources.memory') dataSource: MemoryDataSource) {
    super(Tag, dataSource);
  }
}
