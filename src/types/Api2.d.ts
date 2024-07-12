export interface CompetitionApi2 {
  id: number;
  name: string;
}

export interface ScoreApi2 {
  fullTime: TimeScoreApi2 | null;
  extraTime: TimeScoreApi2 | null;
  penalties: TimeScoreApi2 | null;
}

export interface TimeScoreApi2 {
  homeTeam: number | null;
  awayTeam: number | null;
}

export interface TeamApi2 {
  id: number;
  name: string;
}

export interface MatchApi2 {
  id: number;
  competition: Competition;
  utcDate: string;
  status: string;
  matchday: number;
  score: Score;
  homeTeam: Team;
  awayTeam: Team;
}
