import { FaPlus,FaUser,FaHome } from "react-icons/fa";
const SideBar = () => {
  return (
    <div>
        <div id="side-bar">
            <button id="home-button"><FaHome id="home-button-icon"/></button>
            <p id="button-seperator"></p>
            <button class="new-server-button"><FaPlus/></button>
            <div id="user-button-holder-primary"></div>
            <div id="user-button-holder-secondary"></div>
            <button id="user-button"><FaUser id="user-button-icon"/></button>
        </div>
    </div>
    
  )
}
export default SideBar