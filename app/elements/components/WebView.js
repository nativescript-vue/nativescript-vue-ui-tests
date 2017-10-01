module.exports = {
    template: `
        <StackLayout>
            <WebView :src="src"/>
        </StackLayout>
    `,

    data() {
        return {
            src: `
                <!doctype html>
                <html>
                    <body>
                        <h1>WebView</h1>
                        
                        <p>And a paragraph...</p>
                        
                        <select>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </body>
                </html>
            `
        }
    }
};