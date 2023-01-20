import { SelectBox } from "components";
export default {
  title: "hareesh_s_application1/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder6",
  variant: "OutlineGray90019",
  size: "lg",
  className: "w-[300px]",
};
