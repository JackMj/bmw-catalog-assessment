Project Description
----------------------------------

The project has a backend api which exposes a catalog list of bmw cars and its description, the project also consist of frontend service that listens to the api catalog list and displays it in a table view. 

The project consist of BMW-CATALOG-CLIENT and it was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

and is also consist of BMW-CATALOG-SERVER backend server and was generated with [NODE](https://nodejs.org/en/) version 12.18.4.


Running the project
----------------------------------
```bash
#### Please change directory to bmw-catalog-assessment and execute the following command to run the application this will run both backend and frontend application.

#### To use docker-compose up please make sure you have docker installed on your machine, please find link below 

cd bmw-catalog-assessment
docker-compose up --build

#### Alternatively you can run the apps the traditional way.
# BMW-CATALOG-CLIENT
cd bmw-catalog-assessment/bmw-catalog-client
npm install
ng serve

# BMW-CATALOG-SERVER
cd bmw-catalog-assessment/bmw-catalog-client
npm install
npm start


```

For comprehensive documentation on Angular-CLI, please see their [docker documentation](https://docs.docker.com/compose/).


Directory Structure
----------------------------------

please note that each project has its own readme file. this is just an overview of the project

```
.
├── bmw-catalog-client
├── src/                       <- source code of the application
│   └── app/
│   ................................................................
├── bmw-catalog-server <- source code of the application
│    └──controllers/
│   └──mock-data/
│   └──routes/
│   └──app.js
│   └──README.md
│   ................................................................
│
├── docker-compose.yml
├── .gitingore
├── .README.md

```

