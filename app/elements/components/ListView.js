module.exports = {
    template: `
        <StackLayout>
            <ListView :items="items">
                <template scope="item">
                    <Label :text="item.value"/>
                </template>
            </ListView>
        </StackLayout>
    `,

    data() {
        return {
            items: [
                'First',
                'Second',
                'Third'
            ]
        }
    }
};