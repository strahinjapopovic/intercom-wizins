# intercom-wizins

## Project MERN - Full Stack Repository

![node version](https://img.shields.io/npm/v/node?logo=nodedotjs&label=Node.js%20RTE%20npm) ![npm version](https://img.shields.io/npm/v/npm?logo=npm&label=Node%20Package%20Manager%20npm) ![react version](https://img.shields.io/npm/v/react?logo=react&label=React%20npm) ![express version](https://img.shields.io/npm/v/express?logo=express&label=Express.js&labelColor=grey&color=blue) ![mongodb version](https://img.shields.io/npm/v/mongodb?style=flat&logo=mongodb&label=MongoDB&color=green) ![mongoose version](https://img.shields.io/npm/v/mongoose?style=flat&logo=mongoose&label=mongoose&color=red) ![@apollo/server](https://img.shields.io/npm/v/%40apollo%2Fserver?logo=apollo&label=%F0%9F%9A%80%20%40apollo%2Fserver%20npm)

<p align="left">
    <img src="https://img.shields.io/github/languages/top/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/repo-size/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/issues/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/last-commit/strahinjapopovic/node-gen-readme?style=flat&color=blue" >
</p>
    
<p align="left">
    <a href="https://gist.github.com/Julien-Marcou/156b19aea4704e1d2f48adafc6e2acbf"><img src="https://img.shields.io/badge/es2023-javascript-blue?logo=javascript" /></a>
    <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/v22-node-blue?logo=nodedotjs" /></a>
    <a href="https://docs.npmjs.com/about-npm#getting-started"><img src="https://img.shields.io/badge/v10-npm-blue?logo=npm" /></a>
    <a href="https://www.npmjs.com/package/json5"><img src="https://img.shields.io/badge/v2-json5-blue?logo=npm" /></a>
</p>

<p align="left">
    <a href="https://twitter.com/stanpopovic"><img alt="Twitter: stanpopovic" src="https://img.shields.io/twitter/follow/stanpopovic.svg?style=social" target="_blank" /></a>
    <a href="https://www.youtube.com/@strahinja-popovic-ch"><img alt="Youtube: strahinja-popovic-ch" src="https://img.shields.io/badge/YouTube-red?&logo=youtube&style=social" target="_blank" /></a>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) 

## MERN Full-Stack JS Client-Serveer architecture application with React-v18.3.1, Node.js v22.0.0, NPM-v10.5.1, Express.js-v4.17.2, MongoDB-v6.8.0, Mongoose-v8.7.2, @apollo/server-v4.7.1, Vite, GraphQL, PWA, AWS S3, SCSS, EmailJS and more ...

<a id="table-of-content"></a>
## Table of Content

