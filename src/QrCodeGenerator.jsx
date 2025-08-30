import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('hello');
    const [result, setResult] = useState('');

    const onClickHendler = (event) => {
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
