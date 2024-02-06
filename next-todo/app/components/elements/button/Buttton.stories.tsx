// src/Button.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonType } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    className: { control: "text" },
    children: { control: "text" },
  },
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "border-blue-500 ",
  children: "Click me",
};

// 他のバリエーションを追加する場合は、以下のように新しいストーリーを定義します
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  className: "bg-green-500 ",
  children: "Secondary Button",
};

// 他のバリエーションを追加したい場合は、同様にテンプレートを利用して定義できます
