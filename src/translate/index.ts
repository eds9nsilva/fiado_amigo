
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './pt-br.json';
import en from './en-eua.json';

i18n.use(initReactI18next).init({
    lng: 'pt',
    compatibilityJSON: 'v3',
    fallbackLng: 'pt',
    resources: {
        pt: pt,
        en: en,
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n;
