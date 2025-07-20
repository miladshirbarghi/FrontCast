import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'react-bootstrap'
import CartProvider from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider dir="rtl">
        <App />
      </ThemeProvider>
    </CartProvider>
  </StrictMode>
)
