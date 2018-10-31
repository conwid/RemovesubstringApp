var App = require('ghost-app'),  
    RemoveSubstring;
    
RemoveSubstring = App.extend({  
  install: function () {},
  uninstall: function () {},
  activate: function () {
    this.ghost.helpers.register('removeSubstring', this.removeSubstringHelper);
  },
  deactivate: function () {},
  removeSubstringHelper: function(originalString, substring, options) {
     return originalString.replace(substring,'');
  }
});

module.exports = RemoveSubstring;  