import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray90019: "border border-gray_900_19 border-solid",
  srcOutlineGray90014: "bg-white_A700 border border-gray_900_14 border-solid",
  OutlineGray90019: "border border-gray_900_19 border-solid",
  OutlineGray90019_1: "bg-white_A700 border border-gray_900_19 border-solid",
  FillGray9000a: "bg-gray_900_0a",
  OutlineLightblueA700:
    "bg-white_A700 border border-light_blue_A700 border-solid",
};
const shapes = {
  srcRoundedBorder8: "rounded-radius8",
  RoundedBorder6: "rounded-radius6",
  CustomBorderTL7:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px]",
};
const sizes = {
  smSrc: "pr-[10px] py-[11px]",
  sm: "pr-[7px] py-[7px]",
  md: "pb-[32px] pt-[8px] px-[8px]",
  lg: "pr-[10px] py-[10px]",
  xl: "p-[11px]",
  "2xl": "py-[15px]",
  "3xl": "pl-[15px] py-[15px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder8",
    "RoundedBorder6",
    "CustomBorderTL7",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray90019",
    "srcOutlineGray90014",
    "OutlineGray90019",
    "OutlineGray90019_1",
    "FillGray9000a",
    "OutlineLightblueA700",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md", "lg", "xl", "2xl", "3xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineGray90019",
  size: "lg",
};

export { Input };
