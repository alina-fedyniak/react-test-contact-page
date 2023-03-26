import styled from 'styled-components';
import { DEVICES } from '@/theme';

export const SvgWrap = styled.div`
  cursor: pointer;
  display: flex;
  svg {
    height: 57px;
    margin: 10px 25px;
  }
  @media ${DEVICES.MOBILE_L} {
    display: flex;
    align-items: center;
  }
  @media ${DEVICES.MOBILE_S} {
    svg {
      height: auto;
    }
  }
`;
