import logo from "../../img/logo-swipoo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="navigator">
      <h1 className="heading">
        <img
          className="heading__image"
          src={logo}
          alt="Logo of Swipoo"
          width="100"
        />
      </h1>
      <div className="menu">
        <div className="menu__element"></div>
        <div className="menu__element"></div>
        <div className="menu__element"></div>
      </div>
    </header>
  );
}

export default Header;
