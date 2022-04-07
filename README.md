# micro-quasar
****Not suitable for production use, meant only as a demo to show possibilities.**

****See [v2 branch](https://github.com/ourparentcenter/micro-quasar/tree/v2) for updated demo that includes bootfile support and more examples of single-spa features**

Demo app of micro front-end using quasar &amp; single-spa.

# Contents
- 3 quasar v2 apps (header, left-drawer, main)
- Single-spa app (root)
## Usage
- yarn or npm install in all apps (header, left-drawer, main, root)
- add quasar to global packages
- start each app (quasar dev for all save root app, yarn or npm start in root app)
- browse to http://localhost:9000

### Info
This demo uses 3 quasar apps & single-spa as root. You may notice that the header & left drawer apps have empty routes, this is intentional. Quasar has yet a way to completely remove vue-router so any links to apps & sub routes ot apps will be taken over by header or left-drawer if routes are present. Routing to sub routes within apps works as long as another app doesn't have the path specified in it's routes file, so when constructing your single-spa quasar app plan your routing wisely.

Since quasar auto creates the app.js & client-entry.js files I had to use string-replace-loader webpack plugin to modify the compiled files and comment out the `.then(start)` section of the client-entry.js file so that the error in devtools of #q-app element not being found went away. This doesn't seem to have an impact on functionality.

### Boot files
This demo doesn't take boot files into account. It was reported that boot files are not loading due to the string replace of `.then(start)`. The solutoin to this should be changing the target in quasar config file from `test: /\.js$/` to `test: /(\b(\w*client-entry\w*)\b)+.js$/` so that only the `client-entry.js` file is targed.

## Important note on routing
The single-spa-entry.js file can pull in the router routes from an app. an example of this in in the main app where single-sp-entry.js contains teh following lines:

```js
import qcreateApp from '../.quasar/app.js';

...

let routerInstance;
void qcreateApp(createApp, quasarUserOptions).then(({ router }) => {
  routerInstance = router;
});
```
what is happeningn her is that we are using teh app.js method to create an instance of the router then using the router in the app with app.use:

```js
handleInstance(app) {
  app.use(Quasar, quasarUserOptions);
  app.use(routerInstance);
},
```

For quasar apps that will not have thier own routes, liken in header and left drawer apps, these lines need to be removed so that they will not be attempting to match routes which will lead to warnings in the dev console of the browser.

Also, the app that will be at "/", the entry point of "/", should have it's route defiled as:

```js
<route default>
```

this will unmount the app and prevent the app from resolving or attempting to match any routes after the initial "/" within the url. if you use ```path="/"``` for the entry app route then the entry app will always attempt to resolve all paths after the inital trailing "/" which will cause warnings in the dev console.
