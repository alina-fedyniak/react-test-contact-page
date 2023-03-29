import React, { useState } from 'react';
import {
  StyledWrap,
  StyledInputsWrap,
  StyledInputFirst,
  StyledInputSecond,
  StyledBtn,
  StyledImg,
  StyledRadio,
  StyledFormItem,
  StyledFormRadio,
} from './ContactFormStyled';
import Button from '@/components/Button/Button';
import { Form, Input, Radio, RadioChangeEvent, Image } from 'antd';
import EmailImg from '@/assets/img/letterSend.png';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;

const ContactForm = (): JSX.Element => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <StyledWrap>
      <Form form={form} layout="vertical">
        <StyledInputsWrap>
          <StyledInputFirst>
            <StyledFormItem label={t('firstName')}>
              <Input bordered={false} />
            </StyledFormItem>
            <StyledFormItem label={t('lastName')}>
              <Input bordered={false} />
            </StyledFormItem>
          </StyledInputFirst>
          <StyledInputSecond>
            <StyledFormItem label={t('email')}>
              <Input bordered={false} />
            </StyledFormItem>
            <StyledFormItem label={t('phoneNumber')}>
              <Input bordered={false} />
            </StyledFormItem>
          </StyledInputSecond>
        </StyledInputsWrap>
        <StyledFormRadio label={t('selectSubject')}>
          <Radio.Group onChange={onChange} value={value}>
            <StyledRadio>
              <Radio value={1}>{t('generalInquiry')}</Radio>
              <Radio value={2}>{t('generalInquiry')}</Radio>
              <Radio value={3}>{t('generalInquiry')}</Radio>
              <Radio value={4}>{t('generalInquiry')}</Radio>
            </StyledRadio>
          </Radio.Group>
        </StyledFormRadio>
        <StyledFormItem label={t('message')}>
          <TextArea
            bordered={false}
            rows={1}
            placeholder="Write your message.."
          />
        </StyledFormItem>
        <StyledBtn>
          <Button htmlType="submit">Send Message</Button>
        </StyledBtn>
        <StyledImg>
          <Image src={EmailImg} preview={false} />
        </StyledImg>
      </Form>
    </StyledWrap>
  );
};

export default ContactForm;
