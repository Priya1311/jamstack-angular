# Angular JAMstack Sample

A sample web app on JAMstack in angular (CLI version 11) application using static site generator SCULLY and NETLIFY for deployment.

## Installation

Go to project folder and install dependencies:

```sh
cd project_name
npm i
ng serve
open localhost:4200
```

For running scully:

```sh
ng build --prod
npm run scully
Go to dist/static/index.html to serve the site
```

For deployment to Netlify:

```sh
ng build --prod
netlify init
netlify deploy
Site will be deployed at: https://602f765fb0e35293b5236ddb--angular-jamstack-scully.netlify.app/home
```

## Tech used

[Angular](https://angular.io)
[JAMstack](https://jamstack.org/)
[Scully](https://scully.io/)
[Netlify](https://www.netlify.com/)

## Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).
