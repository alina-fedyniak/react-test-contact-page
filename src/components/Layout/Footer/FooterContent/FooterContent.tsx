import React from 'react';
import {
  StyledFormEmailWrap,
  StyledTitle,
  StyledText,
  StyledBlockWrap,
  StyledCompanyBlock,
  StyledIcon,
  StyledLegalBlock,
  StyledQuickLinksBlock,
  StyledTitleCompany,
  StyledTitleLegal,
  StyledTitleQuickLinks,
  StyledTitleReachUs,
} from './FooterContentStyled';
import { useTranslation } from 'react-i18next';
import { Input, Space } from 'antd';
import Button from '@/components/Button/Button';
import { EmailIcon, LocationIcon, PhoneIcon } from '@/assets/svg';

const FooterContent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledBlockWrap>
      <div>
        <StyledTitleReachUs>{t('reachUs')}</StyledTitleReachUs>
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
      </div>
      <StyledCompanyBlock>
        <StyledTitleCompany>{t('company')}</StyledTitleCompany>
        <div>{t('about')}</div>
        <div>{t('contact')}</div>
        <div>{t('blog')}</div>
      </StyledCompanyBlock>
      <StyledLegalBlock>
        <StyledTitleLegal>{t('legal')}</StyledTitleLegal>
        <div>{t('privacyPolicy')}</div>
        <div>{t('termsServices')}</div>
        <div>{t('termsOfUse')}</div>
        <div>{t('refundPolicy')}</div>
      </StyledLegalBlock>
      <StyledQuickLinksBlock>
        <StyledTitleQuickLinks>{t('quickLinks')}</StyledTitleQuickLinks>
        <div>{t('techlabzKeybox')}</div>
        <div>{t('downloads')}</div>
        <div>{t('Forum')}</div>
      </StyledQuickLinksBlock>
      <StyledFormEmailWrap>
        <StyledTitle>{t('joinOurNewsletter')}</StyledTitle>
        <Space.Compact style={{ width: '100%' }}>
          <Input placeholder="Your email address" />
          <Button size="small" htmlType="submit">
            {t('subscribe')}
          </Button>
        </Space.Compact>
        <StyledText>{t('willSend')}</StyledText>
      </StyledFormEmailWrap>
    </StyledBlockWrap>
  );
};

export default FooterContent;
