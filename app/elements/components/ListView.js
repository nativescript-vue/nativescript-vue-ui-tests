module.exports = {
    template: `
        <ListView for="item in items">
            <v-template>
                <Label :text="item.text"/>
            </v-template>
        </ListView>
    `,

    data() {
        return {
            items: [
                {text: 'First'},
                {text: 'Second'},
                {text: 'Third'}
            ]
        }
    }
};