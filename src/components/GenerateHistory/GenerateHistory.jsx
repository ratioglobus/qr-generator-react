import { GENERATE_DATA } from '../../constants'
import { QRCodeSVG } from 'qrcode.react';
import s from './GenerateHistory.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className={s.container}>
            <h2 className={s.title}>История генераций</h2>
            <div className={s.list}>
                {data.map((text, index) => (
                    <div key={index} className={s.card}>
                        <p className={s.text}>{text}</p>
                        <QRCodeSVG value={text} size={100} />
                    </div>
                ))}
            </div>
        </div>
    )
}
