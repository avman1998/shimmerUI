import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex gap-2 p-2 bg-blue-300">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Header;
