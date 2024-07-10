import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">All</Link>
        <Link to="/?todos=active">Active</Link>
        <Link to="/?todos=completed">Completed</Link>
      </nav>
    </div>
  );
};

export default Navbar;
