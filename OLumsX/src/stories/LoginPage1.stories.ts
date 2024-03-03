import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "../../src/components/LoginPage1";

const meta: Meta<typeof LoginPage> = {
  title: "/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const LoginPageStory: Story = {};
