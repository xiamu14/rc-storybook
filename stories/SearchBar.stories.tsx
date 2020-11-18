import React, { useState } from "react";

import SearchBar from "../components/search-bar";

export default {
  title: "搜索框",
  component: SearchBar,
  argTypes: {},
};

const schema = {
  type: "object",
  properties: {
    radio: {
      type: "radio",
      enum: ["1", "2", "3", "4"],
      title: "Radio",
    },
    select: {
      type: "string",
      enum: ["1", "2", "3", "4"],
      title: "Select",
      required: true,
    },
  },
};

const Template = (args) => {
  return (
    <>
      <SearchBar schema={schema} onCaptureForm={() => {}} border />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
