import { createServer } from 'node:http'
import { RPCHandler } from '@orpc/server/node'
import { CORSPlugin } from '@orpc/server/plugins'
import { router } from "../lib/rpc/router"

const handler = new RPCHandler(router, {
    plugins: [new CORSPlugin()],
})

const server = createServer(async (req, res) => {
    const result = await handler.handle(req, res, {
        context: { headers: req.headers }
    })

    console.log(req);
    if (!result.matched) {
        res.statusCode = 404
        res.end('No procedure matched')
    }
})

server.listen(
    3000,
    '0.0.0.0',
    () => console.log('Listening on 0.0.0.0:3000'),
)