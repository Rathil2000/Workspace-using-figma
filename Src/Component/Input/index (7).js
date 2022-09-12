import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray301: "bg-white_A700 border border-gray_301 border-solid",
  srcOutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
};
const shapes = {
  RoundedBorder11: "rounded-radius11",
  srcCircleBorder26: "rounded-radius26",
};
const sizes = {
  sm: "xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px]",
  smSrc:
    "lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
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
  shape: PropTypes.oneOf(["RoundedBorder11", "srcCircleBorder26"]),
  variant: PropTypes.oneOf(["OutlineGray301", "srcOutlineGray300"]),
  size: PropTypes.oneOf(["sm", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder11",
  variant: "OutlineGray301",
  size: "sm",
};

export { Input };
