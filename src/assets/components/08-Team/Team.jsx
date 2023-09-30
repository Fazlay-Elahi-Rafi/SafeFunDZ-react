import React from "react";

import { TeamMembers } from "../../data/indexData";

import SectionHead from "../Global/SectionHead";
import SingelMember from "./SingelMember";

export default function Team({ parentClass }) {
  return (
    <>
      <div className={`team ${parentClass}`}>
        <div className="container p-sm-0">
          <SectionHead text="our team" desc="Our Expert Volunteer" />

          <div className="team__grid">
            {TeamMembers.length > 0
              ? TeamMembers.splice(0, 4).map((member, index) => (
                  <SingelMember key={index} {...member} />
                ))
              : window.location.reload()}
          </div>
        </div>
      </div>
    </>
  );
}
