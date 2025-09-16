import { oc } from '@orpc/contract'
import { type } from "arktype";
import { PlanetSchema } from "./models/planet";


type Planet = typeof PlanetSchema.infer;

export const listPlanetContract = oc
    .input(type({
        limit: type("0 < number.integer <= 100").optional(),
        cursor: type("number.integer > 0").default(1)
    }))
    .output(PlanetSchema.array())

export const findPlanetContract = oc
    .input(PlanetSchema.get("id"))
    .output(PlanetSchema)

export const createPlanetContract = oc
    .input(PlanetSchema.get("id"))
    .output(PlanetSchema)

export const contract = {
    planet: {
        list: listPlanetContract,
        find: findPlanetContract,
        create: createPlanetContract,
    },
}