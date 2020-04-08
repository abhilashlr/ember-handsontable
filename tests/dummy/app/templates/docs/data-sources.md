# Data sources

This page is a demo containing examples from <a class="docs-md__a" href="https://handsontable.com/docs/7.4.2/tutorial-data-sources.html" target="_blank">https://handsontable.com/docs/7.4.2/tutorial-data-sources.html</a>. Only a few of them are showcased in here and the ones stated in the original source should work. In case something doesn't work, feel fee to raise a PR.


<h2 class="docs-text-large-5 docs-font-bold docs-mb-4">Array data source with hidden columns</h2>

<Demos::DataSources::ArrayHiddenColumns />

{{#docs-demo as |demo|}}
  {{demo.snippet "data-sources-array-hidden-cols.hbs"}}
  {{demo.snippet "data-sources-array-hidden-cols.js" label="component.js"}}
{{/docs-demo}}

<h2 class="docs-text-large-5 docs-font-bold docs-mb-4">Object data source</h2>

<Demos::DataSources::Object />

{{#docs-demo as |demo|}}
  {{demo.snippet "data-sources-object.hbs"}}
  {{demo.snippet "data-sources-object.js" label="component.js"}}
{{/docs-demo}}
