import { DEVICES, pickThemeColor, pickThemeFontStyles } from '@/theme';
import styled from 'styled-components';

export const StyledFormEmailWrap = styled.div`
  width: 100%;
  height: 184px;
  background: ${pickThemeColor('BLACK_1')};
  border-radius: 10px;
  padding: 17px 29px 21px 14px;
  margin: 0 auto;
  .ant-input {
    background: ${pickThemeColor('BLACK_LIGHT')};
    border: none;
  }
  .ant-input::placeholder {
    color: ${pickThemeColor('DARK_GREY')};
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    padding: 14px 13px 21px 14px;
    width: 304px;
    margin: 0;
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
  margin-bottom: 24px;
  flex-direction: column;
  align-items: start;

  svg {
    font-size: 18px;
    margin-bottom: 13px;
  }

  span {
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
    max-width: 143px;

    @media screen and ${DEVICES.LAPTOP_S} {
      max-width: 288px;
    }
    }
  }
    @media screen and ${DEVICES.LAPTOP_S} {
      flex-direction: row;
      align-items: center;
      svg {
        margin-bottom: 0;
        margin-right: 28px;
      }
    }
`;

export const StyledCompanyBlock = styled.div`
  div {
    margin-bottom: 24px;
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-right: 60px;
  }
`;

export const StyledTitleCompany = styled.div`
  ${pickThemeFontStyles('18', '26', 'SEMI_BOLD')};
`;

export const StyledBlockWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${DEVICES.LAPTOP_S} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledLegalBlock = styled.div`
  div {
    margin-bottom: 24px;
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
  }
  @media screen and ${DEVICES.LAPTOP_S} {
    margin-right: 60px;
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
  @media screen and ${DEVICES.LAPTOP_S} {
    margin-right: 60px;
  }
`;

export const StyledContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledReachWrap = styled.div`
  @media screen and ${DEVICES.LAPTOP_S} {
    margin-right: 60px;
  }
`;
