import React from "react";
import "./Inputoption.css";

function Inputoption({Icon, title, Color}) {
  return (
    <div className="inputoption">

{Icon ? <Icon style={{color : Color}}  className='inputoption__icon'/> : null}

      <h4> {title}</h4>
    </div>
  );
}

export default Inputoption;
