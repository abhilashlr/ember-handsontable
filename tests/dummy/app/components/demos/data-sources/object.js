// BEGIN-SNIPPET data-sources-object.js
import Component from '@glimmer/component';

export default class BasicUsageComponent extends Component {
  constructor() {
    super(...arguments);
    
    this.data = [
      {id: 1, name: 'Ted Right', address: ''},
      {id: 2, name: 'Frank Honest', address: ''},
      {id: 3, name: 'Joan Well', address: ''},
      {id: 4, name: 'Gail Polite', address: ''},
      {id: 5, name: 'Michael Fair', address: ''}
    ];

    this.options = {
      colHeaders: true,
      minSpareRows: 1
    }
  }
}
// END-SNIPPET
