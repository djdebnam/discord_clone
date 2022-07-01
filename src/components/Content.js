import { Outlet } from "react-router-dom";
const Content = () => {
  return (
    <div id="container">
      {/* <h1>Content</h1> */}
      <Outlet />
    </div>
  );
};

export default Content;
