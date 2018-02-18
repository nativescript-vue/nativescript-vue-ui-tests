module.exports = {
    template: `
        <ListView :items="items">
            <v-template scope="item">
                <Label :text="item.value"/>
            </v-template>
        </ListView>
    `,

    data() {
        return {
            items: [
                {value: 'First'},
                {value: 'Second'},
                {value: 'Third'}
            ]
        }
    }
};