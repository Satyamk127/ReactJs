import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex  gap-2 p-8 sm: flex-col sm:items-center sm:gap-8 sm:py-4 ...">
        <img class="mx-auto block h-24 rounded-t-4xl sm:mx-0 sm:shrink-0" src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 p-1 rounded-lg text-purple-600 bo hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>


    </>
  )
}

export default App
