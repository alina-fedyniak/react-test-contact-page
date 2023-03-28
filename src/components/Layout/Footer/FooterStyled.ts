import styled from 'styled-components';
import { DEVICES, pickThemeColor } from '@/theme';

export const FooterWrap = styled.div`
  background: ${pickThemeColor('BLACK')};
  color: ${pickThemeColor('WHITE')};
  min-height: 479px;
  padding: 19px 20px 35px 20px;
  margin-top: 50px;

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-top: 0;
    padding: 20px 80px 42px 100px;
  }
`;

export const StyledLogo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${pickThemeColor('WHITE')};
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  svg {
    width: 181px;
    margin: 19px 0 20px 0;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    svg {
      margin: 80px 0 45px 0;
    }
  }
`;
