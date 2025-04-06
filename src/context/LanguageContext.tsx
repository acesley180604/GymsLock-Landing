import React, { createContext, useState, useContext, ReactNode } from "react";
import enTranslations from "../translations/en";
import zhTwTranslations from "../translations/zh-TW";

type Language = "English" | "繁體中文";
type TranslationsType = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof TranslationsType) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("English");

  const translations = {
    "English": enTranslations,
    "繁體中文": zhTwTranslations,
  };

  const t = (key: keyof TranslationsType): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}; 