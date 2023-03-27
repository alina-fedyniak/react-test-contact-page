import styled from 'styled-components';
import { pickThemeColor } from '@/theme';

export const FooterWrap = styled.div`
  background: ${pickThemeColor('BLACK')};
  color: ${pickThemeColor('WHITE')};
  height: 479px;
  padding: 20px 80px 0 100px;
`;

export const StyledLogo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${pickThemeColor('WHITE')};
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  svg {
    width: 181px;
    margin: 80px 0 45px 0;
  }
`;
