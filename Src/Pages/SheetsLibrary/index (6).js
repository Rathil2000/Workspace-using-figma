import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  Line,
  Button,
  Input,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SheetsLibraryPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-glacialindifference items-center mx-[auto] w-[100%]">
        <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] w-[100%]">
          <Img
            src="images/img_minimize.svg"
            className="absolute lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[5%] top-[28%] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
            alt="minimize"
          />
          <Row className="absolute bg-white_A700 items-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
            <Img
              src="images/img_group427318123.png"
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[4%]"
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
            <Stack className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:ml-[630px] xl:ml-[721px] 2xl:ml-[811px] 3xl:ml-[973px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[2%]">
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
        <Row className="justify-evenly w-[97%]">
          <aside className="w-[10%]">
            <Column className="">
              <Column className="bg-white_A700 border border-gray_301 border-solid justify-center p-[1px] w-[69%]">
                <Stack className="bg-white_A700 border border-gray_301 border-solid lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius11 w-[57%]">
                  <Img
                    src="images/img_home.svg"
                    className="absolute lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] inset-[0] justify-center m-[auto] w-[39%]"
                    alt="home"
                  />
                </Stack>
                <Line className="bg-gray_301 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[69%]" />
                <Column className="2xl:mb-[1026px] 3xl:mb-[1231px] lg:mb-[798px] xl:mb-[912px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[79%]">
                  <Stack className="bg-white_A700 border border-gray_301 border-solid lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius11 w-[73%]">
                    <Img
                      src="images/img_clock.svg"
                      className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      alt="clock"
                    />
                  </Stack>
                  <Stack className="bg-white_A700 border border-gray_301 border-solid lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] rounded-radius11 w-[73%]">
                    <Img
                      src="images/img_checkmark_21X22.svg"
                      className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] inset-[0] justify-center m-[auto] w-[39%]"
                      alt="checkmark"
                    />
                  </Stack>
                  <Row className="justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Stack className="bg-gradient1  border border-gray_301 border-solid lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[3px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] rounded-radius11 w-[73%]">
                      <Img
                        src="images/img_link_22X22.svg"
                        className="absolute lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] justify-center m-[auto] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                        alt="link"
                      />
                    </Stack>
                    <Line className="bg-gradient1  border-bw5 border-gray_301 border-solid lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] w-[5px]" />
                  </Row>
                </Column>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[90%]">
            <Row className="w-[65%]">
              <Column className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius11 w-[13%]">
                <Column className="items-center rounded-radius11 w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[100%]"
                    leftIcon={
                      <Img
                        src="images/img_link.svg"
                        className="text-center lg:w-[17px] lg:h-[18px] lg:mr-[7px] xl:w-[19px] xl:h-[20px] xl:mr-[8px] 2xl:w-[22px] 2xl:h-[23px] 2xl:mr-[10px] 3xl:w-[26px] 3xl:h-[27px] 3xl:mr-[12px]"
                        alt="link"
                      />
                    }
                    shape="RoundedBorder11"
                  >
                    <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Sheets{" "}
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="items-center mb-[2px] lg:ml-[262px] xl:ml-[299px] 2xl:ml-[337px] 3xl:ml-[404px] rounded-radius262 w-[45%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="flex w-[100%]"
                  name="searchbar"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[2px] lg:w-[12px] lg:h-[13px] lg:mr-[11px] xl:w-[14px] xl:h-[15px] xl:mr-[13px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[15px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[18px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#7d7676"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcCircleBorder26"
                  size="smSrc"
                  variant="srcOutlineGray300"
                ></Input>
              </Column>
            </Row>
            <Row className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
              <SelectBox
                className="font-normal italic lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[21%]"
                placeholderClassName="text-gray_600"
                name="Group427319571"
                placeholder="Select asset"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:w-[8px] lg:h-[5px] lg:mr-[14px] xl:w-[9px] xl:h-[6px] xl:mr-[16px] 2xl:w-[11px] 2xl:h-[7px] 2xl:mr-[19px] 3xl:w-[13px] 3xl:h-[8px] 3xl:mr-[22px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder11"
                size="sm"
                variant="OutlineGray301"
              ></SelectBox>
              <SelectBox
                className="font-normal italic 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[21%]"
                placeholderClassName="text-gray_600"
                name="Group427319571 One"
                placeholder="Select sub-asset"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:w-[8px] lg:h-[5px] lg:mr-[14px] xl:w-[9px] xl:h-[6px] xl:mr-[16px] 2xl:w-[11px] 2xl:h-[7px] 2xl:mr-[19px] 3xl:w-[13px] 3xl:h-[8px] 3xl:mr-[22px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder11"
                size="sm"
                variant="OutlineGray301"
              ></SelectBox>
              <Button
                className="2xl:ml-[551px] 3xl:ml-[661px] flex items-center justify-center lg:ml-[428px] mb-[4px] text-center w-[14%] xl:ml-[490px]"
                leftIcon={
                  <Img
                    src="images/img_plus_20X21.svg"
                    className="text-center lg:w-[16px] lg:mr-[4px] xl:w-[18px] xl:mr-[5px] 2xl:w-[21px] 2xl:mr-[6px] 3xl:w-[25px] 3xl:mr-[7px]"
                    alt="plus"
                  />
                }
                shape="RoundedBorder11"
                variant="OutlineGray3011_2"
              >
                <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Author New Sheet
                </div>
              </Button>
            </Row>
            <Img
              src="images/img_location.svg"
              className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:ml-[424px] xl:ml-[485px] 2xl:ml-[546px] 3xl:ml-[655px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[5%]"
              alt="location"
            />
            <Text className="font-normal lg:ml-[374px] xl:ml-[427px] 2xl:ml-[481px] 3xl:ml-[577px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[auto]">
              No sheets here. Start authoring!
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SheetsLibraryPage;
