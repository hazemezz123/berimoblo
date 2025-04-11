import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components for common elements
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

// Service page styled components
const ServicesHero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("/images/services-hero.jpg");
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ServicesHeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 1;
  padding: 0 20px;
`;

const ServicesTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ServicesSubtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesOverview = styled.section`
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const ServicesCategoryTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1f2937;
  font-family: "Inter", sans-serif;
`;

const ServicesCategoryDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #4b5563;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const ServiceCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCategory = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceCategoryIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ServiceCategoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1f2937;
`;

const ServiceCategoryDescription = styled.p`
  color: #4b5563;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ServiceCategoryLink = styled.a`
  color: #2563eb;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #1d4ed8;
    transform: translateX(5px);
  }
`;

const ServicesDetailedSection = styled.section`
  padding: 60px 40px;
  background-color: #f9fafb;
  text-align: center;
`;

const ServicesList = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

interface ServiceItemProps {
  reversed?: boolean;
}

const ServiceItem = styled.div<ServiceItemProps>`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  gap: 40px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceImageContainer = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1f2937;
  font-family: "Inter", sans-serif;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

const ServiceFeature = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  color: #4b5563;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: bold;
  }
`;

const RequestServiceButton = styled.button`
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
    transform: translateY(-2px);
  }
`;

const FAQSection = styled.section`
  padding: 60px 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const FAQContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px 30px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FAQQuestion = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1f2937;
  position: relative;
  font-family: "Inter", sans-serif;
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
`;

const CTASection = styled.section`
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  padding: 80px 40px;
  text-align: center;
  margin-top: 60px;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
`;

const CTADescription = styled.p`
  font-size: 18px;
  color: #e5e7eb;
  margin-bottom: 30px;
`;

const CTAButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAPrimaryButton = styled.button`
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 30px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #1d4ed8, #2563eb);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CTASecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  padding: 16px 30px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

