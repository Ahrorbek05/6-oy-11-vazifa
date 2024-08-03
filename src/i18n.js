import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          "home": "Bosh sahifa",
          "categories": "Kategoriyalar",
          "sales": "Sotuvlar",
          "faq": "FAQ",
          "about": "Haqida",
          "contact": "Bog'lanish",
          "signIn": "Kirish",
          "signUp": "Ro'yxatdan o'tish",
          "Get fresh groceries online without stepping out to make delicious food with the freshest ingredients": "Eng yangi ingredientlar bilan mazali taom tayyorlash uchun tashqariga chiqmasdan yangi oziq-ovqat mahsulotlarini onlayn xarid qiling"
        }
      },
      en: {
        translation: {
          "home": "Home",
          "categories": "Categories",
          "sales": "Sales",
          "faq": "FAQ",
          "about": "About",
          "contact": "Contact",
          "signIn": "Sign In",
          "signUp": "Sign Up",
        }
      },
      ru: {
        translation: {
          "home": "Домой",
          "categories": "Категории",
          "sales": "Продажи",
          "faq": "FAQ",
          "about": "О нас",
          "contact": "Контакт",
          "signIn": "Войти",
          "signUp": "Регистрация",
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
