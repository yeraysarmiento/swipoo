import logo from "../../img/logo-swipoo.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="heading">
        <img
          className="heading__image"
          src={logo}
          alt="Logo of Swipoo"
          width="100"
        />
      </h1>
      <ul className="menu">
        <li className="menu__element"></li>
        <li className="menu__element"></li>
        <li className="menu__element"></li>
      </ul>
    </header>
  );
}

export default Header;
