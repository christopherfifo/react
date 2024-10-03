import { useState } from 'react'
//! importação das pages
import './App.css'
import Teste from './components/teste.jsx'
//& importação de icones
import {FaHeart} from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR <FaHeart/>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Teste/>
    </>
  )
}

export default App
