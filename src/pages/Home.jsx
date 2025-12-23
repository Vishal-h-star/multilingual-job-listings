import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation("common");

  // can also be written as
  //  const data = t("common")

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            🌍  {t("buttons.platformTag")}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {t("home.title")}
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {t("home.homeText")}
        </p>

        <Link
          to="/jobs"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <span>{t("buttons.viewJobs")}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
