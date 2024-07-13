import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import CustomPagination from "./Pagination.tsx";
import { renderScoreApi4 } from "../utils/renderScore.ts";
import { MatchApi4 } from "../types/Api4";
import getChunks from "../utils/getChunks.ts";

interface CompetitionListProps {
  matches: MatchApi4[];
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

  const competitionMatchesChunks = getChunks(matches, currentPage, pageSize);

  return (
    <>
      {competitionMatchesChunks.length === 0 && (
        <div className="text-center mt-4 mb-3">{t("noMatches")}</div>
      )}
      <Table hover responsive className="border">
        <tbody>
          {competitionMatchesChunks.map((match: MatchApi4) => (
            <tr className="text-nowrap" key={match.id}>
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
