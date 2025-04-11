import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// AuthPage component for login and signup
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
          <NavItem>Products</NavItem>
          <NavItem>Services</NavItem>
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

// HomePage component that contains our security system website
const HomePage = () => {
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
          <NavItem>Products</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
        <RequestQuoteButton>
          <RequestQuoteText>Request a Quote</RequestQuoteText>
          <ShieldIcon>🛡️</ShieldIcon>
        </RequestQuoteButton>
      </NavBar>

      {/* Hero section with search */}
      <HeroSection>
        <HeroTitle>Secure Your Premises with Our Solutions.</HeroTitle>
        <SearchBar>
          <SearchInput placeholder="What are you looking for?" />
          <SearchButton>→</SearchButton>
        </SearchBar>
      </HeroSection>

      {/* Most Popular Products section */}
      <ProductsSection>
        <SectionTitle>Most Popular Products</SectionTitle>
        <SliderControls>
          <SliderButton>&#x3C;</SliderButton>
          <SliderButton>&#x3E;</SliderButton>
        </SliderControls>
        <ProductGrid>
          <ProductCard>
            <ProductImage src="/images/camera1.jpg" alt="Analog CCTV Camera" />
            <ProductName>Analog CCTV Camera HD 1080P</ProductName>
            <ProductPrice>$50</ProductPrice>
            <ProductReviews>
              12 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </ProductCard>

          <ProductCard>
            <ProductImage src="/images/camera2.jpg" alt="Night Vision Camera" />
            <ProductName>Night Vision Camera</ProductName>
            <ProductPrice>$200</ProductPrice>
            <ProductReviews>
              5 <LikeIcon>❤️</LikeIcon>
            </ProductReviews>
          </ProductCard>

          <ProductCard>
            <ProductImage src="/images/camera3.jpg" alt="CCTV Camera" />
            <ProductName>CCTV Camera 720p</ProductName>
            <ProductPrice>$150</ProductPrice>
            <ProductReviews>
              29 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="/images/camera4.jpg"
              alt="Biometric Access Control"
            />
            <ProductName>Biometric Access Control</ProductName>
            <ProductPrice>$500</ProductPrice>
            <ProductReviews>
              3 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </ProductCard>

          <ProductCard>
            <ProductImage src="/images/camera5.jpg" alt="Alarm + Camera Pack" />
            <ProductName>Alarm + Camera Pack</ProductName>
            <ProductPrice>$299</ProductPrice>
            <ProductReviews>
              8 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="/images/cm073_1.png"
              alt="Premium Surveillance System"
            />
            <ProductName>Premium Surveillance System</ProductName>
            <ProductPrice>$699</ProductPrice>
            <ProductReviews>
              42 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </ProductCard>
        </ProductGrid>
      </ProductsSection>

      {/* Products On Sale section */}
      <SaleSection>
        <SectionTitle>Products On Sale</SectionTitle>
        <SliderControls>
          <SliderButton>&#x3C;</SliderButton>
          <SliderButton>&#x3E;</SliderButton>
        </SliderControls>
        <ProductGrid>
          <SaleProductCard>
            <SaleTag>20%</SaleTag>
            <ProductImage src="/images/product1.jpg" alt="Security System" />
            <ProductName>Security System</ProductName>
            <OldPrice>$111</OldPrice>
            <ProductPrice>$79</ProductPrice>
            <ProductReviews>
              100 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>

          <SaleProductCard>
            <SaleTag>30%</SaleTag>
            <ProductImage src="/images/product2.jpg" alt="Security Handbook" />
            <ProductName>Security Handbook</ProductName>
            <OldPrice>$140</OldPrice>
            <ProductPrice>$99</ProductPrice>
            <ProductReviews>
              500 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>

          <SaleProductCard>
            <SaleTag>25%</SaleTag>
            <ProductImage src="/images/product3.png" alt="Security Shirt" />
            <ProductName>Security Shirt</ProductName>
            <OldPrice>$200</OldPrice>
            <ProductPrice>$159</ProductPrice>
            <ProductReviews>
              200 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>

          <SaleProductCard>
            <SaleTag>40%</SaleTag>
            <ProductImage src="/images/product4.png" alt="Security Shoes" />
            <ProductName>Security Shoes</ProductName>
            <OldPrice>$230</OldPrice>
            <ProductPrice>$140</ProductPrice>
            <ProductReviews>
              50 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>

          <SaleProductCard>
            <SaleTag>30%</SaleTag>
            <ProductImage src="/images/product5.png" alt="Security Pants" />
            <ProductName>Security Pants</ProductName>
            <OldPrice>$180</OldPrice>
            <ProductPrice>$139</ProductPrice>
            <ProductReviews>
              150 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>

          <SaleProductCard>
            <SaleTag>45%</SaleTag>
            <ProductImage src="/images/product6.png" alt="Security Gloves" />
            <ProductName>Security Gloves</ProductName>
            <OldPrice>$90</OldPrice>
            <ProductPrice>$49</ProductPrice>
            <ProductReviews>
              85 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>

          <SaleProductCard>
            <SaleTag>35%</SaleTag>
            <ProductImage src="/images/product7.png" alt="Security Hat" />
            <ProductName>Security Hat</ProductName>
            <OldPrice>$120</OldPrice>
            <ProductPrice>$78</ProductPrice>
            <ProductReviews>
              110 <ReviewIcon>⭐</ReviewIcon>
            </ProductReviews>
          </SaleProductCard>
        </ProductGrid>
      </SaleSection>

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

// Styled components for the AuthPage
const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const LogoIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const LogoText = styled.span`
  font-size: 20px;
`;

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LoginCard = styled.div`
  background-color: #000;
  color: white;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const SignupCard = styled.div`
  background-color: #000;
  color: white;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const CardTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: none;
  background-color: #eee;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  text-transform: capitalize;
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 40px 0;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ccc;
  border-radius: 8px;
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactIcon = styled.span`
  font-size: 30px;
  margin-right: 15px;
`;

const ContactTitle = styled.h2`
  margin: 0;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: none;
  background-color: #eee;
  border-radius: 4px;
  min-height: 120px;
  resize: vertical;
`;

// Existing styled components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const SignUpButtonLink = styled(Link)`
  background-color: #000;
  color: #fff;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const LogInButtonLink = styled(Link)`
  background-color: #000;
  color: #fff;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItemLink = styled(Link)`
  cursor: pointer;
  padding: 5px 0;
  text-decoration: none;
  color: inherit;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 5px 0;
`;

const RequestQuoteButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RequestQuoteText = styled.span``;

const ShieldIcon = styled.span``;

const HeroSection = styled.section`
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  z-index: 1;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  z-index: 1;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: none;
`;

const SearchButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const ProductsSection = styled.section`
  padding: 30px 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 20px;
`;

const SliderButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  color: green;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
`;

const ReviewIcon = styled.span``;
const LikeIcon = styled.span``;

const SaleSection = styled.section`
  padding: 30px 20px;
  background-color: #f9f9f9;
`;

const SaleProductCard = styled(ProductCard)`
  position: relative;
`;

const SaleTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: blue;
  color: white;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  color: #999;
  margin-bottom: 5px;
`;

const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  margin-bottom: 15px;
`;

const FooterText = styled.p`
  margin-bottom: 20px;
`;

const Newsletter = styled.div`
  margin-top: 20px;
`;

const NewsletterTitle = styled.h4`
  margin-bottom: 10px;
`;

const NewsletterForm = styled.div`
  display: flex;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
`;

const NewsletterButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const FooterLink = styled.div`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const SocialIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
