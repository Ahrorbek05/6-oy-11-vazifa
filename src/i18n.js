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
          "Get": "Eng yangi ingredientlar bilan mazali taom tayyorlash uchun tashqariga chiqmasdan yangi oziq-ovqat mahsulotlarini onlayn xarid qiling",
          "Let": "Oziq-ovqatlaringiz sizga yetib kelsin",
          "Fresh": "Yangi sabzavotlar",
          "Guarantee" : "100% Kafolat",
          "Cash": "Yetkazib berishda naqd pul",
          "Spinach": "Yangi ismaloq",
          "Fast": "Tez yetkazib berish",
          "Carrot": "Yangi sabzi",
          "Lorem": "Bu muhim ekanligini bilish muhim, undan keyin mijozlarga xizmat ko'rsatish kerak.",
          "Honey": "Asal",
          "Flour": "Gullar",
          "Spices & Seasonings": "Ziravorlar va ziravorlar",
          "Vegetables & Fruits": "Sabzavotlar va mevalar",
          "Dairy Products": "Kundalik mahsulotlar",
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
          "Get": "Get fresh groceries online without going out to prepare delicious meals with the freshest ingredients",
          "Let": "Let your groceries come to you",
          "Fresh": "Vegetables",
          "Guarantee" : "100% Guarantee",
          "Cash": 'on Delivery',
          "Spinach": "Fresh Spinach",
          "Fast": "Delivery",
          "Carrot": "Fresh Carrot",
          "Spices & Seasonings": "Spices & Seasonings",
          "Diary Products": "Diary Products",
          "Vegetables & Fruits": "Vegetables & Fruits",
          "Lorem": "It's important to know that this is important, followed by customer service."
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
          "Get": "Покупайте свежие продукты онлайн, не выходя из дома, и готовьте вкусные блюда из самых свежих ингредиентов.",
          "Let": "Пусть ваши продукты придут к вам",
          "Fresh": "Свежие овощи",
          "Guarantee" : "100% Гарантия" ,
          "Cash": 'Оплата при доставке',
          "Spinach": "Свежий шпинат",
          "Fast": "Быстрая доставка",
          "Carrot": "Свежая морковь",
          "Lorem": "Важно знать, что это важно, за этим будет следить служба поддержки клиентов.",
          "Spices & Seasonings": "Специи и приправы",
          "Diary Products": "Молочные продукты",
          "Vegetables & Fruits": "Овощи и фрукты",
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
