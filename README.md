<p align="center">
  <a href="//architect.io" target="blank"><img src="https://docs.architect.io/img/logo.svg" width="320" alt="Architect Logo" /></a>
</p>

<p align="center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---

<p align="center">
  <a href="//react.org" target="blank"><img src="https://create-react-app.dev/img/logo.svg" width="320" alt="React Logo" /></a>
</p>

<p align="center">
  A JavaScript library for building user interfaces.
</p>

---

# React Starter Project
[React](https://reactjs.org/) is a popular JavaScript framework for building frontend user interfaces for web applications. 
This project is an example application bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and packaged into an Architect Component.

In the [`architect.yml`](//docs.architect.io/components/architect-yml/n) file for this project, we describe the React application as 
a [service](https://docs.architect.io/components/services/) and connect it to a 
[Node.js REST API](https://github.com/architect-templates/node-rest-api) as a [dependency](https://docs.architect.io/components/dependencies/). 
We also leverage Architect's [service referencing syntax](//docs.architect.io/components/service-discovery/#service-referencing-syntax)
to populate network information, which allows Architect to seamlessly promote this stack from local dev all the way through to production!


## Using the React App
This example application is configured to connect to the [Node.js Starter Project](https://github.com/architect-templates/node-rest-api) 
REST API for its backend, but you can modify the `architect.yml` file to connect to any REST API backend that has been registered to your account as an
Architect Component.

Once this application is running, you will be able to submit your favorite horror films, rate them, and see the list 
of all the films and ratings that have been submitted through your application. 

<img align="center" src="./app-screenshot.png" alt="App Screenshot" />

## Requirements
Before you can run this example application, you will need to install the [Architect CLI](https://github.com/architect-team/architect-cli).

## Registering Dependencies
Since this application uses the [Node.js Starter Project](https://github.com/architect-templates/node-rest-api) as an external 
dependency, packaged into an independent Architect Component, you will need to clone that repository as well as this repository. 
Dependencies allow you to package the parts of your application stack independently rather than declaring them as services 
within the same `architect.yml` file, allowing
reuse of your components. 

Once you have cloned the Node.js Starter Project, you will need to use the [`link` command](https://docs.architect.io/deployments/local-environments/#local-registration)
before starting the React application locally. This command tells Architect to look for the source code for this dependency locally rather than pulling
down a Component that has been registered in Architect Cloud. 

```sh
# Clone the Node.js Starter Project repository, 
# Navigate to the repository's top-level directory, and link the project
$ git clone git@github.com:architect-templates/node-rest-api.git
$ cd ./node-rest-api
$ architect link .
$ cd ../
```

## Running Locally
The `architect.yml` file is declarative, which allows the Architect Component it describes to be run in any environment,
from local development all the way to production. Follow these steps to clone this repository and run the application
locally.

Once the deployment has completed, you can reach your new service by going to http://app.arc.localhost. 

```sh  
# Clone the repository and navigate to this directory
$ git clone git@github.com:architect-templates/react.git
$ cd ./react

# Deploy locally using the dev command
$ architect dev .
```
## Deploying to the Cloud

Want to try deploying this to a cloud environment? Architect's got you covered there, too! It only takes a minute to
[sign up for a free account](https://auth.architect.io/u/signup?state=hKFo2SAtSnhOdXljdy1nelBHb2NlajNhZkkybTlLOEJHcWRFeaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFNCNEZUUFBHaWpBdlA3UVlVV0xFNk1rQVJvUHBzdF9Bo2NpZNkgbElwVzlmcTlJRlFCQmpUZ2xsaE42RUkwMVRYTWhSVm0).

You can then [register each component](https://docs.architect.io/getting-started/?_ga=2.19805311.635236263.1652126693-1328677302.1650395826#register-a-component)
to your free environment and [deploy the application](https://docs.architect.io/getting-started/introduction/#deploy-to-the-cloud). 

To do this, run the following commands.
The `<account-name>` is the name you used when you created your account in Architect Cloud. Use "example-environment" for
the `<environment-name>` to deploy to the free environment that is created when you register with Architect.

```sh
# Register and tag the node-rest-api component with Architect Cloud's component registry
$ cd ../node-rest-api
$ architect register . --tag latest --account <account-name>

# Register and tag the react component with Architect Cloud's component registry
$ cd ../react
$ architect register . --tag latest --account <account-name>

# Deploy to Architect Cloud
$ architect deploy react -a <account-name> -e <environment-name>
```