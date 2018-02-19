# NativeScript-Vue UI tests
This project uses Appium to test Vue UI components, and also serves as a source for the
component screenshots at [nativescript-vue.org](https://nativescript-vue.org/).

## System requirements
* Node 7.6 or higher (for async function support).
* The [Appium](http://appium.io/) client. Just download and install the latest [from GitHub](https://github.com/appium/appium-desktop/releases/latest).

## Running the tests locally
Start Appium and press 'Start the server', or you'll receive an error `127.0.0.1:4723` can't be reached.

### Android
```bash
npm run android.build
npm run android.screenshots
```

### iOS
```bash
npm run ios.build
npm run ios.screenshots
```
