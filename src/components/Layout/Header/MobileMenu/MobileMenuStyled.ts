import styled from 'styled-components';
import { DEVICES, pickThemeColor, pickThemeFontStyles } from '@/theme';

export const HeaderMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  a {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    margin-bottom: 30px;
    color: ${pickThemeColor('WHITE')};
    ${pickThemeFontStyles('16', '18', 'NORMAL')};
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    a {
      margin: 0 23.5px;
    }
  }
`;

export const StyledIconsWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIcon = styled.div`
  width: 31px;
  height: 31px;
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-right: 36px;
  svg {
    width: 16px;
    margin: 0 auto;
  }
`;

export const StyledFeatures = styled.div`
  display: flex;
  svg {
    margin-left: 5px;
  }
`;
