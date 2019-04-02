# Cordova ML Kit

Implements ML Kit as Cordova plugin on iOS and Android.

## Installation

Clone this repository to the root folder of your project.
Add plugin <plugin name="cordova-ml-kit" spec="cordova-ml-kit" />

## Features

At the moment only Text Recognition and Labeling Images on Android is supported! This plugin requires ``cordova-plugin-firebase``!

| Feature                | Android | Android (Cloud) | iOS | iOS (Cloud) |
|------------------------|---------|-----------------|-----|-------------|
| Text recognition       | [x]     | [x]             | [ ] | [ ]         |
| Face detection         | [ ]     |                 | [ ] |             |
| Barcode scanning       | [ ]     |                 | [ ] |             |
| Image labeling         | [x]     | [x]             | [ ] | [ ]         |
| Landmark recognition   |         | [ ]             |     | [ ]         |
| Custom model inference | [ ]     |                 | [ ] |             |

Some features of ML Kit are only available on device others only on cloud. Please see https://firebase.google.com/docs/ml-kit/ for more information!

## API Methods
### Text recognition

##### **`getText(img, options, success, error): void`**
Text recognition on device

#####  **`getTextCloud(img, options, success, error): void`**
Text recognition on Cloud - Much better results, but you need an active paid plan (Blaze Plan) and activate it on Google Cloud. Parameter are the same like getText

### Image labeling

#####  **`getLabel(img, options, success, error): void`**
Image Labeling on device

#####  **`getLabelCloud(img, options, success, error): void`**
Image Labeling on Cloud

### Face detection

### Barcode scanning

### Landmark recognition

### Custom model inference

## Usage

window['MlKitPlugin'].getText(file, {},
    (success) => {
        console.log("getText success", success);
    },
    (error) => {
        console.log("getText error", error);
});

