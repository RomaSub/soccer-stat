import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { getTeamMatches } from "../services/footbalApi";
import getRoutes from "../routes";
import { useLocation, useParams } from "react-router-dom";
import CustomBreadcrumbs from "../components/Breadcrumbs";
import CustomSpinner from "../components/Spinner";
import DateFilter from "../components/DateFilter";
import TeamList from "../components/TeamList";

const TeamCalendar = () => {
  const { t } = useTranslation();
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { id } = useParams();
  const { state } = useLocation();

  const { data, isLoading, isError, status } = getTeamMatches({
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
        type={t("teams")}
        name={state.teamName}
        path={getRoutes.teamsPagePath()}
      />
      <h3 className="mb-3">{t("matches")}</h3>

      <DateFilter
        onDateChange={(from, to) => {
          setDateFrom(from);
          setDateTo(to);
        }}
      />
      <TeamList
        matches={data.matches}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default TeamCalendar;
