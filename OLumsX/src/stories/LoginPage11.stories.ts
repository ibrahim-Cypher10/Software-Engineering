import type { Meta, StoryObj } from "@storybook/react";
import LoginPage1 from "../../src/components/LoginPage11";

const meta: Meta<typeof LoginPage1> = {
  title: "/LoginPage1",
  component: LoginPage1,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginPage1>;

export const LoginPage1Story: Story = {
  args: {
    passwordLabel: "/searchoutline@2x.png",
    passwordInputText: "Password",
    showRectangleIcon: true,
    loginPageWidth: "1728px",
    loginPageBackgroundColor: "#99c0ca",
    loginPageHeight: "1117px",
    loginPagePosition: "",
    loginPageTop: "",
    loginPageRight: "",
    loginPageBottom: "",
    loginPageLeft: "",
    oLumsXBorder: "",
    oLumsXPadding: "",
    oLumsXBackgroundColor: "",
    forgotPasswordBorder: "",
    forgotPasswordPadding: "",
    forgotPasswordBackgroundColor: "",
    usernameFontWeight: "800",
    passwordFontWeight: "800",
    rectangleDivBackgroundColor: "#5f79ac",
    rectangleDivBackgroundColor1: "#5f79ac",
    rectangleDivPadding: "",
    rectangleDivMixBlendMode: "",
    loginBorder: "",
    loginPadding: "",
    loginBackgroundColor: "",
    loginOpacity: "",
  },
};
