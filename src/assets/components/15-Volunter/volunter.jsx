import React from "react";
import SectionHead from "../Global/SectionHead";

import Requirement from "./requirement";
import VolunterForm from "./VolunterForm";

export default function Volunter() {
  return (
    <>
      <div className="volunteer global__py pt-0">
        <div className="container p-sm-0">
          <SectionHead
            text="Register yourself with us"
            desc="Let's join our community to become a volunteer"
          />
          <div className="row">
            <VolunterForm />
            <Requirement />
          </div>
        </div>
      </div>
    </>
  );
}
