import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHendler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHendler = (event) => {
       setValue(event.target.value);
       setResult('');
    };

    return (
        <div className={s.container}>
            <input 
                type="text" 
                value={value} 
                onChange={onChangeHendler} 
                placeholder='Введите текст...'
                className={s.input}
            />

            <button type='button' className={s.button} onClick={onClickHendler}>
                Сгенерировать QR
            </button>

            {result !== '' && (
                <div className={s.wrapper}>
                    <QRCodeSVG value={value} size={200}/>
                </div>
            )}
        </div>
    );
};
