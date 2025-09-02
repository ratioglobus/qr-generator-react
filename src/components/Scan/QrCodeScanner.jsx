import { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import s from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const [warning, setWarning] = useState("");
  const lastScanTimeRef = useRef(0); // для блокировки быстрых повторных сканов

  const scanHandler = (result, error) => {
    if (!!error) {
      console.info(error);
      return;
    }

    if (!!result) {
      const newScan = result.text.trim();
      const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

      // Блокировка повторного сканирования в течение 5 секунд
      const now = Date.now();
      if (now - lastScanTimeRef.current < 5000) return;

      lastScanTimeRef.current = now;

      if (prevData.includes(newScan)) {
        setWarning("Этот QR уже был отсканирован. Посмотрите историю сканирования.");
        setScanned(null);
        return;
      }

      setScanned(newScan);
      setWarning("");

      localStorage.setItem(
        SCAN_DATA,
        JSON.stringify([...prevData, newScan])
      );
    }
  };

  const isLink = scanned && /^https?:\/\//i.test(scanned);

  return (
    <div className={s.container}>
      <div className={s.scanner}>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={scanHandler}
          scanDelay={500} // небольшой интервал между кадрами
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {warning && <p className={s.warning}>{warning}</p>}

      {scanned && (
        <div className={s.resultBox}>
          <p className={s.label}>Результат сканирования:</p>
          {isLink ? (
            <a href={scanned} target="_blank" rel="noopener noreferrer" className={s.link}>
              {scanned}
            </a>
          ) : (
            <p className={s.text}>{scanned}</p>
          )}
        </div>
      )}
    </div>
  );
};
