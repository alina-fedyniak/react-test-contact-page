import { DEVICES, pickThemeColor } from '@/theme';
import styled from 'styled-components';

export const StyledWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0 21px;
  position: relative;

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
    padding: 0;

    @media screen and ${DEVICES.LAPTOP_S} {
      margin-bottom: 45px;
    }
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    padding: 60px 50px 0 50px;
    margin-top: 0;
  }
`;

export const StyledInputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledInputFirst = styled.div`
  margin-right: 39px;
`;

export const StyledInputSecond = styled.div``;

export const StyledBtn = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 100%;
    margin-bottom: 64px;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    justify-content: end;
    button {
      width: 214px;
    }
  }
`;

export const StyledImg = styled.div`
  position: absolute;
  width: 104.4px;
  height: 52.15px;
  left: 126.43px;
  top: 595.81px;
  transform: rotate(355deg);

  @media screen and ${DEVICES.LAPTOP_S} {
    width: 240.79px;
    height: 112.31px;
    left: 309.87px;
    top: 491.5px;
    transform: rotate(358deg);
  }
`;

export const StyledRadio = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 14px;

   .ant-radio-checked .ant-radio-inner {
    border-color: black;
    background-color: black;
  }
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    display: flex;
    gap: 0;
  }
`;
