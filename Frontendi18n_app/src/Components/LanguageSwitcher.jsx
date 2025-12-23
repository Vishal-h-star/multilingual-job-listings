import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
    document.getElementById("navbar").dir = 'ltr'
  }, [i18n, i18n.language]);

  return (
    <select
      value={i18n.language}
      onChange={(e) => languageChange(e.target.value)}
      className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <option value="en" className="bg-white text-gray-900">
        🇺🇸 English
      </option>
      <option value="fr" className="bg-white text-gray-900">
        🇫🇷 Français
      </option>
      <option value="ar" className="bg-white text-gray-900">
        🇸🇦 العربية
      </option>
      <option value="hi" className="bg-white text-gray-900">
        🇮🇳 हिन्दी
      </option>
    </select>
  );
}
