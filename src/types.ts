export type TeamPoints = {
  [key: string]: number;
};
export type TeamData = {
  team: string;
  points: number;
};
export type singleTeam = {
  id: number;
  name: string;
  logo: string;
};

export type singleGame = {
  id: number;
  teams: {
    away: singleTeam;
    home: singleTeam;
  };
  scores: {
    home: number;
    away: number;
  };
  week: string;
};

export type gamesResponse = {
  response: singleGame[];
};
