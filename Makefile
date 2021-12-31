.PHONY: setup clean test lint build assemble docs

SHELL := /usr/bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)

# recursivly remove node_modules
nuke-it-from-orbit:
	bash -c scripts/clean.sh

# TODO: detect and replace in bashrc to prevent dupes
setup:
	npm install --global @teambit/bvm
	bvm install latest
	bit config set analytics_reporting false
	bit init --harmony

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
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg

