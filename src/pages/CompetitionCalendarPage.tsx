import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCompetitionMatches } from "../services/footbalApi";
import CustomSpinner from "../components/Spinner";
import { useEffect, useState } from "react";
import CompetitionList from "../components/CompetitionList";
import DateFilter from "../components/DateFilter";
import CustomBreadcrumbs from "../components/Breadcrumbs";
import getRoutes from "../routes";

const CompetitionCalendar = () => {
  const { t } = useTranslation();
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();

  const { data, isLoading, isError, status } = getCompetitionMatches({
    id,
    dateFrom,
    dateTo
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [dateFrom, dateTo]);

  if (isError) return <div>{`статус ошибки: ${status}`}</div>;

  if (isLoading) return <CustomSpinner />;

  return (
    <Container>
      <CustomBreadcrumbs
        type={t("competitions")}
        name={data.competition.name}
        path={getRoutes.competitionsPagePath()}
      />
      <h3 className="mb-3">{t("matches")}</h3>
      <DateFilter
        onDateChange={(from, to) => {
          setDateFrom(from);
          setDateTo(to);
        }}
      />
      <CompetitionList
        matches={data.matches}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default CompetitionCalendar;
