import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationENUS from 'zod-i18n-map/locales/es/zod.json';
import translationPTBR from 'zod-i18n-map/locales/pt/zod.json';
import { zodI18nMap } from 'zod-i18n-map';
import { z } from 'zod';

import PTBR from './pt-BR.json';
import ENUS from './en-US.json';

const resources = {
    'pt-BR': PTBR,
    'en-US': ENUS,
    pt: { zod: translationPTBR },
    en: { zod: translationENUS },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    },
});

z.setErrorMap(zodI18nMap);

export default i18n;