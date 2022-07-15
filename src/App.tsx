import 'assets/styles/index.scss';
import MainApp from 'pages';
import { useEffect, useState } from 'react';
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
    <div className=''>
      <MainApp/>
    </div >
  );
}

export default App;
