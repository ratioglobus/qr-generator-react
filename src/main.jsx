import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Layout } from './Layout'
import { QrCodeGenerator } from "./QrCodeGenerator"
import { QrCodeScanner } from "./QrCodeScanner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
  {
    path: "/generate",
    element: <QrCodeGenerator/>
  },
  {
    path: "/scan",
    element: <QrCodeScanner/>
  },
]);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
)
