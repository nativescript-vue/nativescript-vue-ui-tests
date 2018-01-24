const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.action('Choose one!', 'Or cancel...', ['cheese', 'wine'])
  }
};