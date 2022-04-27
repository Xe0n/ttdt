import i18next from "i18next"
import { initReactI18next } from "react-i18next"

// "Inline" English and Arabic translations. 
// We can localize to any language and any number of languages.

const lng = localStorage.getItem('lng')

i18next
  .use(initReactI18next)
  .init({
    resources: {
        ru: require(`../language/ru.json`),
        tat: require(`../language/tat.json`)
      },
    lng: lng ? lng : 'ru',
    interpolation: {
      escapeValue: false
    }
  })

export default i18next