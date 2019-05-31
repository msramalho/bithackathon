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
import {FollowRelation} from '../models';
import {FollowRelationRepository} from '../repositories';

export class FollowRelationController {
  constructor(
    @repository(FollowRelationRepository)
    public followRelationRepository : FollowRelationRepository,
  ) {}

  @post('/follow-relations', {
    responses: {
      '200': {
        description: 'FollowRelation model instance',
        content: {'application/json': {schema: {'x-ts-type': FollowRelation}}},
      },
    },
  })
  async create(@requestBody() followRelation: FollowRelation): Promise<FollowRelation> {
    return await this.followRelationRepository.create(followRelation);
  }

  @get('/follow-relations/count', {
    responses: {
      '200': {
        description: 'FollowRelation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FollowRelation)) where?: Where,
  ): Promise<Count> {
    return await this.followRelationRepository.count(where);
  }

  @get('/follow-relations', {
    responses: {
      '200': {
        description: 'Array of FollowRelation model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': FollowRelation}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(FollowRelation)) filter?: Filter,
  ): Promise<FollowRelation[]> {
    return await this.followRelationRepository.find(filter);
  }

  @patch('/follow-relations', {
    responses: {
      '200': {
        description: 'FollowRelation PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() followRelation: FollowRelation,
    @param.query.object('where', getWhereSchemaFor(FollowRelation)) where?: Where,
  ): Promise<Count> {
    return await this.followRelationRepository.updateAll(followRelation, where);
  }

  @get('/follow-relations/{id}', {
    responses: {
      '200': {
        description: 'FollowRelation model instance',
        content: {'application/json': {schema: {'x-ts-type': FollowRelation}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<FollowRelation> {
    return await this.followRelationRepository.findById(id);
  }

  @patch('/follow-relations/{id}', {
    responses: {
      '204': {
        description: 'FollowRelation PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() followRelation: FollowRelation,
  ): Promise<void> {
    await this.followRelationRepository.updateById(id, followRelation);
  }

  @put('/follow-relations/{id}', {
    responses: {
      '204': {
        description: 'FollowRelation PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() followRelation: FollowRelation,
  ): Promise<void> {
    await this.followRelationRepository.replaceById(id, followRelation);
  }

  @del('/follow-relations/{id}', {
    responses: {
      '204': {
        description: 'FollowRelation DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.followRelationRepository.deleteById(id);
  }
}
