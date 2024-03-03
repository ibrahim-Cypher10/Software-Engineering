import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LoginPage1Type = {
  passwordLabel?: string;
  passwordInputText?: string;
  showRectangleIcon?: boolean;

  /** Style props */
  loginPageWidth?: CSSProperties["width"];
  loginPageBackgroundColor?: CSSProperties["backgroundColor"];
  loginPageHeight?: CSSProperties["height"];
  loginPagePosition?: CSSProperties["position"];
  loginPageTop?: CSSProperties["top"];
  loginPageRight?: CSSProperties["right"];
  loginPageBottom?: CSSProperties["bottom"];
  loginPageLeft?: CSSProperties["left"];
  oLumsXBorder?: CSSProperties["border"];
  oLumsXPadding?: CSSProperties["padding"];
  oLumsXBackgroundColor?: CSSProperties["backgroundColor"];
  forgotPasswordBorder?: CSSProperties["border"];
  forgotPasswordPadding?: CSSProperties["padding"];
  forgotPasswordBackgroundColor?: CSSProperties["backgroundColor"];
  usernameFontWeight?: CSSProperties["fontWeight"];
  passwordFontWeight?: CSSProperties["fontWeight"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];
  rectangleDivPadding?: CSSProperties["padding"];
  rectangleDivMixBlendMode?: CSSProperties["mixBlendMode"];
  loginBorder?: CSSProperties["border"];
  loginPadding?: CSSProperties["padding"];
  loginBackgroundColor?: CSSProperties["backgroundColor"];
  loginOpacity?: CSSProperties["opacity"];
};

