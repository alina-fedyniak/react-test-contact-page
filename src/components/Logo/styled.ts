import { DEVICES } from 'src/theme/theme';
import styled from 'styled-components';
//import { DEVICES } from '@theme';

export const SvgWrap = styled.div`
  cursor: pointer;
  display: flex;
  svg {
    height: 57px;
    margin: 10px 25px;
  }
  @media ${DEVICES.MOBILE_L} {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
  }
  @media ${DEVICES.MOBILE_S} {
    position: absolute;
    top: 21px;
    left: 0;
    svg {
      height: auto;
    }
  }
`;
