import React from "react";

const SingleFormItem = ({
  parentClass,
  childClass,
  grandChildClass,
  collapse,
  text,
  collapseExample,
  name,
  inputName,
  inputType,
  inputId,
  style,
}) => {
  return (
    <>
      <li className={parentClass}>
        <div
          data-bs-toggle={collapse}
          data-bs-target={collapseExample}
          aria-controls={collapseExample}
        >
          <label className="form__ul-label form__ul-label--pointer">
            <span className={childClass}>
              {name}
              <input type={inputType} name={inputName} id={inputId} />
              <span
                className={`form__ul-label--checkmark ${grandChildClass}`}
                style={style}
              ></span>
              {text}
            </span>
          </label>
        </div>
      </li>
    </>
  );
};

const FormInput = ({
  parentClass,
  img,
  star,
  name,
  inputType,
  inputId,
  placeholder,
}) => {
  return (
    <>
      <label className={parentClass}>
        {name}
        <span className="text-danger ps-1">{star}</span>
        <span className="ps-2">
          <img src={img} alt="image" />
        </span>
      </label>
      <input
        className="form-control form__input"
        id={inputId}
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
};
const FormSingleInput = ({ parentClass, inputType, placeholder }) => {
  return (
    <>
      <input
        className={parentClass}
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
};

export { SingleFormItem, FormInput, FormSingleInput };
