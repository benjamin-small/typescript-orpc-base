import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch';
import { ContractRouterClient } from '@orpc/contract'
import contract from "./contract.json";

const link = new RPCLink({
    url: 'http://127.0.0.1:3000',
    headers: { Authorization: 'Bearer token' },
})


const thinClient: ContractRouterClient<typeof contract> = createORPCClient(link)

async function main() {
    const resp = await thinClient.planet.list({});

    console.log(resp);
}

main();