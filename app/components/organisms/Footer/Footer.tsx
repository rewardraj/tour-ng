import Grid from "@app/components/layouts/Grid/Grid";
import styles from "./Footer.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg" sx={{ py: 8, pt: 0 }}>
        <div className={styles.topSection}>
          <h2 className={styles.mainTitle}>{t("footer.mainTitle")}</h2>
          <p className={styles.tagline}>{t("footer.tagline")}</p>
        </div>

        <Grid
          desktopColumns={4}
          tabletColumns={2}
          mobileColumns={1}
          gridGap="4rem"
        >
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t("footer.sections.company.title")}</h4>
            <nav className={styles.links}>
              <span>{t("footer.sections.company.about")}</span>
              <span>{t("footer.sections.company.story")}</span>
              <span>{t("footer.sections.company.careers")}</span>
              <span>{t("footer.sections.company.press")}</span>
            </nav>
          </div>

          {/* Support Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t("footer.sections.support.title")}</h4>
            <nav className={styles.links}>
              <span>{t("footer.sections.support.help")}</span>
              <span>{t("footer.sections.support.safety")}</span>
              <span>{t("footer.sections.support.cancellation")}</span>
              <span>{t("footer.sections.support.contact")}</span>
            </nav>
          </div>

          {/* Legal Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t("footer.sections.legal.title")}</h4>
            <nav className={styles.links}>
              <span>{t("footer.sections.legal.privacy")}</span>
              <span>{t("footer.sections.legal.terms")}</span>
              <span>{t("footer.sections.legal.trust")}</span>
              <span>{t("footer.sections.legal.accessibility")}</span>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t("footer.sections.newsletter.title")}</h4>
            <p className={styles.newsletterText}>
              {t("footer.sections.newsletter.description")}
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder={t("footer.sections.newsletter.placeholder")}
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                {t("footer.sections.newsletter.button")}
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
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <nav className={styles.social}>
              <Link to="/instagram">{t("footer.social.instagram")}</Link>
              <Link to="/twitter">{t("footer.social.twitter")}</Link>
              <Link to="/facebook">{t("footer.social.facebook")}</Link>
            </nav>
          </Flex>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
