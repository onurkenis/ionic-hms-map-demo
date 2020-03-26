# Ionic HMS Map Demo
An Ionic sample integrated with HMS Map Kit JavaScript Api.

![Ionic HMS Map mobile](demo/mobile.gif)

## Running the application

### Adding HMS API Key

1. Copy your API Key from following section 

```sh
AppGallery Connect > Your App > Develop > Overview > App Information > API key
```

2. Open src/index.html

3. Modify loadMapScript() function and paste your API Key here

```js
const apiKey = encodeURIComponent("YOUR_API_KEY");
const src = `https://mapapi.cloud.huawei.com/mapjs/v1/api/js?callback=initMap&key=${apiKey}`;

const mapScript = document.createElement('script');
mapScript.setAttribute('src', src);
document.head.appendChild(mapScript);
```

### Run Locally in a Web Browser

Add your HMS API Key and cd into your app directory

```sh
ionic serve
```
You can visit http://localhost:8100/ in your web browser to see the app in action

### Running on Android

1. Add your HMS API Key

2. Install dependencies

```sh
cd ionic-hms-map-demo
npm install
```

3. Build Ionic app with the following command

```sh
ionic build
```

4. Manually add the Android project.

```sh
npx cap add android
```

5. Build and run the Ionic App using Android Studio. Once Android Studio launches, you can build/emulate/run your app through the standard Android Studio workflow.

```sh
npx cap open android
```

If you are having issues, you can follow [getting started.](https://capacitor.ionicframework.com/docs/android/)

![Ionic HMS Map web](demo/web.gif)