// ServicesPage component
const ServicesPage = () => {
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

      {/* Services Hero Section */}
      <ServicesHero
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_640.jpg')",
        }}
      >
        <ServicesHeroContent>
          <ServicesTitle>Our Security Services</ServicesTitle>
          <ServicesSubtitle>
            Comprehensive security solutions tailored to your needs
          </ServicesSubtitle>
        </ServicesHeroContent>
      </ServicesHero>

      {/* Services Overview */}
      <ServicesOverview>
        <ServicesCategoryTitle>What We Offer</ServicesCategoryTitle>
        <ServicesCategoryDescription>
          We provide end-to-end security services for homes, businesses, and
          institutions. Our team of certified security professionals will work
          with you to design, implement, and maintain security systems that
          provide peace of mind.
        </ServicesCategoryDescription>

        {/* Service Categories Grid */}
        <ServiceCategoriesGrid>
          <ServiceCategory>
            <ServiceCategoryIcon>🏠</ServiceCategoryIcon>
            <ServiceCategoryTitle>Residential Security</ServiceCategoryTitle>
            <ServiceCategoryDescription>
              Comprehensive security solutions for homes and residential
              properties.
            </ServiceCategoryDescription>
            <ServiceCategoryLink>Learn More →</ServiceCategoryLink>
          </ServiceCategory>

          <ServiceCategory>
            <ServiceCategoryIcon>🏢</ServiceCategoryIcon>
            <ServiceCategoryTitle>Commercial Security</ServiceCategoryTitle>
            <ServiceCategoryDescription>
              Advanced security systems for businesses, offices, and retail
              stores.
            </ServiceCategoryDescription>
            <ServiceCategoryLink>Learn More →</ServiceCategoryLink>
          </ServiceCategory>

          <ServiceCategory>
            <ServiceCategoryIcon>🏭</ServiceCategoryIcon>
            <ServiceCategoryTitle>Industrial Security</ServiceCategoryTitle>
            <ServiceCategoryDescription>
              Heavy-duty security solutions for warehouses, factories, and
              industrial sites.
            </ServiceCategoryDescription>
            <ServiceCategoryLink>Learn More →</ServiceCategoryLink>
          </ServiceCategory>
        </ServiceCategoriesGrid>
      </ServicesOverview>

      {/* Detailed Services Section */}
      <ServicesDetailedSection>
        <ServicesCategoryTitle>Our Services</ServicesCategoryTitle>

        {/* Service Items */}
        <ServicesList>
          <ServiceItem>
            <ServiceImageContainer>
              <ServiceImage
                src="https://cdn.pixabay.com/photo/2021/08/20/15/42/computer-6560745_640.jpg"
                alt="Surveillance Systems"
              />
            </ServiceImageContainer>
            <ServiceContent>
              <ServiceTitle>Surveillance Systems</ServiceTitle>
              <ServiceDescription>
                Our surveillance systems use advanced cameras and recording
                equipment to monitor your property 24/7. Features include remote
                viewing, motion detection, night vision, and cloud storage
                options.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>HD and 4K Camera Options</ServiceFeature>
                <ServiceFeature>Indoor and Outdoor Solutions</ServiceFeature>
                <ServiceFeature>
                  Remote Monitoring via Mobile App
                </ServiceFeature>
                <ServiceFeature>Smart Motion Detection</ServiceFeature>
              </ServiceFeatures>
              <RequestServiceButton>Request Service</RequestServiceButton>
            </ServiceContent>
          </ServiceItem>

          <ServiceItem reversed>
            <ServiceImageContainer>
              <ServiceImage
                src="https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701509_640.jpg"
                alt="Access Control"
              />
            </ServiceImageContainer>
            <ServiceContent>
              <ServiceTitle>Access Control Systems</ServiceTitle>
              <ServiceDescription>
                Control who enters your premises with our advanced access
                control systems. Solutions include keycards, biometric
                authentication, PIN codes, and mobile-based access.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Keyless Entry Systems</ServiceFeature>
                <ServiceFeature>Biometric Authentication</ServiceFeature>
                <ServiceFeature>Time-based Access Restrictions</ServiceFeature>
                <ServiceFeature>Access Logs and Reporting</ServiceFeature>
              </ServiceFeatures>
              <RequestServiceButton>Request Service</RequestServiceButton>
            </ServiceContent>
          </ServiceItem>

          <ServiceItem>
            <ServiceImageContainer>
              <ServiceImage
                src="https://cdn.pixabay.com/photo/2016/01/17/02/07/cctv-1144366_640.jpg"
                alt="Alarm Systems"
              />
            </ServiceImageContainer>
            <ServiceContent>
              <ServiceTitle>Alarm Systems</ServiceTitle>
              <ServiceDescription>
                Our alarm systems provide immediate notification of unauthorized
                entry or security breaches. We offer both monitored and
                unmonitored solutions with various sensor types to detect
                intrusion, fire, and environmental threats.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>24/7 Monitoring Options</ServiceFeature>
                <ServiceFeature>Smart Home Integration</ServiceFeature>
                <ServiceFeature>Mobile Alerts and Notifications</ServiceFeature>
                <ServiceFeature>Battery Backup Systems</ServiceFeature>
              </ServiceFeatures>
              <RequestServiceButton>Request Service</RequestServiceButton>
            </ServiceContent>
          </ServiceItem>

          <ServiceItem reversed>
            <ServiceImageContainer>
              <ServiceImage
                src="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_640.jpg"
                alt="Security Consultation"
              />
            </ServiceImageContainer>
            <ServiceContent>
              <ServiceTitle>Security Consultation</ServiceTitle>
              <ServiceDescription>
                Our security experts will assess your property, identify
                vulnerabilities, and recommend comprehensive security solutions
                tailored to your specific needs and budget.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>On-site Security Assessment</ServiceFeature>
                <ServiceFeature>Risk Analysis and Mitigation</ServiceFeature>
                <ServiceFeature>Custom Security Planning</ServiceFeature>
                <ServiceFeature>Budget-friendly Recommendations</ServiceFeature>
              </ServiceFeatures>
              <RequestServiceButton>Request Service</RequestServiceButton>
            </ServiceContent>
          </ServiceItem>
        </ServicesList>
      </ServicesDetailedSection>

      {/* FAQ Section */}
      <FAQSection>
        <ServicesCategoryTitle>
          Frequently Asked Questions
        </ServicesCategoryTitle>
        <FAQContainer>
          <FAQItem>
            <FAQQuestion>
              How quickly can you install a security system?
            </FAQQuestion>
            <FAQAnswer>
              For standard residential installations, we can typically complete
              the process within 2-3 business days. Commercial and more complex
              systems may take 5-7 business days depending on the scope of work.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>
              Do you offer maintenance services for existing systems?
            </FAQQuestion>
            <FAQAnswer>
              Yes, we offer maintenance services for both systems we've
              installed and those installed by other providers. Our maintenance
              plans include regular inspections, software updates, and priority
              support.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>
              Are your systems compatible with smart home devices?
            </FAQQuestion>
            <FAQAnswer>
              Most of our security systems can be integrated with popular smart
              home platforms including Google Home, Amazon Alexa, and Apple
              HomeKit. We can discuss specific compatibility requirements during
              consultation.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>What happens if there's a power outage?</FAQQuestion>
            <FAQAnswer>
              Our security systems come with battery backups that keep them
              operational during power outages. Depending on the system, backup
              power can last between 8-24 hours, ensuring continuous protection.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </FAQSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Secure Your Property?</CTATitle>
          <CTADescription>
            Contact our security experts today for a free consultation and
            quote.
          </CTADescription>
          <CTAButtonsContainer>
            <CTAPrimaryButton>Get a Free Quote</CTAPrimaryButton>
            <CTASecondaryButton>Contact Sales</CTASecondaryButton>
          </CTAButtonsContainer>
        </CTAContent>
      </CTASection>

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

export default ServicesPage;
