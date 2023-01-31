import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/Stuff">Stuff</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
