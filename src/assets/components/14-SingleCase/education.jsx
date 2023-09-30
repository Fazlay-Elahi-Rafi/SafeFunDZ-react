import React from "react";

import Form from "./form";
import FormModal from "./FormModal";
import EducationRight from "./EducationRight";
import EducationLeft from "./educationLeft";

export default function Education() {
  return (
    <>
      <div className="education global__py pt-0">
        <div className="container">
          <div className="row">
            <EducationLeft />
            <div className="col-12 col-sm-8 col-lg-4 mt-5 mt-lg-0">
              <EducationRight />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-xl-8">
              <Form />
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered form__dialog">
              <FormModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
