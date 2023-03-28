import React, { useState } from 'react';
import {
  StyledWrap,
  StyledInputsWrap,
  StyledInputFirst,
  StyledInputSecond,
  StyledBtn,
  StyledImg,
  StyledRadio,
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
            <Form.Item label={t('firstName')}>
              <Input bordered={false} />
            </Form.Item>
            <Form.Item label={t('lastName')}>
              <Input bordered={false} />
            </Form.Item>
          </StyledInputFirst>
          <StyledInputSecond>
            <Form.Item label={t('email')}>
              <Input bordered={false} />
            </Form.Item>
            <Form.Item label={t('phoneNumber')}>
              <Input bordered={false} />
            </Form.Item>
          </StyledInputSecond>
        </StyledInputsWrap>
        <Form.Item label={t('selectSubject')}>
          <Radio.Group onChange={onChange} value={value}>
            <StyledRadio>
              <Radio value={1}>{t('generalInquiry')}</Radio>
              <Radio value={2}>{t('generalInquiry')}</Radio>
              <Radio value={3}>{t('generalInquiry')}</Radio>
              <Radio value={4}>{t('generalInquiry')}</Radio>
            </StyledRadio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t('message')}>
          <TextArea
            bordered={false}
            rows={2}
            placeholder="Write your message.."
          />
        </Form.Item>
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
