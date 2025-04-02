import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <ContactForm>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Your name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Your email" />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea placeholder="Your message" rows="6" />
        </FormGroup>
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
    </Container>
  );
};


const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-bottom: 60px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #111111;
  padding: 40px;
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 6px;
  color: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #4461F2;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 6px;
  color: #ffffff;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: #4461F2;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background: #4461F2;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background: #3451E2;
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export default Contact;