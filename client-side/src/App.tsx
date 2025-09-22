import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
                {planets.map((v) => {
                    return <>
                        {v.name}
                    </>
                })}
            </p>
        </>
    )
}

export default App
