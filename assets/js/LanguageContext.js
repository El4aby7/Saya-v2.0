import { React, useState, useEffect, createContext, useContext } from './utils.js';
import translations from './translations.js';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const storedLang = localStorage.getItem('language') || 'en';
        setLang(storedLang);
        updateDir(storedLang);
    }, []);

    const updateDir = (l) => {
        document.documentElement.lang = l;
        document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    };

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        setLang(newLang);
        localStorage.setItem('language', newLang);
        updateDir(newLang);
    };

    const t = (path) => {
        const keys = path.split('.');
        let obj = translations[lang];
        for (let k of keys) {
            if (obj) obj = obj[k];
        }
        return obj || path;
    };

    return React.createElement(LanguageContext.Provider, {
        value: { lang, toggleLanguage, t }
    }, children);
};
