module.exports = {
  template: `
    <Page>
      <StackLayout class="m-20">
            <HtmlView :html="html"/>
      </StackLayout>
    </Page>
  `,

  data() {
    return {
      html: `
                <div>
                    <h1>HtmlView</h1>
                </div>
            `
    };
  }
};
