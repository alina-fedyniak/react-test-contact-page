import styled from 'styled-components';
import { pickThemeColor, pickThemeFontStyles } from '@/theme';

export const SvgWrap = styled.div`
  position: relative;
  padding: 40px 40px 36px 40px;
  background: ${pickThemeColor('BLACK')};
  color: ${pickThemeColor('WHITE')};
  width: 491px;
  height: 647px;
  box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('28', '40', 'SEMI_BOLD')};
`;

export const StyledText = styled.div`
  ${pickThemeFontStyles('18', '26', 'NORMAL')};
`;

export const StyledSocials = styled.div`
  display: flex;
`;

export const StyledCircleSmall = styled.div`
  left: 283px;
  top: 438px;
  background: rgba(72, 72, 72, 0.5);
  position: absolute;
  width: 138px;
  height: 138px;
  border-radius: 50%;
  z-index: 1;
`;

export const StyledCircleLarge = styled.div`
  background: ${pickThemeColor('BLACK_LIGHT_2')};
  position: absolute;
  width: 269px;
  height: 269px;
  left: 311px;
  top: 464px;
  border-radius: 50%;
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
  margin-left: 24px;
  &:hover {
    background-color: ${pickThemeColor('WHITE')};
    path {
      fill: ${pickThemeColor('BLACK_LIGHT')};
    }
  }
`;
