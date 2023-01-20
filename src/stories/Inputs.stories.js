import { Input } from "components";
export default {
  title: "hareesh_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder8",
  variant: "OutlineGray90019",
  size: "lg",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
