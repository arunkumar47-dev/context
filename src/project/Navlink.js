import {NavLink,useNavigate } from "react-router-dom";

const Navlink = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="button">
        <button onClick={() => navigate("/user")}>
          User
          <br />
        </button>
        <button onClick={()=>navigate("/commend")}>
          Commends
          <br />
        </button>
      </div>
    </>
  );
};
export default Navlink;
