module.exports = {
    template: `
        <ListView for="item in items">
            <v-template>
                <Label :text="item.text" class="m-15"/>
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