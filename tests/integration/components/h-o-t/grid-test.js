import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | h-o-t/grid', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await this.owner.lookup('service:ember-handsontable/-private/hot-grid').load();
  });

  test('it renders without options', async function(assert) {
    assert.expect(2);

    this.data = [
      ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];

    await render(hbs`<HOT::Grid 
      @data={{this.data}}
    />`);

    assert.equal(this.element.querySelectorAll('.ht_master .htCore thead tr').length, 0);
    assert.equal(this.element.querySelectorAll('.ht_master .htCore tbody tr').length, 4);
  });

  test('it renders basic component', async function(assert) {
    assert.expect(3);

    this.data = [
      ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];

    await render(hbs`<HOT::Grid 
      @data={{this.data}}
      @options={{hash
        rowHeaders=true
        colHeaders=true
        filters=true
        dropdownMenu=true
      }}
    />`);

    assert.equal(this.element.querySelectorAll('.ht_master .htCore thead tr').length, 1);
    assert.equal(this.element.querySelectorAll('.ht_master .htCore thead th').length, 6);
    assert.equal(this.element.querySelectorAll('.ht_master .htCore tbody tr').length, 4);
  });

  test('it fires onInit after render with the right args', async function(assert) {
    assert.expect(4);

    this.data = [
      ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];

    this.onInit = (HandsontableInstance) => {
      assert.ok(HandsontableInstance, 'Arguments');
    };

    await render(hbs`<HOT::Grid 
      @data={{this.data}}
      @options={{hash
        rowHeaders=true
        colHeaders=true
        filters=true
        dropdownMenu=true
      }}
      @onInit={{this.onInit}}
    />`);

    assert.equal(this.element.querySelectorAll('.ht_master .htCore thead tr').length, 1);
    assert.equal(this.element.querySelectorAll('.ht_master .htCore thead th').length, 6);
    assert.equal(this.element.querySelectorAll('.ht_master .htCore tbody tr').length, 4);
  });
});
