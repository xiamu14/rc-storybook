import React, { useState } from "react";

import Modal from "../components/react-modal/index.es";
import "./button.css";

export default {
  title: "模态弹层",
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button className="storybook-button storybook-button--primary" onClick={() => setVisible(true)}>弹出对话框</button>
      <Modal visible={visible} onCancel={() => setVisible(false)} {...args} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
