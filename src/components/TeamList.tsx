import { Button, Col, Row, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { renderScoreApi2 } from "../utils/renderScore";
import { format } from "date-fns";
import { MatchApi2 } from "../types/Api2";
import CustomPagination from "./Pagination";

interface TeamListProps {
  matches: MatchApi2[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const TeamList = ({ matches, currentPage, setCurrentPage }: TeamListProps) => {
  const { t } = useTranslation();
  const pageSize = 13;
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageMatches = matches.slice(startIndex, startIndex + pageSize);

  return (
    <>
      {currentPageMatches.length ? (
        <Table hover>
          <tbody>
            {currentPageMatches.map((match: MatchApi2) => (
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
      ) : (
        <>
          <Row className="text-center justify-content-center mt-5">
            <Col xs="auto">{t("nothing")}</Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col xs="auto">
              <Button>{t("resetBtn")}</Button>
            </Col>
          </Row>
        </>
      )}
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
