import React from "react";

import SectionHead from "../Global/SectionHead";
import SingelMember from "./SingelMember";
import { TeamMembers } from "../../data/indexData";

export default function Members({ parentClass }) {
  return (
    <>
      {TeamMembers.length >= 12 ? (
        <div className={`team ${parentClass}`}>
          <div className="container p-sm-0">
            <SectionHead desc="Our Expert Volunteer" />

            <div className="team__grid">
              {TeamMembers.length > 0
                ? TeamMembers.map((member, index) => (
                    <SingelMember key={index} {...member} />
                  ))
                : window.location.reload()}
            </div>
          </div>
        </div>
      ) : (
        window.location.reload()
      )}
    </>
  );
}
