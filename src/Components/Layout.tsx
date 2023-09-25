import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
