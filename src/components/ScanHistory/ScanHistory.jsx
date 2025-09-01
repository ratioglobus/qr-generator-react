import { SCAN_DATA } from '../../constants'
import { QRCodeSVG } from 'qrcode.react';
import s from './ScanHistory.module.css';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    const isLink = (text) => /^https?:\/\//i.test(text);

    return (
        <div className={s.container}>
            <h2 className={s.title}>История сканирования</h2>
            <div className={s.list}>
                {data.map((text, index) => (
                    <div key={index} className={s.card}>
                        {isLink(text) ? (
                            <a
                                href={text}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.link}
                            >
                                {text}
                            </a>
                        ) : (
                            <p className={s.text}>{text}</p>
                        )}
                        <QRCodeSVG value={text} size={100} />
                    </div>
                ))}
            </div>
        </div>
    )
}
