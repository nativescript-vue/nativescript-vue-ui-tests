module.exports = {
    template: `
        <StackLayout>
            <HtmlView :html="html"/>
        </StackLayout>
    `,

    data() {
        return {
            html: `
                <div>
                    <h1>HtmlView</h1>
                </div>
            `
        }
    }
};