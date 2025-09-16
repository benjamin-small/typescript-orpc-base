import fs from 'node:fs'
import { minifyContractRouter } from '@orpc/contract';
import { router } from "../server-side/src/lib/router"

const minifiedRouter = minifyContractRouter(router)

fs.writeFileSync('./contract.json', JSON.stringify(minifiedRouter))