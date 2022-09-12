import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import {
  Column,
  Stack,
  Row,
  Img,
  Button,
  List,
  Text,
  SelectBox,
  Line,
} from "components";

const FramePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center mx-[auto] w-[100%]">
        <Stack className="lg:h-[45px] xl:h-[52px] 2xl:h-[58px] 3xl:h-[70px] w-[100%]">
          <div className="absolute bg-white_A700 lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] top-[0] w-[100%]"></div>
          <Row className="absolute bg-bluegray_900 items-center justify-end lg:pl-[12px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] w-[100%]">
            <Img
              src="images/img_vector.svg"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] w-[1%]"
              alt="Vector"
            />
            <Img
              src="images/img_arrowdown_black_900.svg"
              className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1%]"
              alt="arrowdown"
            />
            <Row className="bg-bluegray_900 items-center justify-center lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:pr-[204px] xl:pr-[233px] 2xl:pr-[262px] 3xl:pr-[315px] w-[24%]">
              <Stack className="bg-light_blue_501 lg:h-[45px] xl:h-[52px] 2xl:h-[58px] 3xl:h-[70px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] w-[59%]">
                <Img
                  src="images/img_signal.svg"
                  className="absolute lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] inset-[0] justify-center m-[auto] w-[43%]"
                  alt="signal"
                />
              </Stack>
              <Img
                src="images/img_refresh.svg"
                className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[26%]"
                alt="refresh"
              />
            </Row>
            <Button
              className="font-normal lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] not-italic lg:text-[12px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[17%]"
              variant="FillBluegray900"
            >
              Workroom
            </Button>
            <Column className="bg-bluegray_900 lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] 3xl:pb-[11px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[24%]">
              <Row className="items-center lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] w-[13%]">
                <div className="bg-pink_A200 lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] w-[11%]"></div>
                <div className="bg-green_A700 lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] xl:h-[3px] lg:ml-[26px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] w-[11%]"></div>
              </Row>
              <Row className="items-center justify-end ml-[auto] mr-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[87%]">
                <List
                  className="lg:gap-[2px] 2xl:gap-[3px] xl:gap-[3px] 3xl:gap-[4px] grid grid-cols-2 min-h-[auto] w-[26%]"
                  orientation="horizontal"
                >
                  <Column
                    className="bg-cover bg-repeat lg:h-[28px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] items-center px-[2px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <Button
                      className="font-normal lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center uppercase lg:w-[22px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                      size="sm"
                      variant="FillBluegray500"
                    >
                      A
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat lg:h-[28px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] items-center px-[2px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group24.svg')" }}
                  >
                    <Button
                      className="font-normal lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-center uppercase lg:w-[22px] xl:w-[25px] 2xl:w-[28px] 3xl:w-[34px]"
                      size="sm"
                      variant="FillLightblueA700"
                    >
                      R
                    </Button>
                  </Column>
                </List>
                <Button
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[24%]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="OutlineGray800"
                >
                  Log in
                </Button>
                <Img
                  src="images/img_vector_white_A700.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[27px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] w-[4%]"
                  alt="Vector One"
                />
                <Text className="font-normal lg:ml-[26px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-white_A700 w-[auto]">
                  100
                </Text>
                <SelectBox
                  className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-white_A700 w-[9%]"
                  placeholderClassName="text-white_A700"
                  name="GroupNinetySix"
                  placeholder="%"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="mr-[0] lg:w-[5px] lg:h-[4px] xl:w-[6px] xl:h-[5px] 2xl:w-[7px] 2xl:h-[5px] 3xl:w-[8px] 3xl:h-[6px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </Row>
            </Column>
          </Row>
        </Stack>
        <Row className="bg-black_900 justify-between lg:pr-[22px] xl:pr-[25px] 2xl:pr-[28px] 3xl:pr-[34px] w-[100%]">
          <Stack className="3xl:h-[1084px] lg:h-[702px] xl:h-[803px] 2xl:h-[904px] w-[91%]">
            <Row className="absolute items-center justify-evenly left-[0] w-[23%]">
              <aside className="items-center w-[100%]">
                <Column className="">
                  <Column className="bg-white_A700 justify-end pr-[1px] pt-[1px] w-[100%]">
                    <Row className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] mr-[auto] lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] w-[20%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-black_900_e5 w-[auto]">
                        Page 1
                      </Text>
                      <Img
                        src="images/img_arrowdown_black_900_4X6.svg"
                        className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] ml-[4px] mt-[2px] w-[13%]"
                        alt="arrowdown Two"
                      />
                    </Row>
                    <div className="bg-white_A700 3xl:h-[1026px] lg:h-[665px] xl:h-[761px] 2xl:h-[855px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"></div>
                  </Column>
                </Column>
              </aside>
              <Line className="bg-gray_302 3xl:h-[1084px] lg:h-[702px] xl:h-[803px] 2xl:h-[904px] w-[1px]" />
            </Row>
            <Row className="absolute bg-white_A700 items-center justify-between lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] right-[0] rounded-radius3 shadow-bs top-[3%] w-[87%]">
              <Img
                src="images/img_close.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[2%]"
                alt="close"
              />
              <Text className="font-normal not-italic lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900_e5 w-[auto]">
                Welcome to Figma!
              </Text>
              <Text className="font-normal not-italic lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900_e5 w-[auto]">
                Create an account to edit and collaborate on this file.
              </Text>
              <Button
                className="flex items-center justify-center my-[1px] text-center w-[19%]"
                onClick={googleSignIn}
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="text-center lg:w-[21px] lg:mr-[4px] xl:w-[24px] xl:mr-[5px] 2xl:w-[27px] 2xl:mr-[6px] 3xl:w-[33px] 3xl:mr-[7px]"
                    alt="google"
                  />
                }
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBlack900e5"
              >
                <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                  Continue with Google
                </div>
              </Button>
              <Button
                className="font-normal my-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-center w-[14%]"
                shape="RoundedBorder6"
                size="md"
                variant="FillGreenA700"
              >
                Sign up with email
              </Button>
            </Row>
            <Row className="absolute bg-gray_900 bottom-[3%] items-center justify-end lg:px-[11px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] right-[17%] rounded-radius5 shadow-bs w-[53%]">
              <Text className="font-normal not-italic lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-white_A700 tracking-ls1 w-[auto]">
                Improve performance by enabling hardware acceleration
              </Text>
              <Line className="bg-gray_801 lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] w-[1px]" />
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-white_A700 tracking-ls1 w-[auto]">
                Learn more
              </Text>
              <Line className="bg-gray_801 lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[25px] w-[1px]" />
              <Img
                src="images/img_close_11X11.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[12px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                alt="close One"
              />
            </Row>
          </Stack>
          <Button
            className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center lg:mt-[645px] xl:mt-[738px] 2xl:mt-[830px] 3xl:mt-[997px] rounded-radius50 lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
            size="smIcn"
            variant="icbFillGray900"
          >
            <Img
              src="images/img_question.svg"
              className="flex items-center justify-center"
              alt="question"
            />
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default FramePage;
