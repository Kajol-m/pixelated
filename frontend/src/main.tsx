import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <button className="bg-blue-500 text-white p-2 rounded">
      Click Me
    </button>
  </StrictMode>,
)
