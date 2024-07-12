export interface CompetitionApi4 {
  id: number;
  name: string;
}

export interface ScoreApi4 {
  fullTime: TimeScoreApi4 | null;
  halfTime: TimeScoreApi4 | null;
}

export interface TimeScoreApi4 {
  home: number | null;
  away: number | null;
}

export interface TeamApi4 {
  id: number;
  name: string;
}

export interface MatchApi4 {
  id: number;
  competition: Competition;
  utcDate: string;
  status: string;
  matchday: number;
  score: Score;
  homeTeam: Team;
  awayTeam: Team;
}
