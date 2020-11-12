import React from "react";

import PreviewImage from "../components/preview-image/index.es";
import "antd/dist/antd.css";

export default {
  title: "预览图组件",
  component: PreviewImage,
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
