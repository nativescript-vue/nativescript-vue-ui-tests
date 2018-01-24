const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.prompt('How are you?', 'Amazing!')
  }
};