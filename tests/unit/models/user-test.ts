import { module, test } from 'qunit'

import { setupTest } from 'ember-data-bugs/tests/helpers'
import UserModel from 'ember-data-bugs/models/user'

module('Unit | Model | user', function (hooks) {
  setupTest(hooks)

  test('it works as expected', function (assert) {
    const store = this.owner.lookup('service:store')
    const model = store.createRecord<UserModel>('user', { name: 'John Doe' })

    assert.strictEqual(model.name, 'John Doe')
  })
})
