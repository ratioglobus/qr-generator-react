import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './style/qrCodeGenerator.css'

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
        <div>
            {result !== '' && (
                <QRCodeSVG value={value}/>
            )}

            <input type="text" value={value} onChange={onChangeHendler} className="inputQR"/>
            <button type='button' onClick={onClickHendler}>
                Сгенерировать QR
            </button>
        </div>
    );
};
