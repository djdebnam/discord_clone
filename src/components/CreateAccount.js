import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
const CreateAccount = () => {
  return (
    <div>
      <TitleBar />
      <div className="accent-primary"></div>
      <div className="accent-secondary"></div>
      <div className="overlay"></div>

      <div id="create-container">
        <h2 id="create-header">Create an Account</h2>
        {/* <h4 id="create-subheader">Let's get started!</h4> */}
        <div id="create-email-title">Email</div>
        <input id="create-email" type="text"></input>
        <div id="create-password-title">Password</div>
        <input id="create-password" type="password"></input>
        <div id="create-password-title2">Re-type Password</div>
        <input id="create-password2" type="password"></input>
        <Link to="/dashboard/home">
          <button id="create-button" className="secondary-color-button">
            Continue
          </button>
        </Link>
      </div>
      <div id="create-container-background-primary"></div>
    </div>
  );
};

export default CreateAccount;