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
import {Tag} from '../models';
import {TagRepository} from '../repositories';

export class TagController {
  constructor(
    @repository(TagRepository)
    public tagRepository: TagRepository,
  ) {}

  @post('/tags', {
    responses: {
      '200': {
        description: 'Tag model instance',
        content: {'application/json': {schema: {'x-ts-type': Tag}}},
      },
    },
  })
  async create(@requestBody() tag: Tag): Promise<Tag> {
    return await this.tagRepository.create(tag);
  }

  @get('/tags/count', {
    responses: {
      '200': {
        description: 'Tag model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tag)) where?: Where,
  ): Promise<Count> {
    return await this.tagRepository.count(where);
  }

  @get('/tags', {
    responses: {
      '200': {
        description: 'Array of Tag model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Tag}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tag)) filter?: Filter,
  ): Promise<Tag[]> {
    return await this.tagRepository.find(filter);
  }

  @patch('/tags', {
    responses: {
      '200': {
        description: 'Tag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() tag: Tag,
    @param.query.object('where', getWhereSchemaFor(Tag)) where?: Where,
  ): Promise<Count> {
    return await this.tagRepository.updateAll(tag, where);
  }

  @get('/tags/{id}', {
    responses: {
      '200': {
        description: 'Tag model instance',
        content: {'application/json': {schema: {'x-ts-type': Tag}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Tag> {
    return await this.tagRepository.findById(id);
  }

  @patch('/tags/{id}', {
    responses: {
      '204': {
        description: 'Tag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() tag: Tag,
  ): Promise<void> {
    await this.tagRepository.updateById(id, tag);
  }

  @put('/tags/{id}', {
    responses: {
      '204': {
        description: 'Tag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tag: Tag,
  ): Promise<void> {
    await this.tagRepository.replaceById(id, tag);
  }

  @del('/tags/{id}', {
    responses: {
      '204': {
        description: 'Tag DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tagRepository.deleteById(id);
  }
}
