import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray90026: "border border-gray_900_26 border-solid",
  FillLightblueA700: "bg-light_blue_A700",
  FillLightblueA700_1: "bg-light_blue_A700",
  FillLightblueA700_2: "bg-light_blue_A700",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = { sm: "px-[2px] py-[3px]", md: "pt-[4px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "OutlineGray90026",
    "FillLightblueA700",
    "FillLightblueA700_1",
    "FillLightblueA700_2",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "RoundedBorder4",
  variant: "OutlineGray90026",
  size: "md",
};

export { CheckBox };
