import Component from '@glimmer/component'
import type Model from '@ember-data/model'

interface InfoSignature {
  Args: {
    source: Model
  }
  Element: HTMLElement
}

export default class InfoComponent extends Component<InfoSignature> {}
