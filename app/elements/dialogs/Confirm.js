const dialogs = require('tns-core-modules/ui/dialogs');

module.exports = {
    mounted() {
        setTimeout(() => dialogs.confirm('Are you ready?'))
    }
};