#!/bin/sh
cd $(dirname $0)
cd ..
DOCKER_BUILDKIT=1 docker build -f builds/Dockerfile -t serv/server .
cd ..
