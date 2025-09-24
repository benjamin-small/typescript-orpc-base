import {useEffect, useState} from 'react'
import './App.css'
import {client} from './lib/rpc/client';
import {PlanetSchema} from "./lib/rpc/shared/models/planet"
import {ArkErrors} from "arktype";

function App() {

    const [count, setCount] = useState(0)
    const [planets, setPlanets] = useState<Array<typeof PlanetSchema.infer>>([])
    const [error, setError] = useState<string | null>(null);

    // const results = await client.planet.list({});
    useEffect(() => {
        const effect = async () => {
            const p = await client.planet.list({})
            if(p instanceof ArkErrors) {
                setError(String(p))
            } else {
                setPlanets(p)
            }
        }

        effect();
    }, [])

    return (
        <>
            <h1>Planets in the Dataset</h1>
            {planets.map((v) => {
                return <div>
                    {v.name}({v.id}) - {v.description}
                </div>
            })}
        </>
    )
}

export default App
