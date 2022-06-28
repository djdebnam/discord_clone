import { Link } from "react-router-dom";
import { FaPlus, FaUser, FaHome } from "react-icons/fa";
const SideBar = () => {
  return (
    <div>
      <div id="side-bar">
        <button id="home-button">
          <FaHome id="home-button-icon" />
        </button>
        <div id="button-seperator"></div>
        <button className="server-button">D</button>
        <button className="server-button">M</button>
        <button className="new-server-button">
          <FaPlus />
        </button>
        <div id="user-button-holder-primary"></div>
        <div id="user-button-holder-secondary"></div>
        <Link to="/">
          <button id="user-button">
            <FaUser id="user-button-icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
