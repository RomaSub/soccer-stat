import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { renderScoreApi2 } from "../utils/renderScore";
import { format } from "date-fns";
import { MatchApi2 } from "../types/Api2";
import CustomPagination from "./Pagination";
import getChunks from "../utils/getChunks";

interface TeamListProps {
  matches: MatchApi2[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const TeamList = ({ matches, currentPage, setCurrentPage }: TeamListProps) => {
  const { t } = useTranslation();
  const pageSize = 13;

  const teamMatchesChunks = getChunks(matches, currentPage, pageSize);

  return (
    <>
      {teamMatchesChunks.length === 0 && (
        <div className="text-center mt-4 mb-3">{t("noMatches")}</div>
      )}
      <Table hover className="border">
        <tbody>
          {teamMatchesChunks.map((match: MatchApi2) => (
            <tr key={match.id}>
              <td>{format(new Date(match.utcDate), "dd-MM-yyyy")}</td>
              <td>{format(new Date(match.utcDate), "HH:mm")}</td>
              <td>{t(`matchStatus.${match.status}`)}</td>
              <td>{`${match.homeTeam.name} — ${match.awayTeam.name}`}</td>
              <td>{renderScoreApi2(match.score)}</td>
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

export default TeamList;
