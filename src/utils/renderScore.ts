import { ScoreApi2 } from "../types/Api2";
import { ScoreApi4 } from "../types/Api4";

export const renderScoreApi2 = (score: ScoreApi2): string => {
  const fullTimeScore =
    score.fullTime && score.fullTime.homeTeam !== null && score.fullTime.awayTeam !== null
      ? `${score.fullTime.homeTeam}:${score.fullTime.awayTeam}`
      : "";

  const extraTimeScore =
    score.extraTime && score.extraTime.homeTeam !== null && score.extraTime.awayTeam !== null
      ? ` (${score.extraTime.homeTeam}:${score.extraTime.awayTeam})`
      : "";

  const penaltiesTimeScore =
    score.penalties && score.penalties.homeTeam !== null && score.penalties.awayTeam !== null
      ? ` (${score.penalties.homeTeam}:${score.penalties.awayTeam})`
      : "";

  return `${fullTimeScore} ${extraTimeScore} ${penaltiesTimeScore}`.trim();
};

export const renderScoreApi4 = (score: ScoreApi4): string => {
  const fullTimeScore =
    score.fullTime && score.fullTime.home !== null && score.fullTime.away !== null
      ? `${score.fullTime.home}:${score.fullTime.away}`
      : "";

  const extraTimeScore =
    score.halfTime && score.halfTime.home !== null && score.halfTime.away !== null
      ? ` (${score.halfTime.home}:${score.halfTime.away})`
      : "";
  return `${fullTimeScore} ${extraTimeScore}`.trim();
};
