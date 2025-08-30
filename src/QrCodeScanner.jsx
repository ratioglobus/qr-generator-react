import { useState } from 'react';
import { Scanner } from "@yudiel/react-qr-scanner"
import s from './qrCodeScanner.module.css'

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHendler = (result) => {
        setScanned(result[0].rawValue);
    }

    return (
        <div className={s.container}>
           
            <Scanner 
                allowMultiple 
                onScan={scanHendler} 
                components={{audio: false}}
                styles={{container: { width: 350 }}}
            />

             <p className={s.result}>{scanned}</p>
        </div>
    )
}