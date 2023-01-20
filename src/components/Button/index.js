import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  CustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0]",
  CustomBorderLR8:
    "rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px]",
  icbRoundedBorder8: "rounded-radius8",
  icbCustomBorderLR8:
    "rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px]",
  icbCircleBorder15: "rounded-radius15",
  icbCustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0]",
  icbRoundedBorder4: "rounded-radius4",
};
const variants = {
  OutlineGray90019: "bg-white_A700 border border-gray_900_19 border-solid",
  FillYellow800: "bg-yellow_800 text-white_A700",
  FillDeeppurple200: "bg-deep_purple_200 text-white_A700",
  FillLightblueA700: "bg-light_blue_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_900_87",
  OutlineGray9000c:
    "bg-light_blue_A700 border border-gray_900_0c border-solid text-white_A700",
  OutlineGray90019_1:
    "border border-gray_900_19 border-solid text-deep_purple_A201",
  FillGray9000a: "bg-gray_900_0a text-gray_900_a2",
  FillDeeporange700: "bg-deep_orange_700 text-white_A700",
  FillDeeppurpleA201: "bg-deep_purple_A201 text-white_A700",
  FillGray202: "bg-gray_202",
  icbOutlineGray90019_1: "border border-gray_900_19 border-solid",
  icbOutlineGray90019: "bg-white_A700 border border-gray_900_19 border-solid",
  icbFillLightblueA700: "bg-light_blue_A700",
  icbFillGray90063: "bg-gray_900_63",
  icbFillGray900: "bg-gray_900",
  icbFillDeeppurpleA201: "bg-deep_purple_A201",
  icbFillGray90019: "bg-gray_900_19",
  icbFillPurpleA200: "bg-purple_A200",
};
const sizes = {
  sm: "p-[4px]",
  md: "pr-[8px] py-[8px]",
  lg: "p-[10px]",
  xl: "pr-[9px] py-[11px]",
  "2xl": "p-[15px]",
  smIcn: "",
  mdIcn: "p-[5px]",
  lgIcn: "p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder4",
    "CustomBorderTL8",
    "CustomBorderLR8",
    "icbRoundedBorder8",
    "icbCustomBorderLR8",
    "icbCircleBorder15",
    "icbCustomBorderTL8",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray90019",
    "FillYellow800",
    "FillDeeppurple200",
    "FillLightblueA700",
    "FillWhiteA700",
    "OutlineGray9000c",
    "OutlineGray90019_1",
    "FillGray9000a",
    "FillDeeporange700",
    "FillDeeppurpleA201",
    "FillGray202",
    "icbOutlineGray90019_1",
    "icbOutlineGray90019",
    "icbFillLightblueA700",
    "icbFillGray90063",
    "icbFillGray900",
    "icbFillDeeppurpleA201",
    "icbFillGray90019",
    "icbFillPurpleA200",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbOutlineGray90019_1",
  size: "lgIcn",
};

export { Button };
