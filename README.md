# NodeJs Template

### Introduction

This is a basic template to start a new project with NodeJs using TypeScript, Express, Jest, Eslint, Prettier, Husky and Nodemon.

### Requirements

  - Git
  - Node Lts
  - Yarn or Npm

### Documentation

  - Clone the project:
    ```bash
    git clone https://github.com/daibergm/nodejs-template.git
    ```
  - Move to the project dir:
    ```bash
    cd nodejs-template
    ```
  - Install dependencies:
    ```bash
    yarn
    # or
    npm i
    ```
  - Build the project:
    ```bash
    yarn build
    # or
    npm run build
    ```
  - Run the project from build folder:
    ```bash
    node build/index.js
    ```
  - Run the project to watch changes with nodemon:
    ```bash
    npm run start
    #or
    yarn start
    ```
  - In your console you should see: `Server is listening on port 3000!`
  - You can test the server by using curl:
    ```bash
    curl localhost:3000
    ```
  - It should return `{"data":"Hello World!"}`
  - To run test, execute this command:
    ```bash
    yarn test
    #or
    npm run test
    ```
  - To run lint, execute this command:
    ```bash
    yarn lint
    #or
    npm run lint
    ```