import { FunctionComponent } from "react";
import LoginPage1 from "./LoginPage11";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="w-[1728px] rounded-56xl h-[1117px]">
      <LoginPage1
        passwordLabel="/searchoutline21@2x.png"
        passwordInputText="Password:"
        showRectangleIcon={false}
        loginPageWidth="100%"
        loginPageBackgroundColor="#1a788c"
        loginPageHeight="100%"
        loginPagePosition="absolute"
        loginPageTop="0%"
        loginPageRight="0%"
        loginPageBottom="0%"
        loginPageLeft="0%"
        oLumsXBorder="none"
        oLumsXPadding="0"
        oLumsXBackgroundColor="transparent"
        forgotPasswordBorder="none"
        forgotPasswordPadding="0"
        forgotPasswordBackgroundColor="transparent"
        usernameFontWeight="bold"
        passwordFontWeight="bold"
        rectangleDivBackgroundColor="#151d5a"
        rectangleDivBackgroundColor1="#151d5a"
        rectangleDivPadding="0"
        rectangleDivMixBlendMode="normal"
        loginBorder="none"
        loginPadding="0"
        loginBackgroundColor="transparent"
        loginOpacity="1"
      />
      <input
        className="[border:none] [outline:none] bg-gainsboro-200 absolute h-[5.1%] w-[49.54%] top-[37.06%] right-[19.39%] bottom-[57.83%] left-[31.08%]"
        type="text"
      />
      <input
        className="[border:none] [outline:none] bg-gainsboro-200 absolute h-[5.1%] w-[49.54%] top-[49.15%] right-[19.39%] bottom-[45.75%] left-[31.08%]"
        type="text"
      />
    </div>
  );
};

export default LoginPage;
