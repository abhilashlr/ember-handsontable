import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | ember-handsontable/-private/hot-grid', function(hooks) {
  setupTest(hooks);

  test('it loads handsontable plugin', async function(assert) {
    let service = this.owner.lookup('service:ember-handsontable/-private/hot-grid');

    assert.ok(service);

    await assert.ok(service.load());
  });
});
