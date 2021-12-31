#!/usr/bin/env bash

for f in $(find . -name 'node_modules' -or -name 'dist' -or -name '.cache'); do echo $f && rm -rf $f; done
rm -rf yarn.lock dist public node_modules tmp
docker system prune -a