import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Img, Row, Text, Button, Line } from "components";

const SheetsNinePage = () => {
  const navigate = useNavigate();

  function handleBackNavigation9() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-gray_50 font-glacialindifference items-center mx-[auto] lg:pb-[134px] xl:pb-[153px] 2xl:pb-[173px] 3xl:pb-[207px] w-[100%]">
        <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] w-[100%]">
          <Img
            src="images/img_minimize.svg"
            className="absolute lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[5%] top-[28%] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
            alt="minimize"
          />
          <Row className="absolute bg-white_A700 items-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
            <Img
              src="images/img_group427318123.png"
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] mb-[1px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[4%]"
              alt="Group427318123"
            />
            <Text className="font-bold mb-[4px] ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 tracking-ls1 w-[auto]">
              Workroom{" "}
            </Text>
            <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 tracking-ls1 w-[auto]">
              |
            </Text>
            <Text className="font-normal mb-[1px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
              CTQ System
            </Text>
            <Stack className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:ml-[631px] xl:ml-[722px] 2xl:ml-[812px] 3xl:ml-[974px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[2%]">
              <Img
                src="images/img_notification.svg"
                className="absolute bottom-[0] lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] left-[0] w-[83%]"
                alt="notification"
              />
              <div className="absolute bg-red_A700 border border-red_A700 border-solid lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] right-[0] rounded-radius50 top-[0] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"></div>
            </Stack>
            <Row className="items-end justify-center lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[10%]">
              <Img
                src="images/img_avatars.svg"
                className="lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] w-[35%]"
                alt="Avatars"
              />
              <Column className="mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[56%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Kranti Kiran{" "}
                </Text>
                <Text className="font-normal mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Admin
                </Text>
              </Column>
            </Row>
          </Row>
        </Stack>
        <Column className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[94%]">
          <Row className="items-center w-[100%]">
            <Stack className="bg-white_A700 border border-gray_301 border-solid lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius11 w-[3%]">
              <Img
                src="images/img_arrowleft.svg"
                className="common-pointer absolute lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] inset-[0] justify-center m-[auto] w-[18%]"
                onClick={handleBackNavigation9}
                alt="arrowleft"
              />
            </Stack>
            <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rounded-radius11 w-[7%]">
              <Button
                className="flex items-center justify-center text-center w-[100%]"
                leftIcon={
                  <Img
                    src="images/img_qrcode.svg"
                    className="text-center lg:w-[17px] lg:mr-[7px] xl:w-[19px] xl:mr-[8px] 2xl:w-[22px] 2xl:mr-[9px] 3xl:w-[26px] 3xl:mr-[10px]"
                    alt="qrcode"
                  />
                }
                shape="RoundedBorder11"
              >
                <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Sheets
                </div>
              </Button>
            </Column>
            <Button
              className="2xl:ml-[20px] 3xl:ml-[24px] flex items-center justify-center lg:ml-[15px] text-center w-[19%] xl:ml-[17px]"
              leftIcon={
                <Img
                  src="images/img_file.svg"
                  className="text-center lg:w-[11px] lg:mr-[7px] xl:w-[13px] xl:mr-[8px] 2xl:w-[15px] 2xl:mr-[9px] 3xl:w-[18px] 3xl:mr-[10px]"
                  alt="file"
                />
              }
              shape="RoundedBorder11"
              variant="OutlineLightblue500"
            >
              <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] underline">
                First Piece CTQ : Tube Press Up
              </div>
            </Button>
            <Button
              className="font-normal lg:ml-[401px] xl:ml-[459px] 2xl:ml-[516px] 3xl:ml-[619px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
              shape="CustomBorderTL11"
              variant="OutlineLightblue5001_2"
            >
              Authoring
            </Button>
            <Button
              className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
              shape="CustomBorderLR11"
            >
              Preview
            </Button>
            <Button
              className="font-bold lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
              shape="RoundedBorder11"
              variant="OutlineGray3011_2"
            >
              Finish Authoring
            </Button>
          </Row>
          <Row
            className="bg-cover bg-repeat items-center justify-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group111.svg')" }}
          >
            <Img
              src="images/img_link.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
              alt="link"
            />
            <Text className="font-bold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Fields
            </Text>
            <Img
              src="images/img_menu.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[366px] xl:ml-[418px] 2xl:ml-[471px] 3xl:ml-[565px] w-[2%]"
              alt="menu"
            />
            <Text className="font-bold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Canvas
            </Text>
            <Img
              src="images/img_bookmark.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[369px] xl:ml-[422px] 2xl:ml-[475px] 3xl:ml-[570px] w-[1%]"
              alt="bookmark"
            />
            <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mr-[58px] xl:mr-[66px] 2xl:mr-[75px] 3xl:mr-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              Controls
            </Text>
          </Row>
          <Row className="items-center justify-evenly w-[100%]">
            <Stack className="lg:h-[1094px] xl:h-[1251px] 2xl:h-[1407px] 3xl:h-[1689px] w-[81%]">
              <Stack className="absolute lg:h-[1094px] xl:h-[1251px] 2xl:h-[1407px] 3xl:h-[1689px] w-[100%]">
                <Row className="absolute items-center justify-evenly w-[100%]">
                  <div className="bg-white_A700 border border-gray_301 border-solid lg:h-[1094px] xl:h-[1251px] 2xl:h-[1407px] 3xl:h-[1689px] w-[23%]"></div>
                  <Stack className="bg-white_A700 border border-gray_301 border-solid lg:h-[1094px] xl:h-[1251px] 2xl:h-[1407px] 3xl:h-[1689px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[77%]">
                    <Stack className="absolute lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] inset-x-[0] mx-[auto] shadow-bs1 top-[7%] w-[96%]">
                      <Column className="absolute items-end justify-end py-[1px] shadow-bs1 top-[0] w-[100%]">
                        <Column className="items-end lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[93%]">
                          <Row className="items-center w-[100%]">
                            <div className="bg-white_A700 border border-gray_301 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                            <Text className="bg-white_A700 border border-gray_301 border-solid font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[8px] xl:pl-[9px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rounded-radius11 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[728px]">
                              Checklist Item 1
                            </Text>
                          </Row>
                          <Img
                            src="images/img_contrast.svg"
                            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                            alt="contrast"
                          />
                        </Column>
                        <div className="bg-gray_50 border border-gray_301 border-solid xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] mt-[1px] rounded-radius11 w-[100%]"></div>
                        <Img
                          src="images/img_contrast.svg"
                          className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mr-[1px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                          alt="contrast One"
                        />
                        <Row className="items-center justify-end mt-[1px] w-[93%]">
                          <div className="bg-white_A700 border border-gray_301 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                          <Column className="bg-white_A700 border border-gray_301 border-solid lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius11 w-[97%]">
                            <Text className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[auto]">
                              Checklist Item 2
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-end mr-[4px] w-[13%]">
                          <Img
                            src="images/img_plus.svg"
                            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                            alt="plus"
                          />
                          <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                            Add an Option
                          </Text>
                        </Row>
                      </Column>
                      <Stack className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] right-[0] top-[0] w-[9%]">
                        <Text className="absolute font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Field Title{" "}
                        </Text>
                        <Img
                          src="images/img_vector_gray_600.svg"
                          className="absolute bottom-[36%] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] right-[17%] w-[26%]"
                          alt="Vector"
                        />
                      </Stack>
                    </Stack>
                    <Stack className="absolute bg-gray_300 lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] px-[1px] right-[0] rotate-[180deg] top-[11%] w-[1%]">
                      <Img
                        src="images/img_vector_gray_400.svg"
                        className="absolute bottom-[26%] lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] left-[0] w-[44%]"
                        alt="Vector One"
                      />
                    </Stack>
                  </Stack>
                </Row>
                <Column className="absolute items-center left-[0] top-[0] w-[23%]">
                  <Stack className="bg-gray_300_7c border border-gray_301 border-solid lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
                    <Text className="absolute font-normal left-[7%] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 top-[25%] w-[auto]">
                      Basic Fields{" "}
                    </Text>
                    <Text className="absolute bg-gray_300_7c border border-gray_301 border-solid font-normal not-italic lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[246px]">
                      Basic Fields{" "}
                    </Text>
                  </Stack>
                  <Stack className="lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] w-[100%]">
                    <Stack className="absolute lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] w-[100%]">
                      <Stack className="absolute lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] top-[0] w-[100%]">
                        <Line className="absolute bg-gray_301 h-[1px] inset-x-[0] top-[3%] w-[100%]" />
                        <Row className="absolute bg-white_A700 border border-gray_301 border-solid items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] right-[0] w-[100%]">
                          <Img
                            src="images/img_info.svg"
                            className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                            alt="info"
                          />
                          <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                            Text
                          </Text>
                        </Row>
                      </Stack>
                      <Text className="absolute bg-gray_300_7c border border-gray_301 border-solid bottom-[0] font-normal not-italic lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[246px]">
                        Selection Fields{" "}
                      </Text>
                      <Line className="absolute bg-gray_301 h-[1px] inset-x-[0] top-[1%] w-[100%]" />
                    </Stack>
                    <Row className="absolute bg-white_A700 border border-gray_301 border-solid items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] top-[0] w-[100%]">
                      <Img
                        src="images/img_info.svg"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                        alt="info One"
                      />
                      <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Text
                      </Text>
                    </Row>
                  </Stack>
                  <Stack className="xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] w-[100%]">
                    <Stack className="absolute lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] top-[0] w-[100%]">
                      <Row className="absolute bg-white_A700 border border-gray_301 border-solid items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] top-[0] w-[100%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mb-[1px] ml-[4px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                          alt="checkmark"
                        />
                        <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Checklist
                        </Text>
                      </Row>
                      <Row className="absolute bg-white_A700 border border-gray_301 border-solid bottom-[0] items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                        <Img
                          src="images/img_calendar.svg"
                          className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                          alt="calendar"
                        />
                        <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Select Date & Time
                        </Text>
                      </Row>
                    </Stack>
                    <Text className="absolute bg-gray_300_7c border border-gray_301 border-solid bottom-[0] font-normal not-italic lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[246px]">
                      Attachment Fields{" "}
                    </Text>
                  </Stack>
                  <Stack className="lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] w-[100%]">
                    <Text className="absolute bg-gray_300_7c border border-gray_301 border-solid bottom-[0] font-normal not-italic 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[246px]">
                      Layout
                    </Text>
                    <Row className="absolute bg-white_A700 border border-gray_301 border-solid items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] top-[0] w-[100%]">
                      <Img
                        src="images/img_mail.svg"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[10%]"
                        alt="mail"
                      />
                      <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Upload Image
                      </Text>
                    </Row>
                  </Stack>
                  <Row className="bg-white_A700 border border-gray_301 border-solid items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[100%]">
                    <Img
                      src="images/img_menu_18X18.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[4px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      alt="menu One"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Section
                    </Text>
                  </Row>
                </Column>
              </Stack>
              <Column className="absolute bg-light_blue_50_a5 border border-gray_301 border-solid lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] right-[0] top-[0] w-[77%]">
                <Row className="items-center justify-between 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[98%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    Section 01
                  </Text>
                  <Img
                    src="images/img_vector_gray_600.svg"
                    className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] w-[2%]"
                    alt="Vector Two"
                  />
                </Row>
                <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Section Title
                </Text>
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Section description
                </Text>
              </Column>
            </Stack>
            <div className="bg-white_A700 border border-gray_301 border-solid lg:h-[1094px] xl:h-[1251px] 2xl:h-[1407px] 3xl:h-[1689px] w-[19%]"></div>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SheetsNinePage;
