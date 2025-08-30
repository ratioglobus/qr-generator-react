import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <Link to="/generate">Сгенерировать QR код</Link>
            <Link to="/scan">Сканировать QR код</Link>
            <Link to="/">История сканировния</Link>
            <Link to="/">История генераций</Link>
        </nav>
    )
}