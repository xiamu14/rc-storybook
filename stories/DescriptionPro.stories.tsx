import React, { useState } from "react";

import DescriptionPro from "../components/description-pro";
import "antd/dist/antd.css";

export default {
  title: "描述列表组件",
  component: DescriptionPro,
  argTypes: {
    schema: { description: "描述列表结构" },
    data: { description: "描述内容数据" },
    border: { description: "是否显示边框", control: "boolean" },
    center: { description: "文本是否居中显示", control: "boolean" },
    groups: {
      description: "// 分组显示，将内容分成不同的组用独立的 description 显示",
    },
  },
};

const schema = [
  {
    label: "昵称",
    dataIndex: "nickname",
  },
  {
    label: "手机号",
    dataIndex: "phone",
  },
  {
    label: "民族",
    dataIndex: "nation",
  },
];

const data = {
  nickname: "李苑",
  phone: "13212341234",
  nation: "汉",
};

const Template = (args) => {
  return (
    <>
      <DescriptionPro
        title="用户信息"
        schema={schema}
        data={data}
        bordered
        center
      />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
