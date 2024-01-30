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
          <h2>Features</h2>
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
          <h2>References</h2>
          <ul style={{ textAlign: "left" }}>
            <li><a href="https://swr.vercel.app/docs/getting-started">https://swr.vercel.app/docs/getting-started</a></li>
          </ul>

        </div> : null}

      {lib === libs[1] ?
        <div>
          <h2>Features</h2>
          <ul style={{ textAlign: "left" }}>
            <li>data,
              dataUpdatedAt,
              error,
              errorUpdatedAt,
              failureCount,
              failureReason,
              fetchStatus,
              isError,
              isFetched,
              isFetchedAfterMount,
              isFetching,
              isInitialLoading,
              isLoading,
              isLoadingError,
              isPaused,
              isPending,
              isPlaceholderData,
              isRefetchError,
              isRefetching,
              isStale,
              isSuccess,
              refetch,
              status - states</li>
            <li>Global Configuration via QueryClientProvider</li>
            <li>useInfiniteQuery for Infinite Scroll</li>
            <li>Background Fetching Indicators</li>
            <li>Window focus refetching</li>
            <li>Query Retries on failure</li>
            <li>Initial query data via preFetchQuery and setQueryData</li>
            <li>Query Cancellation</li>
          </ul>
          <h2>References</h2>
          <ul style={{ textAlign: "left" }}>
            <li><a href="https://tanstack.com/query/latest/docs/framework/react/overview">https://tanstack.com/query/latest/docs/framework/react/overview</a></li>
            <li><a href="https://tkdodo.eu/blog/why-you-want-react-query">https://tkdodo.eu/blog/why-you-want-react-query</a></li>
          </ul>
        </div> : null}

      {lib === libs[2] ?
        <div>
          <h2>Features</h2>
          <ul style={{ textAlign: "left" }}>
            <li>Tightly couples with Redux Ecosystem</li>
          </ul>
          <h2>References</h2>
          <ul style={{ textAlign: "left" }}>
            <li><a href="https://redux-toolkit.js.org/rtk-query/comparison#unique-capabilities"></a></li>
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
