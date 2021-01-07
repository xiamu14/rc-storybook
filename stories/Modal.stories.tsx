import React, { useRef } from "react";
import { RefType } from "../components/react-modal";

import Modal from "../components/react-modal/index.es";
import "./button.css";

export default {
  title: "模态弹层",
  component: Modal,
  argTypes: {
    visible: { control: "boolean" },
  },
};

const Template = (args) => {
  const modalRef = useRef<RefType>();

  return (
    <>
      <button
        className="storybook-button storybook-button--primary"
        onClick={() => modalRef?.current.show()}
      >
        弹出对话框
      </button>
      <Modal ref={modalRef} header={false} {...args} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
