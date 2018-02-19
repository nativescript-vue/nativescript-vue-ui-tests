const argv = require('yargs').argv;
const AppiumDriver = require('nativescript-dev-appium').AppiumDriver;
const fs = require('fs');

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
    'ActionDialog',
    'AlertDialog',
    'ConfirmDialog',
    'LoginDialog',
    'PromptDialog',
];

const makeDir = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};

(async function () {
    makeDir('screenshots');
    makeDir(`screenshots/${argv.runType}`);

    AppiumDriver.createAppiumDriver(4723, {
        isSauceLab: argv.sauceLab || false,
        runType: argv.runType,
        appPath: argv.appPath, //'nativescriptvueuitests-debug.apk',
        appiumCaps: require('./appium.capabilities.json')[argv.runType],
        verbose: argv.verbose || false,
    })
        .then(driver => run(driver))
        .then(() => console.log('Buh-Bye...'))
        .catch((err) => console.log(err));
})();

const run = async (driver) => {
    for (let component of components) {
        await screenshotComponent(driver, component)
    }
    await driver.quit();
};

const screenshotComponent = async (driver, component) => {
    console.log(`[${argv.runType}] >>>>> ${component} >>>>>`);

    const isIOS = argv.runType.toLowerCase().indexOf("ios") > -1;

    let listItem;
    if (isIOS) {
        listItem = await driver.findElementByText(component);
    } else {
        listItem = await driver.findElementByXPath(`//*[contains(@text,'${component}')]`);
    }

    await listItem.tap();

    await driver._driver.sleep(1000);

    if (component === 'HtmlView' || component === 'WebView') {
        await driver._driver.sleep(4000);
    }

    await driver.takeScreenshot(`screenshots/${argv.runType}/${component}.png`);

    if (component.includes('Dialog')) {
        if (isIOS) {
            await driver._driver.sleep(1000);
            const button = component === "ActionDialog" ? "cancel" : "OK";
            const dialogItem = await driver.findElementByText(button, 1); // 1 = 'contains'
            if (dialogItem) {
                dialogItem.tap();
                await driver._driver.sleep(1500);
            } else {
                console.log("Could not find button to dismiss the dialog!");
            }
        } else {
            await driver.navBack();
        }
    }

    await driver.navBack();

    if (component === 'SearchBar' && argv.runType.toLowerCase().indexOf('android') > -1) {
        await driver.navBack();
    }
};