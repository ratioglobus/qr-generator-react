import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation/Navigation"
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner"
import { ScanHistory } from "./components/ScanHistory/ScanHistory"
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory"

export const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path="/qr-generator-react/generate" element={<QrCodeGenerator />}/>
                <Route path="/qr-generator-react/scan" element={<QrCodeScanner />}/>
                <Route path="/qr-generator-react/scanHistory" element={<ScanHistory />}/>
                <Route path="/qr-generator-react/generateHistory" element={<GenerateHistory />}/>
            </Routes>
        </div>
    )
}
