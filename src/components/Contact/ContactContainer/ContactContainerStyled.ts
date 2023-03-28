import { DEVICES, pickThemeColor, pickThemeFontStyles } from '@/theme';
import styled from 'styled-components';

export const StyledWrap = styled.div`
  max-width: 1196px;
  box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 5px 5px 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${DEVICES.LAPTOP_S} {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0 10px 10px;
    align-items: inherit;
    height: 667px;
  }
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('24', '30', 'BOLD')};
  margin-bottom: 10px;

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('40', '46', 'BOLD')};
  }
`;

export const StyledText = styled.div`
  ${pickThemeFontStyles('14', '20', 'NORMAL')};
  color: ${pickThemeColor('GREY_LIGHT')};
  width: 184px;
  margin: 0 auto;

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('18', '28')};
    width: 100%;
  }
`;

export const StyledTitleWrap = styled.div`
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-bottom: 50px;
  }
`;
