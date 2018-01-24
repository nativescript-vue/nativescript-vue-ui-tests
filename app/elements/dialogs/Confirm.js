const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.confirm('Are you ready?')
  }
};