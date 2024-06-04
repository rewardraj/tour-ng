import Grid from "@app/components/layouts/Grid/Grid";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Grid desktopColumns={3} tabletColumns={2} mobileColumns={1}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>About</h4>
            <ul className={styles.links}>
              <li>
                <a href="#" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Press
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Support</h4>
            <ul className={styles.links}>
              <li>
                <a href="#" className={styles.link}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Online Chat
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Wechat
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Call Center
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>FAQ</h4>
            <ul className={styles.links}>
              <li>
                <a href="#" className={styles.link}>
                  Account
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Refunds
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Newsletter</h4>
            <p className={styles.text}>
              Don't miss out on the exciting world of travel - subscribe now and
              embark on a journey of discovery with us.
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
          </div> */}
        </Grid>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 NGTours, All Rights Reserved</p>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="dripicons dripicons-facebook"></i>
            </a>
            <a href="#">
              <i className="dripicons dripicons-twitter"></i>
            </a>
            <a href="#">
              <i className="dripicons dripicons-instagram"></i>
            </a>
            <a href="#">
              <i className="dripicons dripicons-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
