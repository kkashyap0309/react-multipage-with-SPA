import { NavLink } from "react-router-dom";
import navigationCSS from "./NavigationMenu.module.css";

function NavigationMenu() {
  return (
    <header className={navigationCSS.header}>
      <nav>
        <ul className={navigationCSS.list}>
          <li>
            <NavLink
              to={""}
              className={({isActive}) => {
                return isActive ? navigationCSS.active : undefined;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"products"}
              className={({isActive}) => {
                return isActive ? navigationCSS.active : undefined;
              }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationMenu;
