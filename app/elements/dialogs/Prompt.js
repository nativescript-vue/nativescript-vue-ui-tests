const dialogs = require('tns-core-modules/ui/dialogs');

module.exports = {
    mounted() {
        setTimeout(() => dialogs.prompt('How are you?', 'Amazing!'))
    }
};