import {
  faBars,
  faDiamondTurnRight,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStitches, globalCss } from "@stitches/react";
import React, { useRef, useState } from "react";
import { SwiperCarousel } from "../shared/SwiperCarousel";

export const { styled, css } = createStitches({
  media: {
    md: "(min-width: 1200px)",
  },
});

const tel = "+17052596800";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      {fonts()}
      <StyledHeader>
        <HeaderContent>
          <BurgerLogoWrap>
            <StyledBurgerBtn
              onClick={() => {
                setIsOpen((prevState) => !prevState);
              }}
            >
              <FontAwesomeIcon
                width={25}
                height={25}
                icon={isOpen ? faXmark : faBars}
              />
            </StyledBurgerBtn>
            <StyledLogoHeader href="/">Sushi Wadasi</StyledLogoHeader>
          </BurgerLogoWrap>
          <DirectionsContactWrap>
            <div>
              <StyledHeaderLink href={`tel:${tel}`}>
                <FontAwesomeIcon icon={faPhone} />
                <span>Call</span>
              </StyledHeaderLink>
            </div>
            <div>
              <StyledHeaderLink
                target={"_blank"}
                rel="noreferrer"
                href="https://www.google.com/maps/dir//Sushi+Wadasi,+66+Mississaga+St+E,+Orillia,+ON+L3V+1V5,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@44.6090631,-79.4181085,17z/data=!3m1!5s0x4d2aa93b77ad5cfb:0x288d555d4cfd2894!4m8!4m7!1m0!1m5!1m1!1s0x4d2aa93b765f4181:0x9a3511e865e0bf15!2m2!1d-79.4181085!2d44.6090631"
              >
                <FontAwesomeIcon icon={faDiamondTurnRight} />
                <span>Directions</span>
              </StyledHeaderLink>
            </div>
          </DirectionsContactWrap>
        </HeaderContent>
      </StyledHeader>
      <StyledMain>
        <StyledMenu isOpen={isOpen}>
          <StyledMenuList>
            <li
              onClick={() => {
                setIsOpen((prevState) => !prevState);
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contacts
            </li>
          </StyledMenuList>
        </StyledMenu>
        <SwiperCarousel />
        <LogoDiv ref={(ref) => (contactRef.current = ref)}>
          <StyledLogo>Sushi Wadasi</StyledLogo>
          <StyledText>Cafe in Orillia</StyledText>
          <StyledContactUsSection>
            <StyledText css={{ fontWeight: 800, fontSize: "28px" }}>
              CONTACT US
            </StyledText>
            <StyledLink href={`tel:${tel}`}>{tel}</StyledLink>
          </StyledContactUsSection>
        </LogoDiv>
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2275.374209472447!2d-79.41849003766579!3d44.608904978857396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a3511e865e0bf15!2sSushi%20Wadasi!5e0!3m2!1sen!2sua!4v1661420914830!5m2!1sen!2sua"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></StyledIframe>
        <Bottom>
          <BottomAdressSection>
            <Adress>
              <StyledText css={{ marginBottom: "10px" }}>Adress</StyledText>
              <Directions
                target={"_blank"}
                rel="noreferrer"
                href="https://www.google.com/maps/dir//Sushi+Wadasi,+66+Mississaga+St+E,+Orillia,+ON+L3V+1V5,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@44.6090631,-79.4181085,17z/data=!3m1!5s0x4d2aa93b77ad5cfb:0x288d555d4cfd2894!4m8!4m7!1m0!1m5!1m1!1s0x4d2aa93b765f4181:0x9a3511e865e0bf15!2m2!1d-79.4181085!2d44.6090631"
              >
                Get Directions
              </Directions>
              <StyledAdressText>
                66 Mississaga St E, <br /> Orillia, ON L3V 1V5, <br /> Canada
              </StyledAdressText>
            </Adress>

            <Adress
              css={{
                flexDirection: "row",
                width: "270px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <StyledText adress={true}>
                <b>Business hours</b>
                <br />
                Monday Closed
                <br /> Tuesday 11:30-19:00
                <br /> Wednesday 11:30-19:00
                <br /> Thursday 11:30-19:00
                <br /> Friday 11:30-19:00
                <br /> Saturday 11:30-19:00
                <br /> Sunday 16:00-19:00
              </StyledText>
            </Adress>
          </BottomAdressSection>
        </Bottom>
      </StyledMain>
    </>
  );
}

export default MainPage;

const StyledLogo = styled("span", {
  fontFamily: "'Helvetica Neue', sans-serif",
  fontSize: "32px",
  color: "#e72e4a",
  fontWeight: 800,
});

const LogoDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "54px 0 24px",
});

const StyledText = styled("span", {
  margin: "15px 0",
  fontSize: "18px",
  fontWeight: 400,
  color: "black",
  "@md": { fontSize: "24px" },
  variants: {
    adress: {
      true: {
        fontSize: "13px",
        display: "block",
        textAlign: "end",
        "@md": { fontSize: "14px" },
      },
    },
  },
});

