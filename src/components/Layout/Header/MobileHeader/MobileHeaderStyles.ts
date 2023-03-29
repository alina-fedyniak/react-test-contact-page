import styled from 'styled-components';
import { DEVICES, pickThemeColor } from '@/theme';

export const StyledWrap = styled.div`
  display: block;

  .ant-drawer-header-title {
    flex-direction: row-reverse;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    display: none;
  }
`;


export const StyledCloseBtn = styled.div`
  svg {
    position: absolute;
    right: 25px;
    top: 25px;
  }
 
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 81px;
  line-height: 3.25rem;
  background: ${pickThemeColor('WHITE')};
  padding: 0 1.5rem;
  width: 100%;
  z-index: 7;
  box-shadow: 0 1px 4px rgba(165, 164, 192, 0.16);
  margin-bottom: 14px;
`;

export const StyledLogoWrap = styled.a`
  flex: 1;
  cursor: pointer;
  position: relative;
  width: 5.875rem;

  svg {
    margin: 0;
  }
`;
