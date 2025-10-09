import { Outlet, Link } from "react-router";
import logo from "../../assets/hagere-logo.svg";
import "./navigation.styles.scss";
function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Hagere logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <div>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
