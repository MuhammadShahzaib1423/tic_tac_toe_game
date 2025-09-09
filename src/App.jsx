import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './Components/TicTacToe/TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App bg-[#0f1B21] min-h-screen flex flex-col items-center ">
        <TicTacToe />
      </div>
    </>
  )
}

export default App 
