Package.describe({
  name: 'ahmetcetin:autoform-summernote',
  summary: 'Summernote editor for aldeed:autoform 5',
  version: '0.3.2',
  git: 'https://github.com/ahmetcetin/meteor-autoform-summernote'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.versionsFrom('1.0');

  api.use([
    'templating',
    'aldeed:autoform@4.0.0 || 5.0.0'
  ], both);
  api.use('summernote:standalone@0.6.0_1', 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-summernote.js'  
  ], 'client');
});
