# Town Hall Curator

An application to create town hall events for legislators in a single location

## project Setup

This project uses `pnpm` as the package manager. The project is configured as a monorepo using a PNPM Workspace. 

Instructions on how to install [`pnpm` can be found here](https://pnpm.io/installation). 

This project uses the [Biome Linter and Formatter](https://biomejs.dev/).

## Project Structure

All application code lives in the `/apps` directory. To install dependencies for each application, run `pnpm install` at the root of the project.

### The `/apps` Directory

The `/apps` directory contains the source code for several applications. As it currently stands, the app directory contains the following structure:

- `/apps`
 - `/core`
 - `/cloud`
 - `/server`
 - `/ui`

The `/core` directory contains the business logic. The reasoning behind this is to allow us to move to a different infrastructure, without needing to disentangle the logic from any framework specific code.

Currently, we'll be using a [Fastify server](https://fastify.dev/) to act as our API. Fastify is very similar to Express, but has some meaningful improvements over it. The code for this lives in the `/server` directory.

Initially, we intended using AWS Lambda functions and other AWS resources, but we decided that might be more complex than needed at the moment. The code for that lives in the `/cloud` directory.


## Project Plan
![alt text](images/flow-diagram.png)