const StyledContactUsSection = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  margin: "35px 0",
  "&::before": {
    content: "",
    display: "block",
    position: "absolute",
    backgroundColor: "black",
    top: -5,
    width: "80px",
    height: "4px",
    left: 90,
    transform: "translateX(-50%)",
  },
});

const StyledLink = styled("a", {
  margin: "0",
  fontSize: "25px",
  color: "black",
  fontWeight: 500,
  "&:hover": {
    color: "grey",
  },
});

const StyledIframe = styled("iframe", {
  width: "100%",
  height: "400px",
  border: "none",
  padding: "0px 10px",
  "@md": {
    height: "600px",
    border: "none",
    padding: "0px 50px",
  },
});

const Bottom = styled("div", {
  padding: "10px 10px",
  marginTop: "10px",
  "@md": {
    padding: "10px 50px",
    marginTop: "20px",
  },
});
const BottomAdressSection = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid black",
  padding: "20px 0",
});
const Adress = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Directions = styled("a", {
  fontSize: "12px",
  backgroundColor: "#e72e4a",
  display: "block",
  padding: "8px",
  width: "110px",
  color: "white",
  borderRadius: "4px",
  textAlign: "center",
  fontWeight: 800,
  "@md": { fontSize: "16px", padding: "10px", width: "150px" },
  "&:hover": {
    backgroundColor: "#972635",
  },
});

const StyledAdressText = styled("span", {
  margin: "10px 0",
  fontSize: "12px",
  fontWeight: 400,
  color: "black",
  "@md": { fontSize: "18px" },
});

const StyledHeader = styled("header", {
  padding: "0px 10px",
  position: "fixed",
  top: 0,
  boxShadow: "0 0 5px grey",
  width: "100%",
  height: "70px",
  zIndex: 1000,
  backgroundColor: "white",
  "@md": {
    padding: "0px 20px",
  },
});

const HeaderContent = styled("div", {
  maxWidth: 1480,
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  margin: "0 auto",
});

const StyledMain = styled("main", {
  maxWidth: 1480,
  margin: "0 auto",
});

const StyledLogoHeader = styled("a", {
  fontFamily: "'Helvetica Neue', sans-serif",
  fontSize: "24px",
  color: "#e72e4a",
  fontWeight: 800,
  "@md": {
    fontSize: "32px",
  },
  "&:hover": {
    color: "#972635",
  },
});

const StyledHeaderLink = styled("a", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > span, & > svg": {
    color: "#e72e4a",
    fontSize: "14px",
  },

  "&:hover": {
    "& > span, & > svg": {
      color: "#972635",
    },
  },
  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
    "& > span, & > svg": {
      fontSize: "18px",
    },
    "& > svg": {
      marginRight: "5px",
    },
  },
});

const BurgerLogoWrap = styled("div", {
  display: "flex",
  alignItems: "center",
  flexBasis: "60%",
});

const DirectionsContactWrap = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  boxShadow: "0 0 5px grey",
  display: "flex",
  height: "50px",
  backgroundColor: "white",
  justifyContent: "space-between",
  "& > div": {
    flexBasis: "50%",
    paddingTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  "@md": {
    position: "static",
    boxShadow: "none",
    justifyContent: "flex-end",
    "& > div": {
      flexBasis: "unset",
      paddingTop: "2px",
      display: "flex",
      justifyContent: "center",

      marginLeft: "40px",
    },
  },
});

const StyledBurgerBtn = styled("div", {
  position: "relative",
  display: "block",
  width: "25px",
  height: "25px",
  margin: "6px 10px 0px 0px",
  cursor: "pointer",
  "@md": { margin: "6px 25px 0px 0px" },
  "& >svg": {
    color: "#e72e4a",
    "&:hover": {
      color: "#972635",
    },
  },
});

const StyledMenu = styled("div", {
  position: "fixed",
  left: 0,
  top: 71,
  transform: "translateX(-150%)",
  height: "100vh",
  width: "80vw",
  maxWidth: 500,
  boxShadow: "0 0 5px grey",
  backgroundColor: "white",
  zIndex: 10,
  variants: {
    isOpen: {
      true: {
        transform: "translateX(0%)",
      },
    },
  },
});
const StyledMenuList = styled("ul", {
  listStyle: "none",
  padding: "0px  !important",
  margin: "0px  !important",
  "& > li": {
    padding: "15px 25px",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "20px",
    color: "#e72e4a",
    transition: "300 ease-in-out",
    "&:hover": {
      color: "#972635",
      backgroundColor: "#FFF8F7",
    },
  },
});

const fonts = globalCss({
  body: {
    fontFamily: "'Switzer', sans-serif",
    backgroundColor: "white",
    paddingTop: "71px",
    paddingBottom: "51px",
  },
});
