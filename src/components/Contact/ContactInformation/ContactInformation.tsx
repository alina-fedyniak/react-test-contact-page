import { socialsLinks } from '@/helpers/socialLinkConfig';
import React from 'react';
import {
  SvgWrap,
  StyledTitle,
  StyledText,
  StyledSocials,
  StyledSocialLink,
  StyledCircleSmall,
  StyledCircleLarge,
} from './ContactInformationStyled';
import Contacts from '@/components/Contact/Contacts/Contacts';

const ContactInformation = (): JSX.Element => {
  return (
    <SvgWrap>
      <div>
        <StyledTitle>Contact Information</StyledTitle>
        <StyledText>Say something to start a live chat!</StyledText>
      </div>
      <Contacts />
      <StyledSocials>
        {socialsLinks.map(({ logo, link }) => (
          <StyledSocialLink
            target="_blank"
            href={link}
            key={link}
            rel="nofollow"
          >
            {logo}
          </StyledSocialLink>
        ))}
      </StyledSocials>
      <StyledCircleSmall />
      <StyledCircleLarge />
    </SvgWrap>
  );
};

export default ContactInformation;
