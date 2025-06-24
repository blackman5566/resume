import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//main.jsx 的作用是：把你寫的 React 主元件（通常是 <App />）掛載到網頁的 index.html 中的 <div id="root"> 裡面。
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
