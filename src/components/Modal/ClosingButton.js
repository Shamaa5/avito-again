import React from "react";
import { Link } from "react-router-dom";

function ClosingButton() {
  return (
    <Link to="/">
         <div className="bntClose">
             X
         </div>
    </Link>
  );
}

export default ClosingButton;
