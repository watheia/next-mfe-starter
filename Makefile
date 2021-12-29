.PHONY: setup clean test lint build assemble docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)

clean:
	rm -rf yarn.lock dist public node_modules apps/web/public apps/web/.cache

# TODO: detect and replace in bashrc to prevent dupes
setup:
	npm i -g yarn @teambit/bvm
	bvm install
	bit config set analytics_reporting false
	bit init --harmony
	bit import
	bit install
	bit compile
	bit status

	echo 'export PATH=${HOME}/bin:${PATH}' >> ~/.bashrc

assemble:
	nx affected --target assemble

build:
	nx run-many --all --target build --prod --verbose

test:
	nx run-many --all --target test

lint:
	nx run-many --all --target lint --fix

start-web:
	nx serve web --verbose

start-bit:
	bit ui-build
	bit start --dev --log info

docs:
	yarn depcruise --output-type dot --output-to docs/depgraph.dot --prefix "https://github.com/watheia/next-mfe-starter/blob/main"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg

