import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@app/shared/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import styles from "./Login.module.scss";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, _setError] = useState("");
  const [loading, _setLoading] = useState(false);

  const { emailLogin, googleLogin, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>{t("auth.login.title")}</h2>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={() => emailLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">{t("auth.login.email")}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@email.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">{t("auth.login.password")}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className={styles.submitButton}
          >
            {loading ? t("auth.login.loading") : t("auth.login.submit")}
          </button>
        </form>
        <div className={styles.socialLogin}>
          <div className={styles.divider}>
            <span>{t("auth.login.or")}</span>
          </div>
          <button
            type="button"
            onClick={googleLogin}
            className={`${styles.submitButton} ${styles.googleButton}`}
            disabled={loading}
          >
            {t("auth.login.googleSignIn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
