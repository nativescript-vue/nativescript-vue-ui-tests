# NativeScript-Vue UI tests
This project uses Appium to test Vue UI components, and also serves as a source for the
component screenshots at [nativescript-vue.org](https://nativescript-vue.org/).

## System requirements

* Node 7.6 or higher (for async function support).
* The [Appium](http://appium.io/) client. Just download and install the latest [from GitHub](https://github.com/appium/appium-desktop/releases/latest) or execute the following command:

```bash
npm install -g appium
```

### iOS requirements

* Carthage:

```bash
brew install carthage
````

## Running the tests locally

Start Appium, which is

* Using the desktop app, press 'Start the server'
* Using the NPM package, execute `appium` on a terminal

Otherwise you'll receive an error `127.0.0.1:4723` can't be reached.

### Android

Edit the `appium.capabilities.json` config file, in the `android23` section, with your device/emulators parameters, probably only the `avd` or `deviceName` parameters would be enough.

Start the tests:

```bash
npm run android.build
adb install ./platforms/android/app/build/outputs/apk/debug/app-debug.apk
npm run android.screenshots
```

### iOS

Edit the `appium.capabilities.json` config file, in the `ios-simulator103iPhone6` section, with your device/emulators parameters.

Build the iOS app

```bash
npm run ios.build
```

Start `XCode` and open the `platforms/ios/nativescriptvueuitests.xcodeproj` file.

Run the app on the emulator. This is needed in order to have the app installed.

Run the tests:

```bash
npm run ios.screenshots
```
