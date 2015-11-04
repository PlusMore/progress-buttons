Package.describe({
  name: 'plusmore:progress-buttons',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Progress buttons inspired by codrops',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PlusMore/progress-buttons.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery', 'client');
  api.use('less', 'client');
  api.addFiles('progress-buttons.js', 'client');
  api.addFiles('progress-buttons.less', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('plusmore:progress-buttons');
  api.addFiles('progress-buttons-tests.js');
});
