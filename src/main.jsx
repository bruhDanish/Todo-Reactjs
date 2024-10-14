import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContext from './context/TodoContext.js'


createRoot(document.getElementById('root')).render(
    <App />
  
)
