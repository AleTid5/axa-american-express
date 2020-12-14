import React, { createContext, useState } from "react";

const languages = [
  {
    value: "es",
    content: "Español",
  },
  {
    value: "en",
    content: "English",
  },
];

export const LanguageContext = createContext({
  language: null,
});

const { Provider } = LanguageContext;

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages[0].value);

  return (
    <Provider value={{ language, setLanguage, languages }}>{children}</Provider>
  );
};
