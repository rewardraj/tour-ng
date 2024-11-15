import Grid from "@app/components/layouts/Grid/Grid";
import styles from "./Footer.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import Container from "@app/components/layouts/Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topSection}>
          <h2 className={styles.mainTitle}>Tour Nigeria</h2>
          <p className={styles.tagline}>
            Discover the Beauty of Africa's Giant
          </p>
        </div>

        <Grid
          desktopColumns={4}
          tabletColumns={2}
          mobileColumns={1}
          gridGap="4rem"
        >
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Company</h4>
            <nav className={styles.links}>
              <span>About Us</span>
              <span>Our Story</span>
              <span>Careers</span>
              <span>Press Room</span>
            </nav>
          </div>

          {/* Support Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Support</h4>
            <nav className={styles.links}>
              <span>Help Center</span>
              <span>Safety Information</span>
              <span>Cancellation Policy</span>
              <span>Contact Us</span>
            </nav>
          </div>

          {/* Legal Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <nav className={styles.links}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Trust & Safety</span>
              <span>Accessibility</span>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Stay Connected</h4>
            <p className={styles.newsletterText}>
              Join our newsletter for exclusive travel insights and special
              offers.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </Grid>

        <div className={styles.footerBottom}>
          <Flex
            justify={JustifyContent.SPACE_BETWEEN}
            align={AlignItems.CENTER}
            className={styles.bottomContent}
          >
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Tour Nigeria. All rights reserved.
            </p>
            <nav className={styles.social}>
              <Link to="/instagram">Instagram</Link>
              <Link to="/twitter">Twitter</Link>
              <Link to="/facebook">Facebook</Link>
            </nav>
          </Flex>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
