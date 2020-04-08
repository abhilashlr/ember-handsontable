// BEGIN-SNIPPET data-sources-array-hidden-cols.js
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
      colHeaders: true,
      minSpareRows: 1,
      columns: [
        {data: 0},
        {data: 2},
        {data: 3},
        {data: 4},
        {data: 5},
        {data: 6}
      ]
    }
  }
}
// END-SNIPPET
