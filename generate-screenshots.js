const argv = require('yargs').argv;
const AppiumDriver = require('nativescript-dev-appium/lib/appium-driver').AppiumDriver;
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

(async function () {
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

  const listItem = await driver.findElementByText(component);
  await listItem.tap();

  await driver._driver.sleep(500);

  if (component === 'HtmlView' || component === 'WebView') {
    await driver._driver.sleep(4000);
  }

  if (!fs.existsSync(`screenshots/${argv.runType}`)) {
    fs.mkdirSync(`screenshots/${argv.runType}`);
  }

  await driver.takeScreenshot(`screenshots/${argv.runType}/${component}.png`);
  await driver.navBack();
  if (component === 'SearchBar') {
    await driver.navBack();
  }
};