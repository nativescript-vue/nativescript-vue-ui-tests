module.exports = {
  template: `
    <Page>
      <GridLayout rows="*">
        <WebView :src="src"/>
      </GridLayout>
    </Page>
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
    };
  }
};
