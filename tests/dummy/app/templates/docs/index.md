# Installation

```bash
# yarn users:
yarn add --dev ember-handsontable

# npm users:
npm install --save-dev ember-handsontable
```

<h2 class='docs-text-large-5 docs-font-bold docs-mb-4'>Compatibility</h2>

* Ember.js v3.12 or above
* Ember CLI v3.12 or above
* Node.js v10 or above

<h2 class='docs-text-large-5 docs-font-bold docs-mb-4'>License key</h2>

In the config/environment.js, set your Handsontable key for the grid to work with your licenses.

```js
let ENV = {
  ...
  'ember-handsontable': {
    licenseKey: YOUR_HANDSONTABLE_LICENSE_KEY
  }
};
```
