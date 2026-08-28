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

- Node.js 20.0 or higher
- pnpm package manager

### Installation

Install each package from the repository root:

```sh
pnpm --dir server-side install --frozen-lockfile
pnpm --dir client-side install --frozen-lockfile
```

Start both development services with Docker Compose:

```sh
./make.sh up
```

Or start a package directly:

```sh
pnpm --dir server-side run server-dev
pnpm --dir client-side run web-dev
```

The example API exposes `list`, `find`, and `create` Planet procedures. See [configuration documentation](docs/configuration.md) for the example ports, links, and placeholder authorization header.

## Testing

Run the server tests/typecheck and client lint/build:

```sh
pnpm --dir server-side run verify
pnpm --dir client-side run verify
```

See [testing documentation](docs/testing.md) for the tested scope, measured coverage, and excluded live integrations.

## Licensing

See [licensing documentation](docs/licensing.md) for the repository's current license status.