- [Description Info](#description-info)
- [GitHub Repository Badge](#github-repository-badge)
- [Installation Process](#installation-process)
- [Usage Info](#usage-info)
- [Contributing Guidelines](#contributing-guidelines)
- [Test Instructions](#test-instructions)
- [Live on render](#live-on-render)
- [License](#license)
- [Questions and Contacts](#questions-and-contacts)

<img src="https://user-images.githubusercontent.com/11247099/112722104-819b8a80-8f42-11eb-82f5-dfc2dd5d8a77.png" height="32" />

Altrnatively, use the "Table of Contents" menu on the top-right corner to explore the list.

<a id="description-info"></a>
## Description Info

Intercom Wizard Installer or intercom-wizins repo application is build as a client-server architecture that uses Apollo Server as a comprehensive GraphQL Server/ Client configuration engine formed of two layers server/ and client/ while using GraphQL as a single proxy API endpoint. 

`Client` layer uses queries and mutations and performs all GraphQL transactions at proxy level localhost:3001 while server normaly operates at oprt localhost:3000. Directory client/ includes all the contents of basic template react-vite files and folders (public/, src/, index.html, .eslintrc.cjs, vite.config.js) that are pre-defined or built in after terminal command run ~/app/client> npm run build taking actions script at app/client/package.json. Queries and mutations are part of utilities at client layer but execution ocurred at server level and sending back to client at single API endpoint actual GraphQL proxy gateway. See file tree below (Grouping by file type approach is used). 

```bash
intercom-wizins/
├─ .vscode/
│  └─ settings.json
├─ app/
│  ├─ client/
│  │  ├─ dev-dist/
│  │  │  ├─ registerSW.js
│  │  │  ├─ sw.js
│  │  │  ├─ workbox-9637eeee.js
│  │  │  └─ workbox-a9fe0588.js
│  │  ├─ dist/
│  │  │  ├─ assets/
│  │  │  ├─ manifest.webmanifest
│  │  │  ├─ registerSW.js
│  │  │  ├─ sw.js
│  │  │  ├─ vite.svg
│  │  │  └─ workbox-4b7ad3f1.js
│  │  ├─ public/
│  │  ├─ src/
│  │  │  ├─ assets/
│  │  │  │  ├─ images/
│  │  │  │  └─ react.svg
│  │  │  ├─ components/
│  │  │  │  ├─ checkbox/
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ dashboard/
│  │  │  │  │  ├─ children/
│  │  │  │  │  │  ├─ DashLink.jsx
│  │  │  │  │  │  ├─ DetailsLink.jsx
│  │  │  │  │  │  ├─ DownloadLink.jsx
│  │  │  │  │  │  ├─ ResetPassLink.jsx
│  │  │  │  │  │  └─ UserOnline.jsx
│  │  │  │  │  ├─ parent/
│  │  │  │  │  │  └─ ProfileParent.jsx
│  │  │  │  │  └─ skeletoncomp/
│  │  │  │  │     └─ DashSkeleton.jsx
│  │  │  │  ├─ datarow/
│  │  │  │  │  ├─ DataRowChild.jsx
│  │  │  │  │  └─ DataRowParent.jsx
│  │  │  │  ├─ dialogbox/
│  │  │  │  │  ├─ deleteuserdialog.jsx
│  │  │  │  │  ├─ dialog.jsx
│  │  │  │  │  └─ style.scss
│  │  │  │  ├─ download/
│  │  │  │  │  ├─ index-mobile.jsx
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ error/
│  │  │  │  │  ├─ errorSignup.jsx
│  │  │  │  │  └─ errorUnauthorisedAccess.jsx
│  │  │  │  ├─ footer/
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ header/
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ home/
│  │  │  │  │  ├─ index-mobile.jsx
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ installLink/
│  │  │  │  │  └─ index.jsx
│  │  │  │  ├─ spinner/
│  │  │  │  │  └─ spinnerLoader.jsx
│  │  │  │  ├─ title/
│  │  │  │  │  └─ index.jsx
│  │  │  │  └─ updateuserstatus/
│  │  │  │     ├─ useronlinestatus.tsx
│  │  │  │     └─ useronlinestatusclone.tsx
│  │  │  ├─ pages/
│  │  │  │  ├─ Details.tsx
│  │  │  │  ├─ Download.tsx
│  │  │  │  ├─ ForgotPassword.tsx
│  │  │  │  ├─ ForgotPasswordClone.tsx
│  │  │  │  ├─ Home.tsx
│  │  │  │  ├─ Login.tsx
│  │  │  │  ├─ Profile.tsx
│  │  │  │  ├─ ResetPassword.tsx
│  │  │  │  ├─ RouteErrorPage.tsx
│  │  │  │  ├─ Signup.tsx
│  │  │  │  ├─ SignupError.tsx
│  │  │  │  └─ UserOnline.tsx
│  │  │  ├─ utils/
│  │  │  │  ├─ graphql/
│  │  │  │  │  ├─ mutations.ts
│  │  │  │  │  └─ queries.ts
│  │  │  │  ├─ alphaNumStr.ts
│  │  │  │  ├─ authent.ts
│  │  │  │  └─ specCharStr.ts
│  │  │  ├─ App.css
│  │  │  ├─ App.jsx
│  │  │  ├─ custom.d.ts
│  │  │  └─ main.jsx
│  │  ├─ types/
│  │  │  └─ types.ts
│  │  ├─ .eslintrc.cjs
│  │  ├─ index.html
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  └─ vite.config.js
│  ├─ utils/
│  │  └─ auth.ts
│  ├─ .env
│  ├─ .env.Example
│  ├─ package-lock.json
│  ├─ package.json
│  └─ tsconfig.json
├─ images/
│  ├─ intercom-wizins-download-preview.png
│  ├─ intercom-wizins-seed-preview.png
│  ├─ wizard-small-favicon.png
│  ├─ wizins-favicon-wLogo.png
│  ├─ wizins-js-logo-aqua.png
│  └─ wizins-mongodb-install.png
├─ .gitignore
├─ LICENSE
└─ README.md
```

`Server` utilise express.js framework, apollo server, apollo express middleware, static files, assigning type definitions and resolvers to apollo server and GraphQL, releasing connection with DB over GraphQL and turning on apollo server. Directory server/ include all server-side config architecture necessary to build and establish connection with database, to provide DB seeding of testing data and maintain ongoing DB transactions ect., e.g. (models/, schemas/, config/, utils/, seeders/, server.js). 

```bash
intercom-wizins/
├─ .vscode/
│  └─ settings.json
├─ app/
│  ├─ server/
│  │  ├─ config/
│  │  │  ├─ connection.ts
│  │  │  └─ seed.ts
│  │  ├─ models/
│  │  │  └─ User.ts
│  │  ├─ schemas/
│  │  │  ├─ resolvers.ts
│  │  │  ├─ schema.graphql
│  │  │  └─ typeDefs.ts
│  │  ├─ seeders/
│  │  │  └─ user-seeds.json
│  │  ├─ src/
│  │  │  └─ __generated__/
│  │  │     └─ resolvers-types.ts
│  │  ├─ utils/
│  │  │  └─ utils.ts
│  │  ├─ codegen.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ server.ts
│  │  ├─ tsconfig.json
│  │  └─ tsconfig.tsbuildinfo
│  ├─ utils/
│  │  └─ auth.ts
│  ├─ .env
│  ├─ .env.Example
│  ├─ package-lock.json
│  ├─ package.json
│  └─ tsconfig.json
├─ images/
│  ├─ intercom-wizins-download-preview.png
│  ├─ intercom-wizins-seed-preview.png
│  ├─ wizard-small-favicon.png
│  ├─ wizins-favicon-wLogo.png
│  ├─ wizins-js-logo-aqua.png
│  └─ wizins-mongodb-install.png
├─ .gitignore
├─ LICENSE
└─ README.md
```

The root dir is `app/` directory. Two main dirs are ~/app/server/ and ~/app/client/. Because of use of Apollo Client-Server architecture and utility with GraphQL API endpoint usuall directory configuration and content which relied on classic Model-View-Controller (MVC) architecture have to be adjusted. At sever-side we would have e.g. ./schema.js and ./resolvers.js OR schemas/typeDef.js and schemas/resolvers.js like in our example. In typeDef.js we should define all types and their fields as a blueprint which is actuall basic sceleton of data types and their properties. At resolvers.js we define resolvers functions for each used type and field in typeDefs.js. Those are the basic steps in forming directory, files and folders structure. Later on we add more components, pages and utilities to the project. 

[<img src="./images/intercom-wizins-download-preview.png" alt="Online web presentation." />](./images/intercom-wizins-download-preview.png)

<a id="github-repository"></a>
## GitHub Repo Badge
[![GitHub](https://img.shields.io/badge/logo-GitHub-white?style=flat&logo=github&logoColor=whitek&label=inter-com-wizins&labelColor=gray&color=blue)](https://github.com/strahinjapopovic/inter-com-wizins)

<a id="installation-process"></a>
## Installation Process
### As MongoDB will be used as a document database model it should be installed at first [MongoDB Installation Package](https://www.mongodb.com/try/download/community-kubernetes-operator). Click on the button download and start downloading MongoDB Windows installation package (`mongodb-windows-x86_64-7.0.12-signed.msi`). Also, before start make a empty dir on `C` drive (`C:>mkdir -p data/db`). Start MongoDB Setup Wizard and follow instructions. Setup type should be `Complete`, not Custom, Configuration as `Run service as Network Service user`, also install MongoDB Compass, press `next` and `install`. 

### Configurate MongoDB on Windows
Navigate to the bin directory of already instolled MongoDB on your machine and copy path (`C:\Program Files\MongoDB\Server\6.0\bin`) and go to Edit The System Environment Variables (System Properties) at your PC. After went to `Environment Variables` section, click on the `Path` at User Variables window and press `Edit` button. Click on button `New` and past previously copied path to MongoDB bin directory and press `Ok`. Check your MongoDB is working type in Git Bash terminal as follows (`[user@host: c/users/jdoe/~] $ mongod`): 

```bash
$ mongod
```
If terminal shows something like image below it means MongoDB is set properly. Othrewise repeat process again.

[<img src="./images/wizins-mongodb-install.png" alt="Git Bash Terminal screenshot." />](./images/wizins-mongodb-install.png)

After MongoDB is setup, npm packages should be installed at root dir of the application (`inter-com-wizins/app`):
To initialize package.json and to install node_packages run
```bash
$ npm init -y # initialize formating of package.json with answer "yes" to confirm init
$ npm install # installing node packages
```

To install mongodb npm packages run
```bash
$ npm install mongodb 
```

To install mongoose npm packages run
```bash
$ npm install mongoose
```

### Populate database with testing data
Seed data are stored in `user-seeds.json` file (`app/server/seeders/user-seeds.json`) and you can execute it from `app/server/config/seed.js` as follows:
```bash
$ node ./config/seed.js # execute from server/ dir
```
Alternatively,
```bash
$ npm run seed # automate executable shortcuts scripts at package.json from app/ dir
```
### Run seed output:
[<img src="./images/intercom-wizins-seed-preview.png" alt="VS Code Image." />](./images/intercom-wizins-seed-preview.png)

<a id="usage-info"></a>
## Usage Info

<a id="contributing-guidelines"></a>
## Contributing Guidelines

Currentlly, at this stage there is no contributors but for more information any enquiry can be reffered to Question and Contact section.

<a id="test-instructions"></a>
## Test Instructions

Application runs by invoking command `$ npm run dev` from root `intercom-wizins/app>` directory if you using scripts at package.json. Before running application, download compressed repo from githaub and installl packages globaly or at application root directory from the section [Installation Process](#installation-process). 

Install TypeScript, TypeScript Execute and Concurrently packages at once
```bash
$ npm install --save-dev typescript tsx concurrently # under packages of npm you would have npx runner and under typescript you should have tsc compiler automatically installed.
```

## Starting server from terminal without scripts
To start GraphQL server from root directory at http://localhost:3001/graphql
```bash
$ npx watch ./server/server.ts # OR node ./server/server.js 
```
To start Client-side from root dir at http://localhost:3000
```bash
$ cd client && npm run dev
```
Start server and client at once by using concurrently with no scripts
```bash
$ concurrently "cd ./server && npx tsx watch server.ts" "cd ./client && npx vite"
```
Install nodemon is optional
```bash
$ npm install --save-dev nodemon # nodemon runs "start" script at first run
```

## Starting server on scripts
If using scripts from root dir
```bash
$ npm run dev # it will start both server and client side ports at once (http://localhost:3000 AND http://localhost:3001/graphql)
```
All automate executable scripts that call server and client package.json scripts are stored at root directory `intercom-wizins/app/` in `package.json` file.
intercom-wizins/app/package.json
```json
"scripts": {
    "start": "nodemon ./server/server.ts",
    "dev": "concurrently \"cd ./server && npm run watch\" \"cd ./client && npm run dev\"",
    "build": "concurrently \"cd ./server && npm run watch\" \"cd ./client && npm run build\"",
    "install": "cd ./server && npm install && cd ../client && npm install",
    "seed": "cd ./server && npm run seed",
    "cbuild": "cd ./client && npm run build"
  },
```
intercom-wizins/app/server/package.json
```json
"scripts": {
    "seed": "npx tsx ./config/seed.ts",
    "codegen": "graphql-codegen --config codegen.ts",
    "compile": "npm run codegen && tsc",
    "start": "npm run compile && npx tsx ./server.ts",
    "watch": "nodemon"
  },
```
intercom-wizins/app/client/package.json
```json
"scripts": {
    "dev": "vite serve",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
<a id="live-on-render"></a>
## Live on [Render](https://js-wizard.onrender.com/)

Live application can be visited [here](https://js-wizard.onrender.com/).

[<img src="./images/wizard-small-favicon.png" width="400" alt="Repo image as thumbnail for testing purpose on Render." />](https://js-wizard.onrender.com/)

## License

Copyright © 2024, [codexdev](https://github.com/strahinjapopovic). Released under the [MIT License](./LICENSE).

<a id="questions-and-contacts"></a>
## Questions and Contacts

Questions about application can be reffered to the author's [GitHub account](https://github.com/strahinjapopovic) or you can [Contact Me](mailto:spope.mails@gmail.com) directly over an email.

