import { Link } from "react-router-dom";
import "./navbar.scss";
import Uploadbtn from "../UploadButton";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="header">
        <Link className="link" to={"/"}>
          Task Manager
        </Link>
      </h1>
      <div>
        <ul className="navmenu">
          <li className="upload">
            <Uploadbtn />
          </li>
          <li className="navitms">
            <Link className="link" to={"down"}>
              Bulk Download
            </Link>
          </li>
          <li className="navitms">
            <Link className="link" to={"create"}>
              Create
            </Link>
          </li>
          <li className="navitms">
            <Link className="link" to={"tasks"}>
              View All
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
