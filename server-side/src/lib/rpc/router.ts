import { contract } from './shared/contract';
import { implement } from '@orpc/server'

const os = implement(contract)

export const listPlanet = os.planet.list
    .handler(({ input }) => {
        return [ { id: 123, name: 'Planet X' },  { id: 124, name: 'Planet Y' }]
    })

export const findPlanet = os.planet.find
    .handler(({ input }) => {
        return { id: 123, name: 'Planet X' }
    })

export const createPlanet = os.planet.create
    .handler(({ input }) => {
        return { id: 123, name: 'Planet X' }
    })

export const router = os.router({
    planet: {
        list: listPlanet,
        find: findPlanet,
        create: createPlanet,
    },
})