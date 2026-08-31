import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*
import App from './App.jsx' -> default
import {App, App2} from './App.jsx' -> export sem default
*/
import { GlobalStyles } from './styles/GLobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
