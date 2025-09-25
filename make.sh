#!/bin/bash

 # Exit immediately if a command exits with a non-zero status
 set -e

 # Function to display usage
 usage() {
   echo "Usage: $0 {build|install|up|down}"
   echo "Commands:"
   echo "  build    Build the Docker containers"
   echo "  install  Install dependencies using pnpm inside the container"
   echo "  up       Start the Docker containers"
   echo "  down     Stop the Docker containers"
   exit 1
 }

 # Ensure a command is passed
 if [ $# -lt 1 ]; then
   usage
 fi

 # Choose the action based on the first argument
 case "$1" in
   build)
     echo "Building the Docker containers..."
     docker-compose build
     ;;
   clean)
     echo "Cleaning install"
     rm -rf ./server-side/node_modules ./server-side/.pnpm-store ./client-side/node_modules ./client-side/.pnpm-store
     ;;
   install)
     echo "Installing dependencies..."
     docker-compose run --rm server pnpm install
     docker-compose run --rm client pnpm install
     ;;
   up)
     echo "Starting the Docker containers..."
     docker-compose up
     ;;
   down)
     echo "Stopping the Docker containers..."
     docker-compose down
     ;;
   *)
     usage
     ;;
 esac