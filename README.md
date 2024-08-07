This project uses a Makefile to simplify common tasks. Here are the available commands:

## `make install`
Installs project dependencies using `npm ci`. This ensures a clean and consistent installation of node modules.

## `make start`
Starts the development server with `npm start`. This command runs the application in development mode.

## `make build`
Builds the project for production using `npm run build`. It creates a minified and optimized version of your application.

## `make clean`
Removes the `build` directory with `rm -rf build`. This command cleans up old build files.

## `make test`
Runs tests with `npx jest`. This command executes your test suite to ensure your code is working correctly.

## `make test-watch`
Runs tests in watch mode with `npx jest --watch`. It automatically re-runs tests when files change, useful for development.

## `make coverage`
Checks test coverage with `npx jest --coverage`. This command generates a report showing which parts of your code are covered by tests.

## `make lint`
Lints your source code with `npx eslint ./src`. This command checks your code for style and potential errors.

## `make lint-fix`
Fixes linting issues with `npx eslint ./src --fix`. This command automatically corrects style issues in your code.

## Default Goal
The default goal is set to `install`. This means if you run `make` without any arguments, it will execute the `install` command by default.
