require('yargs').config({
    runType: 'android',
    testFolder: '__test__',
    appiumCapsLocation: '__test__/capabilities.json'
});

const { startServer, stopServer, createDriver } = require('nativescript-dev-appium');

describe('sample', () => {
    jest.setTimeout(80000);
    let driver;

    beforeAll(async () => {
        await startServer();
        driver = await createDriver();
    });

    afterAll(async () => {
        await driver.quit();
        await stopServer();
        setTimeout(() => process.exit(), 5000);
    });

    [
        'ActivityIndicator',
        'Button',
        'DatePicker',
        'HtmlView',
        'Image',
        'Label',
        'ListPicker',
        'ListView',
        'Progress',
        'SearchBar',
        'SegmentedBar',
        'Slider',
        'Switch',
        'TabView',
        'TextField',
        'TextView',
        'TimePicker',
        'WebView',
    ].forEach((component) => {
        it(component, async () => {
            const listItem = await driver.findElementByText(component);
            await listItem.tap();

            await driver._driver.sleep(500);

            if (component === 'HtmlView' || component === 'WebView') {
                await driver._driver.sleep(4000);
            }

            await driver.takeScreenshot(`screenshots/${component}.png`);

            await driver.navBack();

            if (component === 'SearchBar') {
                await driver.navBack();
            }
        }, 800000)
    })

});