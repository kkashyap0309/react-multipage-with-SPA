import { Link } from "react-router-dom";
import navigationCSS from  "./NavigationMenu.module.css";

function NavigationMenu() {
    return <header className={navigationCSS.header}>
        <nav>
            <ul className={navigationCSS.list}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavigationMenu;