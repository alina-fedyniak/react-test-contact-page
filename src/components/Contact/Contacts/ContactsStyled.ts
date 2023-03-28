import styled from 'styled-components';
import { DEVICES, pickThemeFontStyles } from '@/theme';

export const StyledWrap = styled.div`
  margin-bottom: 58px;

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-bottom: 0;
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;

  svg {
    font-size: 18px;
    margin-bottom: 13px;
  }

  span {
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
    max-width: 288px;
    text-align: center;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    justify-content: start;
    flex-direction: row;
    margin-bottom: 50px;

    svg {
      font-size: 18px;
      margin-right: 28px;
    }

    span {
      ${pickThemeFontStyles('16', '24', 'NORMAL')};
      max-width: 288px;
      text-align: left;
    }
  }
`;
