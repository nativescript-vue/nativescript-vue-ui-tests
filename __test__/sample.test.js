describe('sample', () => {
    jest.setTimeout(80000);
    let driver;

    beforeAll(async () => {
        driver = await createDriver()
    });

    afterAll(async () => {
        await driver.quit();
    });

    it('works', async () => {
        driver.findElementByText('ActivityIndicator')
            .tap()
    }, 800000)

});