const dialogs = require('ui/dialogs');

module.exports = {
  mounted() {
    dialogs.login('Please log in', 'Username', 'Password')
  }
};