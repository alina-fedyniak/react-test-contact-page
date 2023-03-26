import React from 'react';
import { SvgWrap, StyledIcon } from './ContactsStyled';
import { EmailIcon, LocationIcon, PhoneIcon } from '@/assets/svg';

const Contacts = (): JSX.Element => {
  return (
    <SvgWrap>
      <StyledIcon>
        <PhoneIcon />
        <span>+1012 3456 789</span>
      </StyledIcon>
      <StyledIcon>
        <EmailIcon />
        <span>demo@gmail.com</span>
      </StyledIcon>
      <StyledIcon>
        <LocationIcon />
        <span>
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </span>
        <div></div>
      </StyledIcon>
    </SvgWrap>
  );
};

export default Contacts;
