import styled from 'styled-components';
import { DEVICES, pickThemeColor, pickThemeFontStyles } from '@/theme';

export const SvgWrap = styled.div`
  position: relative;
  padding: 15px 51px 25px 51px;
  background: ${pickThemeColor('BLACK')};
  color: ${pickThemeColor('WHITE')};
  max-width: 491px;
  width: 100%;
  max-height: 647px;
  box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  overflow: hidden;
  align-items: center;

  div {
    text-align: center;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    justify-content: space-between;
    align-items: baseline;
    padding: 40px 40px 36px 40px;
  }
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('28', '40', 'SEMI_BOLD')};
`;

export const StyledText = styled.div`
  ${pickThemeFontStyles('18', '26', 'NORMAL')};
  margin-bottom: 12px;

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-bottom: 0;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
`;

export const StyledCircleSmall = styled.div`
  left: 206px;
  top: 418px;
  width: 54px;
  height: 54px;
  background: rgba(72, 72, 72, 0.5);
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  @media screen and ${DEVICES.MOBILE} {
    left: 245px;
    top: 407px;
  }

  @media screen and ${DEVICES.MOBILE_L} {
    left: 291px;
    top: 324px;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    left: 283px;
    top: 438px;
    width: 138px;
    height: 138px;
  }
`;

export const StyledCircleLarge = styled.div`
  background: ${pickThemeColor('BLACK_LIGHT_2')};
  position: absolute;
  width: 192px;
  height: 192px;
  left: 221px;
  top: 416px;
  border-radius: 50%;

  @media screen and ${DEVICES.MOBILE} {
    left: 258px;
    top: 400px;
  }

  @media screen and ${DEVICES.MOBILE_L} {
    left: 295px;
    top: 333px;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    left: 311px;
    top: 464px;
    width: 269px;
    height: 269px;
  }
`;

export const StyledSocialLink = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: ${pickThemeColor('WHITE')};
  background: ${pickThemeColor('BLACK_LIGHT')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  margin: 0 12px;
  z-index: 1;
  &:hover {
    background-color: ${pickThemeColor('WHITE')};
    path {
      fill: ${pickThemeColor('BLACK_LIGHT')};
    }
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-left: 24px;
  }
`;
