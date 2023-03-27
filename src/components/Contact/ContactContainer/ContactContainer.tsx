import React from 'react';
import {
  StyledWrap,
  StyledTitle,
  StyledText,
  StyledTitleWrap,
} from './ContactContainerStyled';
import ContactInformation from '@/components/Contact/ContactInformation/ContactInformation';
import ContactForm from '@/components/Contact/ContactForm/ContactForm';
import { useTranslation } from 'react-i18next';

const ContactContainer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <StyledTitleWrap>
        <StyledTitle>{t('contactUs')}</StyledTitle>
        <StyledText>{t('anyQuestion')}</StyledText>
      </StyledTitleWrap>
      <StyledWrap>
        <ContactInformation />
        <ContactForm />
      </StyledWrap>
    </>
  );
};

export default ContactContainer;
