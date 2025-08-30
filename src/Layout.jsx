import { Navigation } from "./Navigation"
import { QrCodeGenerator } from "./QrCodeGenerator"
import { QrCodeScanner } from "./QrCodeScanner"

export const Layout = () => {
    return (
        <div>
            <Navigation/>
            {/* <QrCodeGenerator/> */}
            <QrCodeScanner/>
        </div>
    )
}
