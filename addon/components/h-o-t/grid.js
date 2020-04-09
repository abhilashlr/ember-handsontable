import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import { assign } from '@ember/polyfills';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';

const NAMESPACE = 'hot-table-';
const SERVICE = 'ember-handsontable/-private/hot-grid';

export default class HOTGridComponent extends Component {
  @service(SERVICE) grid;

  options = this.args.options || {};

  constructor() {
    super(...arguments);

    this.id = `${NAMESPACE}${guidFor(this)}`;

    scheduleOnce('afterRender', this, this.initializeGrid);
  }

  _mergeConfigs() {
    let config = getOwner(this).resolveRegistration('config:environment');

    return assign(
      {},
      config['ember-handsontable'],
      this.options,
      { data: this.args.data }
    );
  }

  async initializeGrid() {
    let Handsontable = await this.grid.load();

    const container = document.getElementById(this.id);

    const HOTable = new Handsontable(container, this._mergeConfigs());

    return this.onInit(HOTable);
  }

  onInit() {
    this.args.onInit && this.args.onInit(...arguments);
  }
}
