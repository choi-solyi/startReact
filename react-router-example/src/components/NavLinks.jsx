import { NavLink } from "react-router-dom";
const activeStyle = { color: "green" };
export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log("NavLinks_match: ", match);
            console.log("NavLinks_location: ", location);
            return match !== null && location.search === "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=solyi"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            return location.search === "?name=solyi";
          }}
        >
          about?name=solyi
        </NavLink>
      </li>
    </ul>
  );
}
