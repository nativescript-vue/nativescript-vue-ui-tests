require('yargs').config({
  //runType: 'android23',
  appiumCapsLocation: 'appium.capabilities.json'
});

const { startServer, stopServer, createDriver } = require('nativescript-dev-appium');

const run = async () => {
  await startServer();
  const driver = await createDriver();

  await [
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
  ].forEach(async (component) => {
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
  });

  await driver.quit();
  await stopServer();
};

run().then(() => {
  console.log('Buh-bye...');
}).catch((err) => {
  console.log('Something isn\'t quite right... :(');
  console.error(err);
});