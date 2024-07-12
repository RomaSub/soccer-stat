export interface Competition {
  id: number;
  name: string;
}

export interface Score {
  fullTime: TimeScore | null;
  extraTime: TimeScore | null;
  penalties: TimeScore | null;
}

export interface TimeScore {
  homeTeam: number | null;
  awayTeam: number | null;
}

export interface Team {
  id: number;
  name: string;
}

export interface Match {
  id: number;
  competition: Competition;
  utcDate: string;
  status: string;
  matchday: number;
  score: Score;
  homeTeam: Team;
  awayTeam: Team;
}
