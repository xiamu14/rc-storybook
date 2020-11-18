import React from "react";
import "quill/dist/quill.snow.css";
import Quill from "../components/react-quill";

import "./button.css";

export default {
  title: "文本编辑器",
  component: Quill,
  argTypes: {
    options: { description: "quill 配置选项，具体查看 quill 官网", control: 'text' },
  },
};

const Template = (args) => {
  return (
    <>
      <Quill
        options={{
          theme: "snow",
          modules: {
            toolbar: [
              ["bold", "italic"],
              ["link", "image"],
            ],
          },
        }}
      />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
