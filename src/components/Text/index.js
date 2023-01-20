import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[18px] md:text-[20px] text-[22px]",
  h2: "font-medium text-[18px]",
  h3: "font-semibold text-[16px]",
  h4: "text-[15px]",
  h5: "text-[14px]",
  h6: "text-[13px]",
  body1: "text-[12px]",
  body2: "text-[11px]",
  body3: "text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
