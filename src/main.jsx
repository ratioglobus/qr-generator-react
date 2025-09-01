import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Layout'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  </HashRouter>
)
