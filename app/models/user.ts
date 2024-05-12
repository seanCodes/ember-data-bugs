import Model, { attr } from '@ember-data/model'
import { RecordStore, ResourceType } from '@warp-drive/core-types/symbols'
import type { MinimalLegacyRecord } from '@ember-data/model/-private/model-methods'

export default class UserModel extends Model {
  [ResourceType] = 'user' as const

  @attr('string')
  declare name: string

  override save = function <ModelInstance extends MinimalLegacyRecord>(
    this: ModelInstance,
    options?: Record<string, unknown> | undefined,
  ): Promise<ModelInstance> {
    if (this.currentState.isNew && this.currentState.isDeleted) {
      return Promise.resolve(this)
    }

    //
    // OVERRIDE-SAVE BUG
    //

    // "Property 'doSomethingOnSave' does not exist on type 'ModelInstance'.(2339)"
    this.doSomethingOnSave()

    return this[RecordStore].saveRecord(this, options)
  }

  private doSomethingOnSave() {
    // ...
  }
}
