'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    babel: {
      plugins: [ require.resolve('ember-auto-import/babel-plugin') ]
    }
  },

  included() {
    let app = this._findHost();

    this.app = app;

    if (app.__emberHandsOnTableIncludedInvoked) {
      this._super.included.apply(this, arguments);
      return;
    }

    app.__emberHandsOnTableIncludedInvoked = true;

    this._super.included.apply(this, arguments);

    // TODO:: Move this to import based styles for scss related imports.
    app.import('node_modules/handsontable/dist/handsontable.full.min.css');
  },

  _hasSassOrLessInstalledInApp() {
    let app = this.app;
    let hasSass = !!app.registry.availablePlugins['ember-cli-sass'];
    let hasLess = !!app.registry.availablePlugins['ember-cli-less'];

    return hasSass || hasLess;
  }
};
