module.exports = {
    template: `
        <StackLayout>
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