import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { assign } from '@ember/polyfills';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';

const NAMESPACE = 'hot-table-';

export default class HOTGridComponent extends Component {
  options = this.args.options || {};

  constructor() {
    super(...arguments);

    this.id = `${NAMESPACE}${guidFor(this)}`;

    scheduleOnce('afterRender', this, this._initializeGrid);
  }

  _fetchHandsonTable() {
    return import('handsontable')
      .then((module) => module.default)
      .then((Handsontable) => Handsontable);
  }

  _mergeConfigs() {
    let config = getOwner(this).resolveRegistration('config:environment');

    return assign(
      {},
      config['ember-handsontable'],
      this.options
    );
  }

  _initializeGrid() {
    this._fetchHandsonTable().then((Handsontable) => {
      const container = document.getElementById(this.id);
  
      const HOTable = new Handsontable(container, 
        assign({}, 
          { data: this.args.data },
          this.options
        )
      );
  
      this.onInit(HOTable);
    });
  }

  onInit() {}
}
