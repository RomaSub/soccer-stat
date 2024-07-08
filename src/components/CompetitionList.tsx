import { Table } from "react-bootstrap";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

  const renderScore = (score) => {
    const fullTimeHome = score.fullTime.home !== null ? score.fullTime.home : "";
    const fullTimeAway = score.fullTime.away !== null ? score.fullTime.away : "";
    const halfTimeHome = score.halfTime.home !== null ? score.halfTime.home : "";
    const halfTimeAway = score.halfTime.away !== null ? score.halfTime.away : "";

    return (
      <>
        {fullTimeHome !== "" && fullTimeAway !== "" ? `${fullTimeHome}:${fullTimeAway}` : ""}
        {halfTimeHome !== "" && halfTimeAway !== "" ? ` (${halfTimeHome}:${halfTimeAway})` : ""}
      </>
    );
  };

const CompetitionList = ({ matches }) => {
  const { t } = useTranslation();

  return (
    <Table hover>
      <tbody>
        {matches.map(match => (
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
  );
};

export default CompetitionList;
//<>
//  {matches.map((match) => (
//    <ListGroup key={match.id} horizontal='lg' className="my-2">
//      <ListGroup.Item>{format(match.utcDate, 'dd-MM-yyyy')}</ListGroup.Item>
//      <ListGroup.Item>{format(match.utcDate, 'HH:mm')}</ListGroup.Item>
//      <ListGroup.Item>{t(`matchStatus.${match.status}`)}</ListGroup.Item>
//      <ListGroup.Item>{`${match.homeTeam.name} - ${match.awayTeam.name}`}</ListGroup.Item>
//    </ListGroup>
//  ))}
//</>
