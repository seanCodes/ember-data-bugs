import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-data-bugs/tests/helpers'
import { render, type TestContext } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import UserModel from 'ember-data-bugs/models/user'
import type Model from '@ember-data/model'
import type CustomStore from 'ember-data-bugs/services/-store'

interface Context extends TestContext {
  store: CustomStore
  model: Model
}

module('Integration | Component | info', function (hooks) {
  setupRenderingTest(hooks)

  hooks.beforeEach(function (this: Context) {
    this.store = this.owner.lookup('service:store')

    //
    // FOOMODEL-IS-NOT-MODEL-BUG
    //
    // `Model.eachRelationship()` and `Model.eachAttribute()` are not compatible between the base
    // `Model` and a user-defined model record instance. The user-defined model expects stricter
    // values for the first argument of both methods (because it knows what the exact relationship
    // and attribute keys are).
    //

    // Type 'UserModel' is not assignable to type 'Model'.
    this.model = this.store.createRecord<UserModel>('user', {
      name: 'John Doe',
    })
  })

  test('it works', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Info @source={{this.model}} />`)

    assert.dom().hasText('John Doe')
  })
})
