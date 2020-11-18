import React from "react";

import PreviewImage from "../components/preview-image/index";
import "antd/dist/antd.css";

export default {
  title: "预览图组件",
  component: PreviewImage,
  argTypes: {
    src: { control: "text", description: "图片地址" },
    width: { control: "text", description: "图片地址" },
    height: { control: "text", description: "图片地址" },
    fullWidth: {
      control: "text",
      description: "按宽度缩放展示模式，默认 460 * auto",
    },
    mask: { control: "boolean", description: "是否显示半透明底板，默认显示" },
  },
};

export function PreviewImageWithNoProps() {
  return (
    <div>
      <PreviewImage
        src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        width={60}
        fullWidth={400}
      />
    </div>
  );
}
