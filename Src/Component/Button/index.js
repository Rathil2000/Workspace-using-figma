import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder11: "rounded-radius11",
  CustomBorderTL11:
    "rounded-bl-[11px] rounded-br-[0] rounded-tl-[11px] rounded-tr-[0]",
  CustomBorderLR11:
    "rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px]",
  RoundedBorder6: "rounded-radius6",
  icbCircleBorder18: "rounded-radius18",
};
const variants = {
  OutlineGray301:
    "bg-white_A700 border border-gray_301 border-solid text-black_900",
  OutlineLightblue500:
    "bg-light_blue_50_59 border border-light_blue_500 border-solid text-black_900",
  OutlineLightblue5001_2:
    "bg-light_blue_50 border border-light_blue_500 border-solid text-black_900",
  OutlineGray3011_2:
    "bg-gradient  border border-gray_301 border-solid text-white_A700",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  FillBluegray500: "bg-bluegray_500 text-white_A700",
  FillLightblueA700: "bg-light_blue_A700 text-white_A700",
  OutlineGray800: "border border-gray_800 border-solid text-white_A700",
  OutlineBlack900e5:
    "border border-black_900_e5 border-solid text-black_900_e5",
  FillGreenA700: "bg-green_A700 text-white_A700",
  icbFillGray900: "bg-gray_900",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lg: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  xl: "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  "2xl": "lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px]",
  smIcn: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
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
      } ${sizes[size] || ""} common-button `}
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
    "RoundedBorder11",
    "CustomBorderTL11",
    "CustomBorderLR11",
    "RoundedBorder6",
    "icbCircleBorder18",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray301",
    "OutlineLightblue500",
    "OutlineLightblue5001_2",
    "OutlineGray3011_2",
    "FillBluegray900",
    "FillBluegray500",
    "FillLightblueA700",
    "OutlineGray800",
    "OutlineBlack900e5",
    "FillGreenA700",
    "icbFillGray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineGray301",
  size: "lg",
};

export { Button };
