# ORPC TypeScript Example

## Overview

This project demonstrates a working example of a Remote Procedure Call (RPC) system using the ORPC (Object-oriented RPC) library for TypeScript. The project showcases a client-server architecture with type-safe API contracts, allowing for seamless communication between client and server components.

## What is ORPC?

ORPC (Object-oriented RPC) is a library that enables type-safe remote procedure calls between TypeScript/JavaScript applications. It offers:

- **Type Safety**: Fully typed contracts between client and server
- **Schema Validation**: Built-in validation using Arktype
- **Code Generation**: Automatic client code generation from the server contract
- **Flexibility**: Support for various transport mechanisms

## Project Structure

The project is organized into two main components:

- **server-side**: Contains the API implementation, contract definitions, and type models
- **client-side**: Contains client implementations that consume the server API

### Key Components

- **Contract Definition**: Defines the shape and validation rules for API requests and responses
- **Server Router**: Implements the API endpoints defined in the contract
- **Client Implementation**: Consumes the API using the generated contract

## Planet API Example

This example implements a simple Planet API with the following operations:

- `list`: Retrieve a list of planets
- `find`: Find a planet by ID
- `create`: Create a new planet

## Getting Started

### Prerequisites

- Node.js (20.x or higher)
- pnpm package manager

### Installation

1. Clone the repository
2. Install dependencies: