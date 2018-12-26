const assert = require("chai").assert;
const nsAppium = require("nativescript-dev-appium");

let driver;
before("create driver", async () => {
    driver = await nsAppium.createDriver();
});

afterEach(`navigate back to main page after test`, async () => {
    await driver.navBack();
});

after('quit driver', async () => {
    await driver.quit();
    console.log('Buh-Bye...');
});

describe("components", async () => {
    const components = [
        'ActivityIndicator',
        'Button',
        'DatePicker',
        'HtmlView',
        'Image',
        'Label',
        'ListPicker',
        'ListView',
        'Progress',
        'ScrollView',
        'SearchBar',
        'SegmentedBar',
        'Slider',
        'Switch',
        'TabView',
        'TextField',
        'TextView',
        'TimePicker',
        'WebView',
    ];

    for (let component of components) {
        it(`load ${component}`, async () => {
            await loadComponent(component);

            const result = await driver.compareScreen(component, 10, 0.1);
            assert.isTrue(result, "Image comparisson has failed!");

            if (component === 'SearchBar' && driver.isAndroid) {
                await driver.navBack();
            }
        });
    };
});

describe("dialogs", async () => {
    const dialogs = [
        'ActionDialog',
        'AlertDialog',
        'ConfirmDialog',
        'LoginDialog',
        'PromptDialog',
    ];

    for (let dialog of dialogs) {
        it(`load ${dialog}`, async () => {
            await loadComponent(dialog);

            const result = await driver.compareScreen(dialog, 10, 0.1);

            if (driver.isIOS) {
                const button = dialog === "ActionDialog" ? "cancel" : "OK";
                const dialogItem = await driver.findElementByTextIfExists(button, nsAppium.SearchOptions.contains);
                if (dialogItem) {
                    await dialogItem.click();
                } else {
                    console.error(`Could not find ${button} to dismiss the dialog!`);
                }
            } else {
                await driver.navBack();
            }
            assert.isTrue(result, "Image comparisson has failed!");
        });
    };
});


const loadComponent = async (component) => {
    const listItem = await driver.findElementByText(component);
    await listItem.click();
    await driver.findElementByTextIfExists(component, nsAppium.SearchOptions.contains);
};
