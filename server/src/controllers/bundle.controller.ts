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
import { Bundle } from '../models';
import { BundleRepository, BundleTagRelationRepository } from '../repositories';
import { authenticate, AuthenticationBindings, UserProfile } from '@loopback/authentication';
import { inject } from '@loopback/context';

export class BundleController {
  constructor(
    @repository(BundleRepository)
    public bundleRepository: BundleRepository,
    @repository(BundleTagRelationRepository)
    public bundleTagRelationRepository: BundleTagRelationRepository,
    @inject(AuthenticationBindings.CURRENT_USER, { optional: true }) private user: UserProfile,
  ) { }

  @authenticate('JWTStrategy')
  @post('/bundles', {
    responses: {
      '200': {
        description: 'Bundle model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Bundle } } },
      },
    },
  })
  async create(@requestBody() bundle: Bundle): Promise<Bundle> {
    console.log(`Creating Bundle as User "${this.user.id}"`);
    bundle.creatorId = this.user.id;
    return await this.bundleRepository.create(bundle);
  }

  @get('/bundles/count', {
    responses: {
      '200': {
        description: 'Bundle model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Bundle)) where?: Where,
  ): Promise<Count> {
    return await this.bundleRepository.count(where);
  }

  // localhost:3000/bundles?filter[where][creatorId]=<creator_id> should also work
  @authenticate('JWTStrategy')
  @get('/bundles', {
    responses: {
      '200': {
        description: 'Array of Bundle model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Bundle } },
          },
        },
      },
    },
  })
  async find(
    // @param.query.object('filter', getFilterSchemaFor(Bundle)) filter?: Filter<Bundle>,
  ): Promise<Bundle[]> {
    return await this.bundleRepository.find({
      where: { creatorId: this.user.id }
    });
  }

  @patch('/bundles', {
    responses: {
      '200': {
        description: 'Bundle PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() bundle: Bundle,
    @param.query.object('where', getWhereSchemaFor(Bundle)) where?: Where,
  ): Promise<Count> {
    return await this.bundleRepository.updateAll(bundle, where);
  }

  @get('/bundles/{id}', {
    responses: {
      '200': {
        description: 'Bundle model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Bundle } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Bundle> {
    return await this.bundleRepository.findById(id);
  }

  @patch('/bundles/{id}', {
    responses: {
      '204': {
        description: 'Bundle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() bundle: Bundle,
  ): Promise<void> {
    await this.bundleRepository.updateById(id, bundle);
  }

  @put('/bundles/{id}', {
    responses: {
      '204': {
        description: 'Bundle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bundle: Bundle,
  ): Promise<void> {
    await this.bundleRepository.replaceById(id, bundle);
  }

  @del('/bundles/{id}', {
    responses: {
      '204': {
        description: 'Bundle DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bundleRepository.deleteById(id);
  }

  @get('/bundles/{id}/tags', {
    responses: {
      '200': {
        description: 'Bundle model instance',
        content: { 'application/json': { schema: { 'x-ts-type': String } } },
      },
    },
  })
  async findBundleTags(@param.path.string('id') id: string): Promise<string[]> {
    return (await this.bundleTagRelationRepository.find({
      where: {
        bundleId: id
      }
    })).map(rel => rel.tagId);
  }
}
