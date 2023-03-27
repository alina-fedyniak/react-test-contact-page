import { Button, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';
import {
  DEVICES,
  pickThemeColor,
  pickThemeFontSize,
  pickThemeFontStyles,
} from '@/theme';
import { IButtonProps, TButtonSize } from './Button';

const primaryButtonStyles = css`
  background-color: ${pickThemeColor('BLACK')};
  color: ${pickThemeColor('WHITE')};

  &:hover {
    background-color: ${pickThemeColor('BLACK_LIGHT')};
    border-color: ${pickThemeColor('BLACK_LIGHT')};
    color: ${pickThemeColor('BLACK')};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${pickThemeColor('BLACK_LIGHT_2')};
    border-color: ${pickThemeColor('BLACK_LIGHT_2')};
    color: ${pickThemeColor('BLACK')};
  }
  }
`;

const defaultButtonStyles = css`
  background-color: ${pickThemeColor('BLACK')};
  border-color: ${pickThemeColor('BLACK')};
  color: ${pickThemeColor('WHITE')};

  &:hover {
    background-color: ${pickThemeColor('BLACK_LIGHT')};
    border-color: ${pickThemeColor('BLACK')};
    color: ${pickThemeColor('BLACK')};
    :where(.css-dev-only-do-not-override-mxhywb).ant-btn-default:not(
        :disabled
      ):hover {
      color: white;
      border-color: white;
    }
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${pickThemeColor('BLACK')};
    border-color: ${pickThemeColor('BLACK')};
    color: ${pickThemeColor('WHITE')};
  }
`;

const linkButtonStyles = css`
  &:disabled,
  &:disabled:hover {
    color: ${pickThemeColor('BLACK')};
  }
`;

const blurredButtonStyles = css`
  border: none;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(34px);
  color: ${pickThemeColor('WHITE')};

  &:hover {
    color: ${pickThemeColor('BLACK')};
  }

  &:disabled,
  &:disabled:hover {
    color: ${pickThemeColor('BLACK')};
  }
`;

const getStylesByType = (type: IButtonProps['type']) => {
  switch (type) {
    case 'primary':
      return primaryButtonStyles;
    case 'default':
      return defaultButtonStyles;
    case 'link':
      return linkButtonStyles;
    case 'ghost':
      return blurredButtonStyles;
    default:
      return defaultButtonStyles;
  }
};

const getStylesBySize = (size: TButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        height: 2.5rem;
      `;
    case 'middle-small':
      return css`
        height: 3rem;
      `;
    case 'middle-large':
      return css`
        height: 3.125rem;
      `;
    case 'large':
      return css`
        height: 3.5rem;
      `;
    default:
      return css`
        height: 3.125rem;
      `;
  }
};

export const StyledButton = styled(Button)<
  ButtonProps & { $size: TButtonSize }
>`
  ${pickThemeFontStyles('14', '20', 'SEMI_BOLD')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  height: auto;
  padding: 0 1rem;

  & .anticon {
    ${pickThemeFontStyles('20', '20')};
    height: ${pickThemeFontSize('20')};
  }

  ${(props) => getStylesByType(props.type)}
  ${(props) => getStylesBySize(props.$size)}


  @media screen and ${DEVICES.LAPTOP_S} {
    min-width: 6.5rem;
  }
`;
