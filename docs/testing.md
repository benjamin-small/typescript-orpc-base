# Testing

Install and validate both packages:

```sh
pnpm --dir server-side install --frozen-lockfile
pnpm --dir client-side install --frozen-lockfile
pnpm --dir server-side run verify
pnpm --dir client-side run verify
```

The tests cover valid required Planet fields, the optional description, and rejection of non-positive identifiers by the shared ArkType schema. Server verification also typechecks the ORPC contract/router; client verification lints and builds the React/Vite application. It does not start containers, bind ports, or make RPC/network requests.

The current measured schema coverage is **100% statements, 71.42% branches, 100% functions, and 100% lines**. It was measured with c8 12.0.0 using `pnpm --dir server-side run coverage`.
