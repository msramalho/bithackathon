import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './memory.datasource.json';

export class MemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'memory';

  constructor(
    @inject('datasources.config.memory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
