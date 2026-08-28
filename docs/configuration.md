# Configuration

The Docker Compose stack exposes:

- the ORPC server on host port `3000`;
- the Vite client on host port `5173`.

The browser client currently sends requests to `/api` at `http://0.0.0.0:5173`, while `thin-client.ts` demonstrates a direct `http://127.0.0.1:3000` link. Both examples contain a placeholder `Authorization: Bearer token` header; it is example data, not a credential or authentication implementation.

There are no environment variables or committed secrets. Change ports, origins, or headers in `docker-compose.yaml` and the client link modules, and update tests/documentation when turning the example into an application.
