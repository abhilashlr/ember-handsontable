// BEGIN-SNIPPET data-sources-array.js
import Component from '@glimmer/component';

export default class BasicUsageComponent extends Component {
  constructor() {
    super(...arguments);
    
    this.data = [
      ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
      ['2017', 10, 11, 12, 13, 15, 16],
      ['2018', 10, 11, 12, 13, 15, 16],
      ['2019', 10, 11, 12, 13, 15, 16],
      ['2020', 10, 11, 12, 13, 15, 16],
      ['2021', 10, 11, 12, 13, 15, 16]
    ];

    this.options = {
      startRows: 5,
      startCols: 5,
      colHeaders: true,
      minSpareRows: 1
    }
  }
}
// END-SNIPPET
