import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './shared/router/router'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
