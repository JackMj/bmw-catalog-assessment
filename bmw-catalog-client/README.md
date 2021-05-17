Getting started
----------------------------------

#### Running the application
```bash
# To run the application you to change directory to the root directory of the application
cd bmw-catalog-client
# then execute ng serve 
ng serve 

#### Alternatively you can use the docker compose file to run both backend and frontend with command below.
cd bmw-catalog-assessment
docker-compose up --build

```

For comprehensive documentation on docker, please see their [documentation](https://docs.docker.com/compose/).

#### Directory structure
```
.
├── README.md

├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.config.js       <- e2e tests configuration
├── src/                       <- source code of the application
│   ├── app/
|   |   └── views/
|   |       └── nav/
|   |           └── nav.component.html
|   |           └── nav.component.css
|   |           └── nav.component.ts
|   |       └── catalog/
|   |       └── catalog.component.html
|   |       └── catalog.component.css
|   |       └── catalog.component.ts
|   |           └──catalog-table
|   |               └──catalog-table.component.html
|   |               └──catalog-table.component.css
|   |               └──catalog-table.component.ts
│   │   └── app.component.html
│   │   └── app.component.scss
│   │   └── app.component.ts
│   │   └── app.e2e-spec.js    <- sample e2e spec file
│   │   └── app.module.ts
│   │   └── app.routing.ts
│   │   └── main.ts            <- boostrap file for the angular app
│   └── index.html
├── angular-cli.json           <- configuration of the angular-cli
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── yarn.lock
```

