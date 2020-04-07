import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { scheduleOnce } from '@ember/runloop';

const NAMESPACE = 'hot-table-';

export default class HOTGridComponent extends Component {
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

  _initializeGrid() {
    this._fetchHandsonTable().then((Handsontable) => {
      const container = document.getElementById(this.id);
  
      const HOTable = new Handsontable(container, {
        data: this.args.data,
        rowHeaders: true,
        colHeaders: true
      });
  
      this.onInit(HOTable);
    });
  }

  onInit() {}
}
