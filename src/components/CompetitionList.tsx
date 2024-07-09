import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import CustomPagination from "./Pagination.tsx";
import { useState } from "react";
import chunk from "lodash.chunk";

const renderScore = score => {
  if (score.fullTime.home === null) return "";

  const fullTimeScore = `${score.fullTime.home}:${score.fullTime.away}`;
  const halfTimeScore = `(${score.halfTime.home}:${score.halfTime.away})`;

  return (
    <>
      {fullTimeScore} {halfTimeScore}
    </>
  );
};

const CompetitionList = ({ matches }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 13;
  const matchesChunk = chunk(matches, pageSize);

  return (
    <>
      <Table hover>
        <tbody>
          {matchesChunk[currentPage - 1]?.map(match => (
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
