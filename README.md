<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.architect.io/logo/horizontal-inverted.png">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.architect.io/logo/horizontal.png">
    <img width="320" alt="Architect Logo" src="https://cdn.architect.io/logo/horizontal.png">
  </picture>
</p>

<p style="text-align:center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---

<p style="text-align:center">
  <a href="//react.org" target="blank"><img src="https://create-react-app.dev/img/logo.svg" width="320" alt="React Logo" /></a>
</p>

<p style="text-align:center">
  A JavaScript library for building user interfaces.
</p>

---

# React Starter Project
[React](https://reactjs.org/) is a popular JavaScript framework for building frontend user interfaces for web applications. 
This project is an example application bootstrapped with [Create React App](https://github.com/facebook/create-react-app) 
and packaged into an Architect component.

This starter application will show how easy it is to deploy an application both locally and in a remote environment.

## Pre-reqs
* Install [Docker](https://docs.docker.com/get-docker/) and make sure it's running
* Install the [Architect CLI](https://github.com/architect-team/architect-cli)
* [Sign up for a free Architect account](https://cloud.architect.io/signup)

## Clone the repo
To use this project, you can clone this repo yourself or use the `architect init` command.

### Use `architect init`
Run the following command to allow Architect to clone this project for you:

```sh 
$ architect init react
$ cd ./react
```

### Clone it yourself
Run the following command to clone the repo yourself:

```sh
# Clone the repository and navigate to this directory
$ git clone git@github.com:architect-templates/react.git
$ cd ./react
```

## Run Locally
Once the repo has been cloned to your local machine, execute the following command from the `react` directory to run it locally:

```sh
$ architect dev .
```

When this command completes, you can reach your new application by going to https://app.localhost.architect.sh.
### Make your own changes

This application's `architect.yml` file contains a `debug` block that enables hot-reloading for each service 
within the component. That means you can make changes to the source code and those changes will be applied to the 
environment automatically. This allows you to quickly iterate and see your changes without having to restart the 
application stack.

Give it a try! Search inside your project for “Movie Ratings” and change this string to “Pizza Ratings.” Once you save 
the file, you’ll see the frontend service recompiling in the logs and then your browser window will update automatically.

## Deploy to the Cloud

Want to try deploying this application to a cloud environment? Architect's got you covered there, too!
We offer free preview environments in our community cloud where you can deploy your applications  
before deploying to staging or prod. This is a great opportunity for testing and getting early feedback before merging
your code. In fact, you can [configure your GitOps](https://docs.architect.io/tutorial/creating-a-component)
to automatically deploy every PR to Architect's community cloud.

### Create an environment

To create a new environment on Architect's
free cloud, run the following command:

```sh
architect environments:create my-first-environment
```
This command presents you with a list of Kubernetes clusters. Since you haven't added any external clusters to your
account, you should only see `architect`. Hit enter to create your environment on Architect's community cloud.

```sh
? Select a cluster (Use arrow keys or type to search)
❯  architect
```
When the command completes, you should see output similar to the following:
```sh
%architect environments:create my-first-environment
? Select a cluster architect
Registering environment with Architect... done
Environment created: https://cloud.architect.io/<account-name>/environments/my-first-environment
```

### Register your component
Before you can deploy to your new environment, you need to register your component with Architect. This command builds
the artifacts for your component and pushes them to Architects registry so they are available to deploy to an 
environment in your account. 

To register your component, run the following command from the `react` directory:

```sh
$ architect register . --tag latest --account <account-name>
```
### Deploy your component

You are now ready to deploy your component to your environment in Architect's community cloud. To deploy your component, 
run the following command from the `react` directory:

```sh
architect deploy react:latest --account <account-name> \
--environment my-first-environment
```
Congrats! You've deployed your first component using Architect. 