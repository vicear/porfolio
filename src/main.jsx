import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasicCV from './components/BasicCV.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicCV />
  </StrictMode>,
)
