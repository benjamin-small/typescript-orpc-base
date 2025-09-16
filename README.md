# ORPC TypeScript Base Example

This repository provides a minimal, ready-to-use example of an ORPC (Object Remote Procedure Call) implementation in TypeScript. It demonstrates how to create a client-server architecture where the contract between them is clearly defined using ORPC.

## What is ORPC?

ORPC (Object Remote Procedure Call) is a communication pattern that allows your client application to call server methods as if they were local. It provides a clean, type-safe bridge between client and server components without requiring shared node modules or dependencies.

## Project Structure

```
working-orpc-example/
├── src/
│   ├── both-sides/         # Shared contract definitions
│   │   ├── models/         # Data models used in both client and server
│   │   ├── contract.ts     # API contract definition
│   │   └── export_contract.ts # Script to export contract to JSON
│   ├── client-side/        # Client implementation
│   │   ├── client.ts       # Client with direct contract import
│   │   ├── contract.json   # Exported contract for thin client
│   │   └── thin-client.ts  # Client using exported JSON contract
│   ├── server-side/        # Server implementation
│   │   ├── router.ts       # API router implementation
│   │   └── server.ts       # HTTP server setup
│   └── index.ts            # Entry point
├── package.json
├── tsconfig.json
└── README.md
```


## Key Features

- **Type Safety**: Full TypeScript support with runtime validation using Arktype.
- **Contract-First Design**: Clear API contract definition that can be shared between client and server.
- **Separation of Concerns**: Distinct client and server implementations with a common contract.
- **"Thin Client" Support**: Ability to use the API without sharing node modules between client and server.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager

### Installation

```shell script
# Clone the repository
git clone https://github.com/yourusername/working-orpc-example.git
cd working-orpc-example

# Install dependencies
pnpm install
```


### Running the Example

1. Start the server:
```shell script
pnpm tsx src/server-side/server.ts
```


2. In a separate terminal, run the client:
```shell script
pnpm tsx src/client-side/client.ts
```


3. Or run the thin client (using exported contract):
```shell script
# First, export the contract
   pnpm tsx src/both-sides/export_contract.ts
   # Then run the thin client
   pnpm tsx src/client-side/thin-client.ts
```


## Using This as a Base

This project is designed to be used as a starting point for your own ORPC implementations. Here's how to use it:

1. **Copy the Structure**: Clone or copy this repository into your own project.

2. **Define Your Contracts**: Modify the contract definitions in `src/both-sides/contract.ts` and create your own models in `src/both-sides/models/`.

3. **Implement Server Logic**: Update the router implementation in `src/server-side/router.ts` with your business logic.

4. **Create Client Applications**: Use either approach:
    - Direct import of the contract (when sharing the codebase)
    - Exported JSON contract (for separate client applications)

## Key Components Explained

### Contract Definition

The contract defines the API interface using ORPC's type-safe approach:

```typescript
// src/both-sides/contract.ts
export const contract = {
  planet: {
    list: listPlanetContract,
    find: findPlanetContract,
    create: createPlanetContract,
  },
}
```


### Server Implementation

The server implements the contract using ORPC's `implement` function:

```typescript
// src/server-side/router.ts
export const router = os.router({
  planet: {
    list: listPlanet,
    find: findPlanet,
    create: createPlanet,
  },
})
```


### Client Usage

Clients can consume the API in two ways:

1. **Direct Contract Import**:
```typescript
// src/client-side/client.ts
   const client: ContractRouterClient<typeof contract> = createORPCClient(link)
```


2. **Thin Client (Using Exported Contract)**:
```typescript
// src/client-side/thin-client.ts
   const thinClient: ContractRouterClient<typeof contract> = createORPCClient(link)
```


## License

[Add your license information here]

## Contributing

[Add contribution guidelines if applicable]