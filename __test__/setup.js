const wd = require('wd');
const path = require('path');

global.createDriver = () => {
    const capabilities = {
        platformName: 'Android',
        platformVersion: '7.1',
        deviceName: 'TA93003D64',
        udid: 'TA93003D64',
        app: path.resolve('platforms', 'android', 'build', 'outputs', 'apk', 'nativescriptvueuitests-debug.apk')
    };

    const driver = wd.promiseChainRemote('0.0.0.0', 4723);

    return driver.init(capabilities);
}
