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

const RequestQuoteButton = styled.button`
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
    transform: translateY(-2px);
  }
`;

const RequestQuoteText = styled.span``;

const ShieldIcon = styled.span``;

const HeroSection = styled.section`
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    );
  }
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  margin-bottom: 30px;
  z-index: 1;
  font-weight: 800;
  font-family: "Inter", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 16px 20px;
  border: none;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  padding: 16px 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
  }
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
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1f2937;
`;

const ProductPrice = styled.div`
  color: #2563eb;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ProductReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #6b7280;
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

// HomePage component
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
          <NavItemLink to="/services">Services</NavItemLink>
          <NavItem>Products</NavItem>
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

export default HomePage;
