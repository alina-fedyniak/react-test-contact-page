import styled from 'styled-components';
import { pickThemeColor, pickThemeFontStyles } from '@/theme';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0 73.46px 0;
`;

export const StyledIconsWrap = styled.div`
  display: flex;
`;

export const StyledBlockMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuStyled = styled.div`
  display: flex;
  margin-right: 60px;
  a {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    margin: 0 23.5px;
    color: ${pickThemeColor('BLACK')};
    ${pickThemeFontStyles('16', '18', 'NORMAL')};
  }
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
