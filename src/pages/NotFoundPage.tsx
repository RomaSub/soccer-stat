import { Link } from "react-router-dom";
import getRoutes from "../routes";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1>404</h1>
      <Link
        className="text-decoration-none"
        to={getRoutes.competitionsPagePath()}
      >
        {t("notFound")}
      </Link>
    </div>
  );
};
export default NotFound;
