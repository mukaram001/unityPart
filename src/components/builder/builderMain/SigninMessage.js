import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

const SigninMessage = () => {
  return (
    <div>
      <div className="pt-5 text-center">
        <div className="d-flex align-items-center justify-content-center" style={{ height: "60vh" }}>
          <p className="text-white">
            You need to{" "}
            <span>
              <Link to="/connect" className="textStylish">
                <strong>Sign in</strong>
              </Link>
            </span>{" "}
            to access this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninMessage;
