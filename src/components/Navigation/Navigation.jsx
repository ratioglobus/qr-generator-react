import { Link } from "react-router-dom";
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.container}>
            <nav className={s.nav}>
                <Link className={s.a} to="/generate">Сгенерировать QR код</Link>
                <Link className={s.a} to="/scan">Сканировать QR код</Link>
                <Link className={s.a} to="/scanHistory">История сканирования</Link>
                <Link className={s.a} to="/generateHistory">История генераций</Link>
            </nav>
        </div>
    )
}