const LoginPage1: FunctionComponent<LoginPage1Type> = ({
  passwordLabel,
  passwordInputText,
  showRectangleIcon,
  loginPageWidth,
  loginPageBackgroundColor,
  loginPageHeight,
  loginPagePosition,
  loginPageTop,
  loginPageRight,
  loginPageBottom,
  loginPageLeft,
  oLumsXBorder,
  oLumsXPadding,
  oLumsXBackgroundColor,
  forgotPasswordBorder,
  forgotPasswordPadding,
  forgotPasswordBackgroundColor,
  usernameFontWeight,
  passwordFontWeight,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  rectangleDivPadding,
  rectangleDivMixBlendMode,
  loginBorder,
  loginPadding,
  loginBackgroundColor,
  loginOpacity,
}) => {
  const loginPageStyle: CSSProperties = useMemo(() => {
    return {
      width: loginPageWidth,
      backgroundColor: loginPageBackgroundColor,
      height: loginPageHeight,
      position: loginPagePosition,
      top: loginPageTop,
      right: loginPageRight,
      bottom: loginPageBottom,
      left: loginPageLeft,
    };
  }, [
    loginPageWidth,
    loginPageBackgroundColor,
    loginPageHeight,
    loginPagePosition,
    loginPageTop,
    loginPageRight,
    loginPageBottom,
    loginPageLeft,
  ]);

  const oLumsXStyle: CSSProperties = useMemo(() => {
    return {
      border: oLumsXBorder,
      padding: oLumsXPadding,
      backgroundColor: oLumsXBackgroundColor,
    };
  }, [oLumsXBorder, oLumsXPadding, oLumsXBackgroundColor]);

  const forgotPasswordStyle: CSSProperties = useMemo(() => {
    return {
      border: forgotPasswordBorder,
      padding: forgotPasswordPadding,
      backgroundColor: forgotPasswordBackgroundColor,
    };
  }, [
    forgotPasswordBorder,
    forgotPasswordPadding,
    forgotPasswordBackgroundColor,
  ]);

  const usernameStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: usernameFontWeight,
    };
  }, [usernameFontWeight]);

  const passwordStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: passwordFontWeight,
    };
  }, [passwordFontWeight]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
      padding: rectangleDivPadding,
      mixBlendMode: rectangleDivMixBlendMode,
    };
  }, [
    rectangleDivBackgroundColor1,
    rectangleDivPadding,
    rectangleDivMixBlendMode,
  ]);

  const loginStyle: CSSProperties = useMemo(() => {
    return {
      border: loginBorder,
      padding: loginPadding,
      backgroundColor: loginBackgroundColor,
      opacity: loginOpacity,
    };
  }, [loginBorder, loginPadding, loginBackgroundColor, loginOpacity]);

  return (
    <div
      className="w-[1728px] rounded-56xl bg-lightblue h-[1117px] overflow-hidden text-left text-21xl text-black font-montserrat"
      style={loginPageStyle}
    >
      <div className="absolute top-[calc(50%_-_558.5px)] left-[calc(50%_-_864px)] rounded-56xl w-[1728px] h-[135px] text-center text-xl text-teal">
        <img
          className="absolute h-[747.41%] w-[100.93%] top-[-843.7%] right-[3.53%] bottom-[196.3%] left-[-4.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-71.svg"
        />
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-b-[2px] border-solid border-cornflowerblue" />
        <img
          className="absolute h-2/5 w-[7.52%] top-[30%] right-[73.67%] bottom-[30%] left-[18.81%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo.svg"
        />
        <div
          className="absolute h-2/5 w-[15.16%] top-[32.59%] left-[4.63%] text-21xl font-extrabold text-left inline-block"
          style={oLumsXStyle}
        >
          OLumsX
        </div>
        <div className="absolute h-[41.48%] w-[6.37%] top-[29.63%] right-[21.53%] bottom-[28.89%] left-[72.11%] rounded-9xl bg-teal hidden" />
        <div className="absolute h-[22.22%] w-[4.51%] top-[39.26%] left-[73.03%] font-extrabold text-white hidden">
          Cart
        </div>
        <div className="absolute h-[74.07%] w-[5.79%] top-[13.33%] right-[19.1%] bottom-[12.59%] left-[75.12%] overflow-hidden hidden">
          <div className="absolute h-[30%] w-[78%] top-[35%] left-[11%] font-extrabold inline-block">
            Cart
          </div>
        </div>
        <div className="absolute h-[55.56%] w-[4.34%] top-[22.22%] right-[9.61%] bottom-[22.22%] left-[86.05%] rounded-xl bg-teal box-border flex flex-row items-start justify-start py-[17.999998092651367px] pr-[15px] pl-[17.999998092651367px] gap-[0px_7.5px] border-[1.5px] border-solid border-dark-color-dark-20">
          <img
            className="w-12 absolute !m-[0] top-[14px] left-[14px] h-12 object-cover hidden z-[0]"
            alt=""
            src="/cartoutline@2x.png"
          />
          <img
            className="w-[45px] absolute !m-[0] top-[15px] left-[15px] h-[45px] object-cover z-[1]"
            alt=""
            src="/cartoutline1@2x.png"
          />
        </div>
        <div className="absolute h-[55.56%] w-[4.34%] top-[22.22%] right-[15.05%] bottom-[22.22%] left-[80.61%] rounded-xl bg-teal box-border flex flex-row items-start justify-start p-[17.999998092651367px] border-[1.5px] border-solid border-dark-color-dark-20">
          <img
            className="w-[45px] absolute !m-[0] top-[15px] left-[15px] h-[45px] object-cover z-[0]"
            alt=""
            src="/useroutline@2x.png"
          />
        </div>
        <div className="absolute h-[55.56%] w-[4.34%] top-[22.22%] right-[20.49%] bottom-[22.22%] left-[75.17%] rounded-xl bg-teal box-border flex flex-row items-start justify-start p-[17.999998092651367px] gap-[0px_7.5px] border-[1.5px] border-solid border-dark-color-dark-20">
          <img
            className="w-[45px] absolute !m-[0] top-[14px] left-[14px] h-[45px] object-cover hidden z-[0]"
            alt=""
            src="/useroutline@2x.png"
          />
          <img
            className="w-[45px] absolute !m-[0] top-[15px] left-[15px] h-[45px] object-cover z-[1]"
            alt=""
            src="/likeoutline@2x.png"
          />
        </div>
        <div className="absolute h-[55.56%] w-[4.34%] top-[22.22%] right-[4.17%] bottom-[22.22%] left-[91.49%] rounded-xl bg-teal box-border hidden flex-row items-start justify-start p-[17.999998092651367px] border-[1.5px] border-solid border-dark-color-dark-20">
          <img
            className="w-[45px] absolute !m-[0] top-[15px] left-[15px] h-[45px] object-cover hidden z-[0]"
            alt=""
            src="/burgernavoutline@2x.png"
          />
        </div>
        <img
          className="absolute h-[35.56%] w-[2.78%] top-[32.59%] right-[76.33%] bottom-[31.85%] left-[20.89%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={passwordLabel}
        />
        <img
          className="absolute h-[28.15%] w-[2.2%] top-[14.07%] right-[96.7%] bottom-[57.78%] left-[1.1%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[28.15%] w-[2.2%] top-[39.26%] right-[4.34%] bottom-[32.59%] left-[93.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <div className="absolute h-[55.56%] w-[4.34%] top-[21.48%] right-[4.17%] bottom-[22.96%] left-[91.49%] rounded-xl bg-teal box-border flex flex-row items-start justify-start p-[17.999998092651367px] gap-[0px_7.5px] border-[1.5px] border-solid border-dark-color-dark-20">
          <img
            className="w-[45px] absolute !m-[0] top-[15px] left-[15px] h-[45px] object-cover z-[0]"
            alt=""
            src="/burgernavoutline1@2x.png"
          />
          <img
            className="w-[38px] absolute !m-[0] top-[19px] left-[19px] h-[38px] z-[1]"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="absolute top-[488px] left-[972px] w-[100px] h-[100px] overflow-hidden" />
      <img
        className="absolute top-[538px] left-[3px] w-[1725px] h-[584px] object-cover hidden"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="absolute top-[219px] left-[258px] rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1188px] h-[571px] border-[1px] border-solid border-black" />
      <i
        className="absolute top-[627px] left-[1105px] text-13xl font-light"
        style={forgotPasswordStyle}
      >
        Forgot Password?
      </i>
      <div
        className="absolute top-[416px] left-[304px] font-extrabold"
        style={usernameStyle}
      >
        Username:
      </div>
      <div
        className="absolute top-[549px] left-[306px] font-extrabold"
        style={passwordStyle}
      >
        {passwordInputText}
      </div>
      <div
        className="absolute top-[192px] left-[238px] rounded-xl bg-steelblue box-border w-[1231px] h-[103px] border-[1px] border-solid border-black"
        style={rectangleDivStyle}
      />
      <div className="absolute top-[calc(50%_-_338.5px)] left-[calc(50%_-_71px)] font-extrabold text-white">
        Login
      </div>
      <div
        className="absolute top-[905px] left-[657px] rounded-xl bg-steelblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[403px] h-[101px] border-[1px] border-solid border-black"
        style={rectangleDiv1Style}
      />
      <div
        className="absolute top-[932px] left-[803px] font-extrabold text-white"
        style={loginStyle}
      >
        Login
      </div>
      {showRectangleIcon && (
        <img
          className="absolute top-[407px] left-[547px] w-[767px] h-[194px]"
          alt=""
          src="/rectangle-19.svg"
        />
      )}
    </div>
  );
};

export default LoginPage1;
