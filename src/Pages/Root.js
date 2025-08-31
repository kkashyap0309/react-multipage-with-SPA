import { Outlet } from "react-router-dom";
import NavigationMenu from "../Components/NavigationMenu";
import rootCss from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <NavigationMenu />
      <main className={rootCss.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
