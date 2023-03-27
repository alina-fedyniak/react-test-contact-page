import React from 'react';
import { StyledWrap, StyledIcon } from './ContactsStyled';
import { EmailIcon, LocationIcon, PhoneIcon } from '@/assets/svg';
import { useTranslation } from 'react-i18next';

const Contacts = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledWrap>
      <StyledIcon>
        <PhoneIcon />
        <span>{t('number')}</span>
      </StyledIcon>
      <StyledIcon>
        <EmailIcon />
        <span>{t('email')}</span>
      </StyledIcon>
      <StyledIcon>
        <LocationIcon />
        <span>{t('132DartmouthStreet')}</span>
      </StyledIcon>
    </StyledWrap>
  );
};

export default Contacts;
