import { useTranslation } from "react-i18next";

export default function Jobs() {
  // const { t } = useTranslation("jobs");
  const { t } = useTranslation(["common", "jobs"]);

  const jobs = t("jobs:jobs");
  // const pageTitle = t("jobs:pageTitle");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        {t("jobs:pageTitle")}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="group relative bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>

            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1 text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {job.location}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {job.type}
              </span>
            </div>

            <p className="text-gray-600 mb-6 line-clamp-3">{job.description}</p>

            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              {t("buttons.applyNow")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
