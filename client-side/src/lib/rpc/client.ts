import type { ContractRouterClient } from '@orpc/contract'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch';
import { contract } from '../../../../server-side/src/lib/rpc/shared/contract.ts';

const link = new RPCLink({
    url: 'http://0.0.0.0:5173/api',
    headers: { Authorization: 'Bearer token' },
})

// Or, create a client using a contract
export const client: ContractRouterClient<typeof contract> = createORPCClient(link)


// async function main() {
//     console.log(await client.planet.find(1))
//     console.log(await client.planet.list({}))
// }
//
// main();
