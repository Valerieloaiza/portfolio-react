export const Navbar = ({ Children, styleNav, styleIU }) => {
    return (
      <nav className={styleNav}>
        <ul className={styleIU}></ul>
        {Children}
      </nav>
    );
  };