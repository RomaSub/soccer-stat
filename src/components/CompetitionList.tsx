import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import CustomPagination from "./Pagination.tsx";

interface Team {
  name: string;
}

interface Score {
  fullTime: {
    home: number | null;
    away: number | null;
  };
  halfTime: {
    home: number | null;
    away: number | null;
  };
}

interface Match {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

interface CompetitionListProps {
  matches: Match[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const renderScore = (score: Score) => {
  if (score.fullTime.home === null) return "";

  const fullTimeScore = `${score.fullTime.home}:${score.fullTime.away}`;
  const halfTimeScore = `(${score.halfTime.home}:${score.halfTime.away})`;

  return (
    <>
      {fullTimeScore} {halfTimeScore}
    </>
  );
};

const CompetitionList = ({
  matches,
  currentPage,
  setCurrentPage
}: CompetitionListProps) => {
  const { t } = useTranslation();
  const pageSize = 13;
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageMatches = matches.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <Table hover>
        <tbody>
          {currentPageMatches.map((match: Match) => (
            <tr key={match.id}>
              <td>{format(match.utcDate, "dd-MM-yyyy")}</td>
              <td>{format(match.utcDate, "HH:mm")}</td>
              <td>{t(`matchStatus.${match.status}`)}</td>
              <td>{`${match.homeTeam.name} — ${match.awayTeam.name}`}</td>
              <td>{renderScore(match.score)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CustomPagination
        itemsCount={matches.length}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CompetitionList;
