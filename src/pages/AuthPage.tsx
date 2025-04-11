import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  color: #1a1a1a;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.span`
  font-size: 28px;
  margin-right: 10px;
  color: #2563eb;
`;

const LogoText = styled.span`
  font-size: 22px;
  font-family: "Inter", sans-serif;
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const SignUpButtonLink = styled(Link)`
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
    transform: translateY(-2px);
  }
`;

const LogInButtonLink = styled(SignUpButtonLink)``;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const NavItems = styled.div`
  display: flex;
  gap: 30px;
`;

const NavItemLink = styled(Link)`
  cursor: pointer;
  padding: 8px 0;
  text-decoration: none;
  color: #1f2937;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #2563eb, #3b82f6);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 8px 0;
  color: #1f2937;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #2563eb, #3b82f6);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LoginCard = styled.div`
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  color: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SignupCard = styled(LoginCard)``;

const CardTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  background: linear-gradient(45deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #e5e7eb;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #374151;
  background-color: #1f2937;
  border-radius: 8px;
  color: #f3f4f6;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-top: 15px;
  font-size: 14px;
  color: #60a5fa;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #374151, transparent);
  margin: 50px 0;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ContactIcon = styled.span`
  font-size: 36px;
  margin-right: 20px;
  color: #3b82f6;
`;

const ContactTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: white;
  font-family: "Inter", sans-serif;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #374151;
  background-color: #1f2937;
  border-radius: 8px;
  min-height: 150px;
  resize: vertical;
  color: #f3f4f6;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Footer = styled.footer`
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  color: white;
  padding: 50px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #3b82f6;
`;

const FooterText = styled.p`
  margin-bottom: 25px;
  color: #e5e7eb;
  line-height: 1.6;
`;

const Newsletter = styled.div`
  margin-top: 30px;
`;

const NewsletterTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #3b82f6;
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 10px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #374151;
  background-color: #1f2937;
  border-radius: 8px;
  color: #f3f4f6;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
    transform: translateY(-2px);
  }
`;

const FooterLink = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  color: #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6;
    transform: translateX(5px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6;
    transform: scale(1.2);
  }
`;

// AuthPage component
const AuthPage = () => {
  return (
    <div>
      <Header>
        <LogoWrapper href="/">
          <LogoIcon>🛡️</LogoIcon>
          <LogoText>Berimoblo</LogoText>
        </LogoWrapper>
        <AuthButtons>
          <SignUpButtonLink to="/auth">Sign up</SignUpButtonLink>
          <LogInButtonLink to="/auth">Log in</LogInButtonLink>
        </AuthButtons>
      </Header>

      <NavBar>
        <NavItems>
          <NavItemLink to="/">Home</NavItemLink>
          <NavItemLink to="/services">Services</NavItemLink>
          <NavItem>Products</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
      </NavBar>

      {/* Login and Signup Forms */}
      <AuthContainer>
        <LoginCard>
          <CardTitle>Welcome Back!</CardTitle>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" placeholder="Enter your email address" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" placeholder="Enter your Password" />
          </FormGroup>

          <SubmitButton>Log in</SubmitButton>

          <ForgotPassword>Forgot your password?</ForgotPassword>
        </LoginCard>

        <SignupCard>
          <CardTitle>Sign up</CardTitle>

          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" placeholder="Enter your Name" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" placeholder="Enter your Email" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" placeholder="Enter your Password" />
          </FormGroup>

          <SubmitButton>sign up</SubmitButton>
        </SignupCard>
      </AuthContainer>

      <Divider />

      {/* Contact Form */}
      <ContactContainer>
        <ContactHeader>
          <ContactIcon>👤</ContactIcon>
          <ContactTitle>Contact Us</ContactTitle>
        </ContactHeader>

        <ContactForm>
          <FormInput type="text" placeholder="Name" />
          <ContactTextArea placeholder="Subject" />
          <SubmitButton>Submit</SubmitButton>
        </ContactForm>
      </ContactContainer>

      {/* Footer */}
      <Footer>
        <FooterSection>
          <FooterTitle>Security Services</FooterTitle>
          <FooterText>
            Your number one site for all your security needs.
          </FooterText>

          <Newsletter>
            <NewsletterTitle>Join our Newsletter</NewsletterTitle>
            <NewsletterForm>
              <NewsletterInput placeholder="Enter your email address" />
              <NewsletterButton>→</NewsletterButton>
            </NewsletterForm>
          </Newsletter>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Buy Now</FooterTitle>
          <FooterLink>Create an Account</FooterLink>
          <FooterLink>Secure Payment</FooterLink>
          <FooterLink>Inbox</FooterLink>

          <FooterTitle style={{ marginTop: "20px" }}>
            Sell Your Security
          </FooterTitle>
          <FooterLink>Create an Account</FooterLink>
          <FooterLink>List your Security</FooterLink>
          <FooterLink>Boost your Sales</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink>FAQs</FooterLink>
          <FooterLink>Customer Support</FooterLink>
          <FooterLink>How to Guides</FooterLink>
          <FooterLink>Contact Us</FooterLink>

          <FooterTitle style={{ marginTop: "20px" }}>Follow Us</FooterTitle>
          <SocialIcons>
            <SocialIcon>📷</SocialIcon>
            <SocialIcon>📘</SocialIcon>
            <SocialIcon>🐦</SocialIcon>
          </SocialIcons>

          <FooterLink>Terms of Service</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterSection>
      </Footer>
    </div>
  );
};

export default AuthPage;
