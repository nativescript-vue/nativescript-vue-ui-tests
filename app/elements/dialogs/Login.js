const dialogs = require('tns-core-modules/ui/dialogs');

module.exports = {
    mounted() {
        setTimeout(() => dialogs.login('Please log in', 'Username', 'Password'))
    }
};