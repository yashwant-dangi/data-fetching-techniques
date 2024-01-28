import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SWR from './swr/swr'

function App() {
  const [count, setCount] = useState(0);
  const [lib, setLib] = useState('');
  const libs = ['swr', 'react-query', 'redux-toolkit']

  return (
    <>
      {libs.map((item) => {
        return <button style={{ marginLeft: 10 }} onClick={() => {
          setLib(item)
        }}>{item}</button>
      })}
      {lib === libs[0] ?
        <div>
          <ul style={{ textAlign: "left" }}>
            <li>Data, error and loading states</li>
            <li>Global Configuration</li>
            <li>Auto Revalidate on tab focus</li>
            <li>Build in Error Retry and error reporting (can be used to toast and notification and send logs to logging service)</li>
            <li>Conditional and Dependent Data Fetching</li>
            <li>Build in hooks for pagination and infinite fetching (useSWRInfinite)</li>
            <li>Subsrciption support for websockets</li>
            <li>Prefetching and prefill data support</li>
            <li>Support server side rendering</li>
            <li>Typescript Ready</li>
            <li>Middleware support (like axios intercepter)</li>
          </ul>
        </div> : null}
      {/* <SWR /> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
