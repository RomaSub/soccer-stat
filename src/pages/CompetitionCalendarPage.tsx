import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCompetitionMatches } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";
import { useEffect, useState } from "react";
import CompetitionList from "../components/CompetitionList";
import DateFilter from "../components/DateFilter";
import CustomBreadcrumbs from "../components/Breadcrumbs";
import getRoutes from "../routes";
import ErrorPage from "./ErrorPage";

const CompetitionCalendar = () => {
  const { t } = useTranslation();
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { state } = useLocation();
  const { id } = useParams();

  const { data, isLoading, isError, error } = getCompetitionMatches({
    id,
    dateFrom,
    dateTo
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [dateFrom, dateTo]);

  if (isError) return <ErrorPage error={error} />;

  if (isLoading) return <CustomSpinner />;

  return (
    <Container>
      <CustomBreadcrumbs type={t("competitions")} name={state.leagueName} path={getRoutes.competitionsPagePath()} />
      <h3 className="mb-3">{t("matches")}</h3>
      <DateFilter
        onDateChange={(from, to) => {
          setDateFrom(from);
          setDateTo(to);
        }}
      />
      <CompetitionList matches={data.matches} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default CompetitionCalendar;
