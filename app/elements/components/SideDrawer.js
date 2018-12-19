module.exports = {
  template: `
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent>
        <StackLayout height="56" style="text-align: center; vertical-align: center;">
          <label text="Navigation Menu" />
        </StackLayout>
        <StackLayout>
          <button text="Friends" /> <button text="Posts"/>
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <label text="This is the main content for the current Page!" textWrap="true" fontSize="13" padding="10" />
      </StackLayout>
    </RadSideDrawer>
  `,
  mounted() {
    this.$refs.drawer.showDrawer()
  }
}