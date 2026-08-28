import fs from 'node:fs'
import { minifyContractRouter } from '@orpc/contract'

import { router } from '../lib/rpc/router'

const minifiedRouter = minifyContractRouter(router)

fs.writeFileSync('./contract.json', JSON.stringify(minifiedRouter))
