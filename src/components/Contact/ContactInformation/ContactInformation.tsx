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
import { useTranslation } from 'react-i18next';

const ContactInformation = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SvgWrap>
      <div>
        <StyledTitle>{t('contactInformation')}</StyledTitle>
        <StyledText>{t('saySomething')}</StyledText>
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
