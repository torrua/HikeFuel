install:
	npm ci

start:
	npm start

build:
	npm run build

clean:
	rm -rf build

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-watch:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch

coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

lint:
	npx eslint ./src

lint-fix:
	npx eslint ./src --fix

.DEFAULT_GOAL := install
