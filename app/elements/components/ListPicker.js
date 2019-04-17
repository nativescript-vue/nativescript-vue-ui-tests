module.exports = {
  template: `
    <Page>
      <StackLayout class="m-20">
        <ListPicker :items="items"></ListPicker>
      </StackLayout>
    </Page>
    `,

  data() {
    return {
      items: ["First", "Second", "Third"]
    };
  }
};
