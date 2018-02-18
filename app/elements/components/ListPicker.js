module.exports = {
    template: `
        <StackLayout class="m-20">
            <ListPicker :items="items"></ListPicker>
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