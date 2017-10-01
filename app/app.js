const Vue = require('nativescript-vue');

new Vue({
    data: {
        elements: [
            {
                name: 'ActivityIndicator',
                component: () => require('./elements/components/ActivityIndicator')
            },
            {
                name: 'Button',
                component: () => require('./elements/components/Button')
            },
            {
                name: 'DatePicker',
                component: () => require('./elements/components/DatePicker')
            },
            {
                name: 'HtmlView',
                component: () => require('./elements/components/HtmlView')
            },
            {
                name: 'Image',
                component: () => require('./elements/components/Image')
            },
            {
                name: 'Label',
                component: () => require('./elements/components/Label')
            },
            {
                name: 'ListPicker',
                component: () => require('./elements/components/ListPicker')
            },
            {
                name: 'ListView',
                component: () => require('./elements/components/ListView')
            },
            {
                name: 'Progress',
                component: () => require('./elements/components/Progress')
            },
            {
                name: 'SearchBar',
                component: () => require('./elements/components/SearchBar')
            },
            {
                name: 'SegmentedBar',
                component: () => require('./elements/components/SegmentedBar')
            },
            {
                name: 'Slider',
                component: () => require('./elements/components/Slider')
            },
            {
                name: 'Switch',
                component: () => require('./elements/components/Switch')
            },
            {
                name: 'TabView',
                component: () => require('./elements/components/TabView')
            },
            {
                name: 'TextField',
                component: () => require('./elements/components/TextField')
            },
            {
                name: 'TextView',
                component: () => require('./elements/components/TextView')
            },
            {
                name: 'TimePicker',
                component: () => require('./elements/components/TimePicker')
            },
            {
                name: 'WebView',
                component: () => require('./elements/components/WebView')
            },
        ]
    },


    methods: {
        showElement(e) {
            const element = e.item;
            this.$navigateTo(element.component())
        }
    },

    template: `
        <Page>
            <ListView :items="elements" @itemTap="showElement">
                <template scope="el">
                    <Label :text="el.name" style="font-size: 15;" />
                </template>
            </ListView>
        </Page>
    `,
}).$start();