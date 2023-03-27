import { pickThemeColor, pickThemeFontStyles } from '@/theme';
import styled from 'styled-components';

export const StyledWrap = styled.div`
  width: 1196px;
  height: 667px;
  box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 10px 50px 10px 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('40', '46', 'BOLD')};
  margin-bottom: 10px;
`;

export const StyledText = styled.div`
  ${pickThemeFontStyles('18', '28', 'NORMAL')};
  color: ${pickThemeColor('GREY_LIGHT')};
`;

export const StyledTitleWrap = styled.div`
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
`;
