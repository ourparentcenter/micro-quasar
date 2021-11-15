# micro-quasar
Demo app of micro front-end using quasar &amp; single-spa

## Usage
- yarn or npm install in all apps (header, left-drawer, main, root)
- add quasar to global packages
- start each app (quasar dev for all save root app, yarn or npm start in root app)
- browse to http://localhost:9000

### Info
This demo uses 3 quasar apps & single-spa as root. You may notice that the header & left drawer apps have empty routes, this is intentional. Quasar has yet a way to completely remove vue-router so any links to apps & sub routes ot apps will be taken over by header or left-drawer if routes are present. Routing to sub routes within apps works as long as another app doesn't have the path specified in it's routes file, so when constructing your single-spa quasar app plan your routing wisely.