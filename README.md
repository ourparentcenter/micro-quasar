# micro-quasar v2
****Not suitable for production use, meant only as a demo to show possibilities.**

Demo app of micro front-end using quasar &amp; single-spa with boot files and Pinia state store. This demo also makes use of browser modules by importing a function from main and left drawer apps into the header app. This allows direct manipulation of the states for both apps.

# Contents
- 3 quasar v2 apps (header, left-drawer, main)
- Pinia store
- Single-spa app (root)

## Usage
- yarn or npm install in all apps (header, left-drawer, main, root) - this project makes use of yarn natively and a prepare command has been added to project base package.json for convenience. If you are using npm then you must npm install in each app folder manually.
- add quasar to global packages
- start each app (quasar dev for all save root app, yarn or npm start in root app)
- browse to http://localhost:9000

### Info
This demo uses 3 quasar apps & single-spa as root. You may notice that the header & left drawer apps have empty routes, this is intentional. Quasar has yet a way to completely remove vue-router so any links to apps & sub routes ot apps will be taken over by header or left-drawer if routes are present. Routing to sub routes within apps works as long as another app doesn't have the path specified in it's routes file, so when constructing your single-spa quasar app plan your routing wisely.

Since quasar auto creates the app.js & client-entry.js files I had to use string-replace-loader webpack plugin to modify the compiled files and comment out the `.then(start)` section of the client-entry.js file so that the error in devtools of `#q-app` element not being found went away. This doesn't seem to have an impact on functionality.

### Boot files
This demo takes boot files into account. It was originally reported that boot files were not loading due to the string replace of `.then(start)`. The solution to this was changing the target in quasar config file from `test: /\.js$/` to `test: /(\b(\w*client-entry\w*)\b)+.js$/` so that only the `client-entry.js` file is targed.

More recent versions of quasar, when using pinia, seem to add `app.mount('#q-app')` to the client-entry.js file. The behavior of how the client-entry.js is created also seems to depend on if you select pinia or other modules during project creation so, look at the client-entry.js and adjust the string replace to suit you needs.

## Important note on routing
The single-spa-entry.js file can pull in the router routes from an app. an example of this in in the main app where single-sp-entry.js contains the following lines:

```js
import qcreateApp from '../.quasar/app.js';

...

let routerInstance;
void qcreateApp(createApp, quasarUserOptions).then(({ router }) => {
  routerInstance = router;
});
```
what is happeningn her is that we are using the app.js method to create an instance of the router then using the router in the app with app.use:

```js
handleInstance(app) {
  app.use(Quasar, quasarUserOptions);
  app.use(routerInstance);
  app.use(createPinia());
},
```

For quasar apps that will not have thier own routes, liken in header and left drawer apps, these lines need to be removed so that they will not be attempting to match routes which will lead to warnings in the dev console of the browser.

Also, the app that will be at "/", the entry point of "/", should have it's route defiled as:

```js
<route default>
```

this will unmount the app and prevent the app from resolving or attempting to match any routes after the initial "/" within the url. if you use ```path="/"``` for the entry app route then the entry app will always attempt to resolve all paths after the inital trailing "/" which will cause warnings in the dev console.
