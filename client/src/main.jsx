import React from 'react'
import { createRoot } from 'react-dom/client'
import './variables.css'
import './home-page/style.css'
import EcoCapibaDashboard from './home-page/index.jsx'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <EcoCapibaDashboard />
  </React.StrictMode>
)
