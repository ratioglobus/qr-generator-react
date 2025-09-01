import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result, error) => {
    if (!!result) {
      const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
      if (prevData.includes(result.text)) return;

      setScanned(result.text);

      localStorage.setItem(
        SCAN_DATA,
        JSON.stringify([...prevData, result.text])
      );
    }

    if (!!error) {
      console.info(error);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.scanner}>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={scanHandler}
          scanDelay={500}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {scanned && <p className={s.result}>Результат: {scanned}</p>}
    </div>
  );
};
