import { Link } from "react-router-dom";
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.container}>
            <nav className={s.nav}>
                <Link className={s.a} to="/qr-generator-react/generate">Сгенерировать QR код</Link>
                <Link className={s.a} to="/qr-generator-react/scan">Сканировать QR код</Link>
                <Link className={s.a} to="/qr-generator-react/scanHistory">История сканирования</Link>
                <Link className={s.a} to="/qr-generator-react/generateHistory">История генераций</Link>
            </nav>
        </div>
    )
}