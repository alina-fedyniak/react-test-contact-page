import styled from 'styled-components';
import { pickThemeFontStyles } from '@/theme';

export const SvgWrap = styled.div``;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  svg {
    font-size: 18px;
    margin-right: 28px;
  }
  span {
    ${pickThemeFontStyles('16', '24', 'NORMAL')};
  }
`;
