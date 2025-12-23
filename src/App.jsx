import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobsDetails from "./Pages/JobsDetails";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation("common");
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 ">
        <nav id="navbar" className="flex justify-between items-center bg-white shadow py-2 px-3  sm:px-4 md:px-8" >
          <div className="flex gap-4">
            <Link
              to="/"
              className="relative px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
               {t("nav.home")}
            </Link>

            <Link
              to="/jobs"
              className="relative px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl  hidden  md:block">
              {t("nav.jobs")}
            </Link>
          </div>
          <LanguageSwitcher />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobsDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
