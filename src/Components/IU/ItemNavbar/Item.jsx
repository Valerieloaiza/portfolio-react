import { NavLink } from "react-router-dom";

export const ItemNavbar = ({ url = "#", content = "Vacio", styles }) => (
  <li className={styles}>
    <NavLink
      className="text-black px-4 border border-pink-300 rounded-lg"
      to={url}
    >
      {content}
    </NavLink>
  </li>
);