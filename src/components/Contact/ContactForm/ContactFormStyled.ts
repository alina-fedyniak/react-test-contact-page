import { pickThemeColor } from '@/theme';
import styled from 'styled-components';

export const StyledWrap = styled.div`
  margin-top: 50px;
  form input {
    border-bottom: 1px solid ${pickThemeColor('GREY_LIGHT')};
    border-radius: 0;
    :focus {
      border-bottom: 1px solid ${pickThemeColor('BLACK')};
    }
  }

  textArea {
    border-bottom: 1px solid ${pickThemeColor('GREY_LIGHT')};
    border-radius: 0;
  }
`;

export const StyledInputsWrap = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
  }
`;

export const StyledInputFirst = styled.div`
  margin-right: 39px;
`;

export const StyledInputSecond = styled.div``;

export const StyledBtn = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledImg = styled.div`
  position: absolute;
  width: 240.79px;
  height: 112.31px;
  left: 835.87px;
  top: 618.5px;
  transform: rotate(345deg);
`;
