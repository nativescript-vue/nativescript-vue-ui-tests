const dialogs = require('tns-core-modules/ui/dialogs');

module.exports = {
    mounted() {
        setTimeout(() => dialogs.action('Choose one!', 'Or cancel...', ['cheese', 'wine']))
    }
};