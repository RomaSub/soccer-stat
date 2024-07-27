/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import getRoutes from "../routes";

const ErrorPage = ({ error }: any) => {
  const { t } = useTranslation();
  console.log(error);
  return (
    <div className="text-center mt-5">
      <h1>{`${t("errorStatus")}: ${error.status}`}</h1>
      <p>{error.data.message}</p>
      <Link className="text-decoration-none" to={getRoutes.competitionsPagePath()}>
        {t("return")}
      </Link>
    </div>
  );
};

export default ErrorPage;
