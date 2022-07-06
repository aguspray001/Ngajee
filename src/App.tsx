import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  
  const changeLanguage = () => {
    if (lang === "en") {
      setLang("id")
      i18n.changeLanguage("id").then(e => {
        localStorage.setItem("lang", "id");
      });
    } else {
      setLang("en")
      i18n.changeLanguage("en").then(e => {
        localStorage.setItem("lang", "en");
      })
    }
  }

  useEffect(() => {
    const localLang = localStorage.getItem("lang")?.toString();
    i18n.changeLanguage(localLang).then((e) => setLang(localLang || ""));
  }, [i18n])

  return (
    <div className="App">
      <p>Language : {lang === "en" ? "English" : "Bahasa Indonesia"}</p>
      <button onClick={changeLanguage}>{lang === "en" ? "Change Language" : "Ganti Bahasa"}</button>
      <h2>{t("title")}</h2>
      <p>{t("content.description")}</p>

      <p>
        {t("content.source")}
        <a href="https://en.wikipedia.org/wiki/Earth">https://en.wikipedia.org/wiki/Earth</a>
      </p>
    </div>
  );
}

export default App;
