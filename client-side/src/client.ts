import type { ContractRouterClient } from '@orpc/contract'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch';
import { contract } from './lib/rpc/shared/contract';

const link = new RPCLink({
    url: 'http://127.0.0.1:3000',
    headers: { Authorization: 'Bearer token' },
})

// Or, create a client using a contract
const client: ContractRouterClient<typeof contract> = createORPCClient(link)


async function main() {
    console.log(await client.planet.find(1))
    console.log(await client.planet.list({}))
}

main();
