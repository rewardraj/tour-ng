import { createContext, useState, useContext, ReactNode } from "react";

interface LangContextProps {
  children: ReactNode;
}

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: LangContextProps) {
  const [language, setLanguage] = useState(
    sessionStorage.getItem("preferredLanguage") || "EN"
  );

  const updateLanguage = (lng: string) => {
    setLanguage(lng);
    sessionStorage.setItem("preferredLanguage", lng);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
