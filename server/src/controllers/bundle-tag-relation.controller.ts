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
import {BundleTagRelation} from '../models';
import {BundleTagRelationRepository} from '../repositories';

export class BundleTagRelationController {
  constructor(
    @repository(BundleTagRelationRepository)
    public bundleTagRelationRepository : BundleTagRelationRepository,
  ) {}

  @post('/bundle-tag-relations', {
    responses: {
      '200': {
        description: 'BundleTagRelation model instance',
        content: {'application/json': {schema: {'x-ts-type': BundleTagRelation}}},
      },
    },
  })
  async create(@requestBody() bundleTagRelation: BundleTagRelation): Promise<BundleTagRelation> {
    return await this.bundleTagRelationRepository.create(bundleTagRelation);
  }

  @get('/bundle-tag-relations/count', {
    responses: {
      '200': {
        description: 'BundleTagRelation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(BundleTagRelation)) where?: Where,
  ): Promise<Count> {
    return await this.bundleTagRelationRepository.count(where);
  }

  @get('/bundle-tag-relations', {
    responses: {
      '200': {
        description: 'Array of BundleTagRelation model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': BundleTagRelation}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(BundleTagRelation)) filter?: Filter,
  ): Promise<BundleTagRelation[]> {
    return await this.bundleTagRelationRepository.find(filter);
  }

  @patch('/bundle-tag-relations', {
    responses: {
      '200': {
        description: 'BundleTagRelation PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() bundleTagRelation: BundleTagRelation,
    @param.query.object('where', getWhereSchemaFor(BundleTagRelation)) where?: Where,
  ): Promise<Count> {
    return await this.bundleTagRelationRepository.updateAll(bundleTagRelation, where);
  }

  @get('/bundle-tag-relations/{id}', {
    responses: {
      '200': {
        description: 'BundleTagRelation model instance',
        content: {'application/json': {schema: {'x-ts-type': BundleTagRelation}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<BundleTagRelation> {
    return await this.bundleTagRelationRepository.findById(id);
  }

  @patch('/bundle-tag-relations/{id}', {
    responses: {
      '204': {
        description: 'BundleTagRelation PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() bundleTagRelation: BundleTagRelation,
  ): Promise<void> {
    await this.bundleTagRelationRepository.updateById(id, bundleTagRelation);
  }

  @put('/bundle-tag-relations/{id}', {
    responses: {
      '204': {
        description: 'BundleTagRelation PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bundleTagRelation: BundleTagRelation,
  ): Promise<void> {
    await this.bundleTagRelationRepository.replaceById(id, bundleTagRelation);
  }

  @del('/bundle-tag-relations/{id}', {
    responses: {
      '204': {
        description: 'BundleTagRelation DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bundleTagRelationRepository.deleteById(id);
  }
}
