// BEGIN-SNIPPET basic-usage.js
import Component from '@glimmer/component';

export default class BasicUsageComponent extends Component {
  constructor() {
    super(...arguments);
    
    this.data = [
      ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];
  }
}
// END-SNIPPET
