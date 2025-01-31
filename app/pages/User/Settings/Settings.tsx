import { FormEvent, useState } from "react";
import styles from "./Settings.module.scss";
import Button from "@mui/material/Button";

export default function Settings() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    // Save settings logic goes here
    alert("Settings saved!");
  };

  return (
    <section className={styles.settings}>
      <h2>Account Settings</h2>
      <form onSubmit={handleSave} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <Button type="submit" className={styles.saveButton}>
          Save Settings
        </Button>
      </form>
    </section>
  );
}
