import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import CustomPagination from "./Pagination.tsx";
import { renderScoreApi4 } from "../utils/renderScore.ts";
import { Match } from "../types/Match";

interface CompetitionListProps {
  matches: Match[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
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
              <td>{renderScoreApi4(match.score)}</td>
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
