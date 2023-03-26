import React from 'react';
import {
  SvgWrap,
  StyledTitle,
  StyledText,
  StyledTitleWrap,
} from './ContactContainerStyled';
import ContactInformation from '@/components/Contact/ContactInformation/ContactInformation';

const ContactContainer = (): JSX.Element => {
  return (
    <>
      <StyledTitleWrap>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledText>
          Any question or remarks? Just write us a message!
        </StyledText>
      </StyledTitleWrap>
      <SvgWrap>
        <ContactInformation />
      </SvgWrap>
    </>
  );
};

export default ContactContainer;
