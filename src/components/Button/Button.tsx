import React, { ForwardedRef, forwardRef } from 'react';
import { ButtonProps } from 'antd';
import { StyledButton } from './ButtonStyles';

export type TButtonSize = 'small' | 'middle-small' | 'middle-large' | 'large';

export interface IButtonProps extends Omit<ButtonProps, 'type' | 'size'> {
  type?: ButtonProps['type'] | 'blurred';
  size?: TButtonSize;
}

const Button = (
  {
    children,
    type,
    size = 'middle-large',
    loading,
    disabled,
    ...props
  }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): JSX.Element => (
  <StyledButton
    ref={ref}
    $size={size}
    {...props}
    type={type === 'blurred' ? 'ghost' : type}
    loading={loading}
    disabled={disabled || !!loading}
  >
    {children}
  </StyledButton>
);

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
