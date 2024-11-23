import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Background from './Background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.innerWidth > 1000 && <Background />}
    <App />
  </StrictMode>,
)
