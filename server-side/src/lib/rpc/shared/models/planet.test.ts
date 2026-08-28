import assert from 'node:assert/strict'
import test from 'node:test'
import { ArkErrors } from 'arktype'

import { PlanetSchema } from './planet'

test('accepts a planet with the required fields', () => {
    const planet = { id: 3, name: 'Earth' }

    assert.deepEqual(PlanetSchema(planet), planet)
})

test('accepts the optional description', () => {
    const planet = { id: 4, name: 'Mars', description: 'The red planet' }

    assert.deepEqual(PlanetSchema(planet), planet)
})

test('rejects a non-positive planet identifier', () => {
    const result = PlanetSchema({ id: 0, name: 'Invalid' })

    assert.ok(result instanceof ArkErrors)
    assert.match(String(result), /positive/)
})
