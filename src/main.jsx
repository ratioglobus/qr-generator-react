import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Layout'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  </BrowserRouter>
)
