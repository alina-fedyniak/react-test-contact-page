import { pickThemeColor, pickThemeFontStyles } from '@/theme';
import styled from 'styled-components';

export const StyledFormEmailWrap = styled.div`
  width: 304px;
  height: 184px;
  background: ${pickThemeColor('BLACK_1')};
  border-radius: 10px;
  padding: 14px 13px 21px 14px;
  .ant-input {
    background: ${pickThemeColor('BLACK_LIGHT')};
    border: none;
  }
  .ant-input::placeholder {
    color: ${pickThemeColor('DARK_GREY')};
  }
`;

export const StyledText = styled.div`
  ${pickThemeFontStyles('12', '18', 'NORMAL')};
  color: ${pickThemeColor('WHITE')};
  opacity: 0.5;
  margin-top: 19px;
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('18', '26', 'SEMI_BOLD')};
  margin-bottom: 29px;
`;
export const StyledTitleReachUs = styled.div`
  ${pickThemeFontStyles('18', '26', 'SEMI_BOLD')};
  margin-bottom: 20px;
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  svg {
    font-size: 18px;
    margin-right: 28px;
  }

  span {
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
    max-width: 288px;
  }
`;

export const StyledCompanyBlock = styled.div`
  div {
    margin-bottom: 24px;
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
  }
`;

export const StyledTitleCompany = styled.div`
  ${pickThemeFontStyles('18', '26', 'SEMI_BOLD')};
`;

export const StyledBlockWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLegalBlock = styled.div`
  div {
    margin-bottom: 24px;
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
  }
`;

export const StyledTitleLegal = styled.div`
  ${pickThemeFontStyles('18', '26', 'SEMI_BOLD')};
`;

export const StyledTitleQuickLinks = styled.div`
  ${pickThemeFontStyles('18', '26', 'SEMI_BOLD')};
`;

export const StyledQuickLinksBlock = styled.div`
  div {
    margin-bottom: 24px;
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
  }
`;
