module.exports = {
    template: `
        <StackLayout class="m-20">
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