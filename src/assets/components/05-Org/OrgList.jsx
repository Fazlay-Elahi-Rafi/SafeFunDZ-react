import React from "react";

export default function OrgList(props) {
  return (
    <>
      <li className="org__li">
        <div className="org__li-img">
          <img className="org__li-img--icon" src={props.icon} alt="icon" />
        </div>
        <div className="">
          <h3 className="org__li-name">{props.name}</h3>
          <p className="org__desc global__desc mt-2 mb-0">{props.desc}</p>
        </div>
      </li>
    </>
  );
}
