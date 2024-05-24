import { AlignItems, FlexGap, JustifyContent } from "@app/shared/Layout/Layout";
import styles from "./Navbar.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";

const Navbar = () => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Navigation__Inner}>
        <div className={styles.Logo}>
          <a className={styles.Logo__Link}>Tour. NG</a>
        </div>
        <Flex
          align={AlignItems.CENTER}
          gap={FlexGap.LARGE}
          justify={JustifyContent.CENTER}
          className={styles.Navigation__Links}
        >
          <a className={styles.Logo__Link} href="/about">
            About
          </a>
          <a className={styles.Logo__Link} href="/explore">
            Explore
          </a>
          <a className={styles.Logo__Link} href="/travel">
            Travel
          </a>
        </Flex>
        <Flex align={AlignItems.CENTER} className={styles.Navigation__Lang}>
          <button type="button">PL</button>
          <button type="button">EN</button>
        </Flex>
      </div>
    </nav>
  );
};

export default Navbar;
