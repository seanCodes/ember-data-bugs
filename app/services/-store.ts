// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import Store from 'ember-data/store'
import { service } from '@ember/service'
import type RequestManager from '@ember-data/request'

export default class CustomStore extends Store {
  @service
  declare requestManager: RequestManager
}

declare module '@ember/service' {
  interface Registry {
    store: CustomStore
  }
}
